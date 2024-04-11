import { Arrival, ArrivalSelectorProps } from "./types";
import clsx from "clsx";
import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

import styles from "../assets/selector.module.css";
import { useSearch } from "./Searcher";
import {
  HeroiconsCheck20Solid,
  HeroiconsMapPin20Solid,
  HeroiconsXMark20Solid,
  MingcuteLoadingFill,
  RiErrorWarningFill,
} from "../assets/icons";

export const ArrivalSelector = ({
  data,
  isLoading,
  error,
  variant = "flat",
  isDisabled,
  lang,
}: ArrivalSelectorProps) => {
  const { departure, setter, arrival } = useSearch();
  const [selected, setSelected] = useState<null | Arrival>(null);
  const [query, setQuery] = useState("");
  const [inputFocus, setInputFocus] = useState(false);

  const handleSelect = (item: Arrival | null) => {
    setSelected(item);
    setter("arrival", item);
  };
  const filteredData =
    query === ""
      ? data!
      : data!.filter((item) =>
          item.label
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );
  const clean = () => {
    setQuery("");
    setSelected(null);
    setter("arrival", null);
  };

  useEffect(() => {
    if (!departure) clean();
  }, [departure]);

  useEffect(() => {
    clean();
  }, [data]);

  useEffect(() => {
    if (arrival) {
      setSelected(arrival);
    }
  }, [arrival]);

  return (
    <div className="w-full">
      <Combobox
        value={selected}
        onChange={handleSelect}
        nullable
        disabled={isLoading ?? !!error}
        name="destination"
      >
        {({ value, open, disabled }) => (
          <div className="relative">
            <div
              className={clsx(
                styles[variant],
                styles.container,
                isLoading && !isDisabled && styles.loading,
                !!error && styles.error,
                open && styles.open,
                isDisabled && styles.disabled,
              )}
            >
              <Combobox.Label
                className={clsx(
                  styles[variant],
                  styles.label,
                  inputFocus && styles.focus,
                  (value ?? open) && styles.focus,
                  !inputFocus && !(value ?? open) && styles.idle,
                  !!error && styles.error,
                )}
              >
                {error ?? (lang === "es" ? "Destino" : "Arrival")}
              </Combobox.Label>
              <Combobox.Input
                onFocus={() => setInputFocus(true)}
                onBlur={() => setInputFocus(false)}
                className={clsx(styles[variant], styles.input)}
                displayValue={(item) =>
                  item ? (item as Arrival).label : query
                }
                onChange={(event) => setQuery(event.target.value)}
                aria-disabled={disabled}
              />
              {isDisabled ? (
                <div className={styles.iconContainer}>
                  <MingcuteLoadingFill className="h-5 w-5 text-neutral-800 dark:text-neutral-800" />
                </div>
              ) : isLoading ? (
                <div className={styles.iconContainer}>
                  <MingcuteLoadingFill className="h-5 w-5 animate-spin text-neutral-800" />
                </div>
              ) : error ? (
                <div className={styles.iconContainer}>
                  <RiErrorWarningFill className="h-5 w-5 text-red-500" />
                </div>
              ) : (
                <>
                  {value && (
                    <button
                      onClick={clean}
                      className={`group ${styles.btn} ${styles.iconContainer}`}
                    >
                      <HeroiconsXMark20Solid
                        className="h-5 w-5 text-gray-400 duration-200 group-hover:text-black"
                        aria-hidden="true"
                      />
                    </button>
                  )}
                  <Combobox.Button
                    className={`group ${styles.btn} ${styles.iconContainer}`}
                  >
                    <HeroiconsMapPin20Solid
                      className="h-5 w-5 text-gray-400 duration-200 group-hover:text-black"
                      aria-hidden="true"
                    />
                  </Combobox.Button>
                </>
              )}
            </div>
            {!isDisabled && (!isLoading ?? !error) && (
              <Transition
                as={Fragment}
                enter="transition ease-in duration-100"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options className="absolute z-[70] mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {filteredData.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700 dark:text-white">
                      {lang === "es" ? "No se encontro." : "Nothing found."}
                    </div>
                  ) : (
                    filteredData.map((item) => (
                      <Combobox.Option
                        key={item.id}
                        value={item}
                        className={({ active }) =>
                          clsx(styles.option, active && styles.active)
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={clsx(
                                "block truncate",
                                selected ? "font-medium" : "font-normal",
                              )}
                            >
                              {item.label}
                            </span>
                            {selected && (
                              <span
                                className={clsx(
                                  "absolute inset-y-0 left-0 flex items-center pl-3 duration-200",
                                  active && "text-neutral-600",
                                )}
                              >
                                <HeroiconsCheck20Solid
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            )}
          </div>
        )}
      </Combobox>
    </div>
  );
};
