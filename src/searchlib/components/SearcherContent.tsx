import { useEffect, useState } from "react";
import { useQueries, useQuery } from "@tanstack/react-query";
import { I18nProvider } from "react-aria";
import {
  HeroiconsChevronUpDown20Solid,
  MingcuteLoadingFill,
  RiErrorWarningFill,
  SvgSpinners12DotsScaleRotate,
} from "../assets/icons";
import {
  Arrival,
  ArrivalResponse,
  DatesResponse,
  Departure,
  DepartureResponse,
  STYLE_VARIANTS,
  SystemOptions,
} from "./types";
import { useSearch } from "./Searcher";
import clsx from "clsx";
import { DepartureSelector } from "./DepartureSelector";
import { ArrivalSelector } from "./ArrivalSelector";

import styles from "../assets/searcher.module.css";
import { StartDatePicker } from "./StartDatePicker";
import { EndDatePicker } from "./EndDatePicker";
import { PassengerCounter } from "./PassengerCounter";

interface Props {
  url: string | undefined;
  variant?: STYLE_VARIANTS;
  vertical?: boolean;
  lang: "es" | "en";
}

export const SearchContent = ({
  url,
  variant = "flat",
  vertical,
  lang,
}: Props) => {
  const [isDefaultSet, setIsDefaultSet] = useState(false);
  const { departure, arrival, setter, endDate, startDate, passengers } =
    useSearch();
  const [isDisabled, setIsDisabled] = useState(true);

  const sendToQuaweb = () => {
    const type = systemOptions?.data?.DATE_FORMAT.value;
    const obj = {
      departure,
      arrival,
      startDate,
      endDate,
      passengers,
    };
    console.log(obj);
    const url = new URL("https://" + systemOptions?.data?.URL_QUAWEB.value!);
    const params = url.searchParams;
    params.append("idDeparture", departure?.id!);
    params.append("txtDeparture", departure?.value!);
    params.append("txtArrival", arrival?.value!);
    params.append("idArrival", arrival?.id!);
    const newStrtDate = startDate!.split("-");
    params.append(
      "departureDate",
      type === "US"
        ? `${newStrtDate[1]}/${newStrtDate[0]}/${newStrtDate[2]}`
        : newStrtDate.reverse().join("/"),
    );
    if (endDate) {
      const newEndDate = endDate!.split("-");
      params.append(
        "returnDate",
        type === "US"
          ? `${newEndDate[1]}/${newEndDate[0]}/${newEndDate[2]}`
          : newEndDate.reverse().join("/"),
      );
      params.append("rbtnTravelway", "1");
    } else params.append("rbtnTravelway", "0");
    window.open(url.toString(), "_blank");
  };

  const swapLocations = () => {
    const prevDep = departure;
    const prevArr = arrival;

    setter("departure", prevArr);
    setTimeout(() => {
      setter("arrival", prevDep);
    }, 150);
  };

  const {
    isPending: optionsPending,
    data: systemOptions,
    refetch: refetchSysOptions,
    error: systemError,
  } = useQuery({
    queryKey: ["systemOptions", url],
    queryFn: () =>
      fetch(`${url}/public/externalfriendly/getAllOptionsWebsite`).then(
        (res) => res.json() as unknown as SystemOptions,
      ),
    refetchInterval: 300000,
    refetchIntervalInBackground: true,
    enabled: !!url?.length,
  });

  const {
    isPending: deparutePending,
    data: departureData,
    error: DepartureError,
  } = useQuery({
    queryKey: ["Departures"],
    queryFn: () =>
      fetch(`${url}/public/externalfriendly/getDepartures`).then(
        (res) => res.json() as unknown as DepartureResponse,
      ),
    enabled: !!systemOptions?.data,
  });

  const {
    isPending: arrivalPending,
    data: arrivalData,
    error: ArrivalError,
    status: arrivalStatus,
    fetchStatus: ArrivalFetchStatus,
  } = useQuery({
    queryKey: ["Arrivals", departure?.id],
    queryFn: async () => {
      const body = new FormData();
      body.append("ID_DEPARTURE", departure?.id ?? "0");
      const res = await fetch(`${url}/public/externalFriendly/getArrivals`, {
        method: "POST",
        body,
      });
      return res.json() as unknown as ArrivalResponse;
    },
    enabled: !!departure?.id,
  });

  const [datesOw, datesRw] = useQueries({
    queries: [
      {
        queryKey: ["startDates", departure?.id, arrival?.id],
        queryFn: async () => {
          const body = new FormData();
          body.append("ID_DEPARTURE", departure?.id ?? "0");
          body.append("ID_ARRIVAL", arrival?.id ?? "0");
          body.append("TYPE_WAY", "1");
          const res = await fetch(
            `${url}/public/externalfriendly/getDatesForCalendar`,
            {
              method: "POST",
              body,
            },
          );
          return res.json() as unknown as DatesResponse;
        },
        enabled: !!departure?.id && !!arrival?.id,
      },
      {
        queryKey: ["endDates", arrival?.id, departure?.id],
        queryFn: async () => {
          const body = new FormData();
          body.append("ID_DEPARTURE", arrival?.id ?? "0");
          body.append("ID_ARRIVAL", departure?.id ?? "0");
          body.append("TYPE_WAY", "1");
          const res = await fetch(
            `${url}/public/externalfriendly/getDatesForCalendar`,
            {
              method: "POST",
              body,
            },
          );
          return res.json() as unknown as DatesResponse;
        },
        enabled: !!departure?.id && !!arrival?.id,
      },
    ],
  });

  useEffect(() => {
    refetchSysOptions();
  }, [url]);

  useEffect(() => {
    if (!isDefaultSet) {
      const defDep = systemOptions?.data?.DEFAULT_CITY_DEPARTURE.value;
      if (defDep != "0" && departureData) {
        const dep = departureData?.data.find((item) => item.id == defDep);
        setter("departure", dep);
      }
    }
  }, [systemOptions, departureData]);

  useEffect(() => {
    if (!isDefaultSet) {
      const defArr = systemOptions?.data?.DEFAULT_CITY_ARRIVAL.value;
      if (defArr != "0" && arrivalData) {
        const arr = arrivalData?.data.find((item) => item.id == defArr);
        setter("arrival", arr);
        setIsDefaultSet(true);
      }
    }
  }, [systemOptions, arrivalData, isDefaultSet]);

  useEffect(() => {
    setIsDefaultSet(false);
    setter("arrival", null);
    setter("departure", null);
  }, [systemOptions]);

  useEffect(() => {
    if (!departure) return setIsDisabled(true);
    if (!arrival) return setIsDisabled(true);
    if (!startDate) return setIsDisabled(true);
    if (systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value !== "0") {
      if (!passengers ?? passengers === 0) return setIsDisabled(true);
    }
    setIsDisabled(false);
  }, [
    departure,
    arrival,
    startDate,
    passengers,
    systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS,
  ]);

  return (
    <>
      {optionsPending && (
        <div className="absolute left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-opacity-20 p-2 text-white backdrop-blur-sm 2xl:gap-0">
          <MingcuteLoadingFill className="animate-spin text-4xl text-primary-100" />
        </div>
      )}
      {systemOptions && systemOptions.msg.startsWith("Web") && (
        <div className="absolute left-0 top-0 z-50 flex h-full w-full select-none flex-col items-center justify-center gap-5 rounded-2xl bg-opacity-20 p-2 text-neutral-800 backdrop-blur-sm duration-200 dark:text-white 2xl:gap-0">
          <span className="text-center text-sm font-bold">
            {lang === "es"
              ? "Estamos en mantenimiento"
              : "We are in maintenance"}
          </span>
          <span className="flex items-center gap-1 text-center text-3xl font-extrabold tracking-widest">
            {lang === "es" ? (
              <>
                VUELVE PR <SvgSpinners12DotsScaleRotate /> NTO
              </>
            ) : (
              <>
                COME BACK S <SvgSpinners12DotsScaleRotate /> ON
              </>
            )}
          </span>
        </div>
      )}
      {systemError && (
        <div className="absolute left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-red-800 bg-opacity-20 p-2 backdrop-blur-sm 2xl:gap-0">
          <RiErrorWarningFill className="text-2xl text-red-500" />
          <span className="text-center text-2xl text-red-500">
            {lang === "es"
              ? "Ha ocurrido un error con la URL"
              : "An error ocurred with the URL"}
          </span>
        </div>
      )}
      <I18nProvider locale={lang}>
        <div
          className={clsx(
            styles[variant],
            vertical
              ? styles.searchContainerV
              : [
                  styles.searchContainer,
                  systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value === "0"
                    ? styles.withoutPassengers
                    : styles.withPassengers,
                ],
          )}
        >
          <div
            className={clsx(
              styles.inputSpace1,
              systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value !== "0" &&
                styles.withPassengers,
            )}
          >
            <DepartureSelector
              variant={variant}
              data={departureData?.data ?? ([] as Departure[])}
              isLoading={deparutePending}
              error={
                DepartureError
                  ? lang === "es"
                    ? "Ocurrio un error"
                    : "An error has ocurred"
                  : undefined
              }
              lang={lang}
            />
          </div>
          <button
            onClick={swapLocations}
            className={clsx(
              "group",
              styles[variant],
              styles.swap,
              arrival ? styles.active : styles.inactive,
            )}
          >
            <HeroiconsChevronUpDown20Solid className="text-2xl text-gray-400 duration-200 group-hover:text-primary-500" />
          </button>
          <div
            className={clsx(
              styles.inputSpace1,
              systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value !== "0" &&
                styles.withPassengers,
            )}
          >
            <ArrivalSelector
              variant={variant}
              data={arrivalData?.data ?? ([] as Arrival[])}
              isDisabled={
                ArrivalFetchStatus === "idle"
                  ? arrivalStatus !== "success"
                  : false
              }
              isLoading={arrivalPending}
              error={
                ArrivalError
                  ? lang === "es"
                    ? "No hay destinos disponibles"
                    : "No Arrivals available"
                  : undefined
              }
              lang={lang}
            />
          </div>
          <div
            className={clsx(
              styles.inputSpace2,
              systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value === "0"
                ? styles.withoutPassengers
                : styles.withPassengers,
            )}
          >
            <StartDatePicker
              variant={variant}
              isDisabled={!(departure && arrival)}
              isLoading={datesOw.isFetching}
              error={
                systemOptions?.data?.WEB_SALE_SHOW_ITINERARIES_DATEPICKER
                  .value === "0"
                  ? undefined
                  : !datesRw.data
                    ? undefined
                    : !datesOw.data?.data.ow.length
                      ? lang === "es"
                        ? "No hay fechas de salida"
                        : "No departure dates available"
                      : undefined
              }
              validate={
                systemOptions?.data?.WEB_SALE_SHOW_ITINERARIES_DATEPICKER
                  .value === "0"
                  ? undefined
                  : datesOw.data?.data.ow
              }
              lang={lang}
            />
          </div>
          <div
            className={clsx(
              styles.inputSpace2,
              systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value === "0"
                ? styles.withoutPassengers
                : styles.withPassengers,
            )}
          >
            <EndDatePicker
              variant={variant}
              isDisabled={!(departure && arrival)}
              isLoading={datesRw.isFetching}
              error={
                systemOptions?.data?.WEB_SALE_SHOW_ITINERARIES_DATEPICKER
                  .value === "0"
                  ? undefined
                  : !datesRw.data
                    ? undefined
                    : !datesRw.data?.data.ow.length
                      ? lang === "es"
                        ? "No hay fechas de returno"
                        : "No arrival dates available"
                      : undefined
              }
              validate={
                systemOptions?.data?.WEB_SALE_SHOW_ITINERARIES_DATEPICKER
                  .value === "0"
                  ? undefined
                  : datesRw.data?.data.ow
              }
              lang={lang}
            />
          </div>
          {systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value !== "0" && (
            <div className={clsx(styles.passengersInput)}>
              <PassengerCounter
                variant={variant}
                max={parseInt(
                  systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value!,
                )}
                lang={lang}
              />
            </div>
          )}
          <button
            disabled={isDisabled}
            className={clsx(
              styles[variant],
              styles.formButton,
              systemOptions?.data?.WEB_MAX_SELECTABLE_SEATS.value !== "0" &&
                styles.withPassengers,
              isDisabled && styles.disabled,
            )}
            onClick={sendToQuaweb}
          >
            {lang === "es" ? "Buscar" : "Search"}
          </button>
        </div>
      </I18nProvider>
    </>
  );
};
