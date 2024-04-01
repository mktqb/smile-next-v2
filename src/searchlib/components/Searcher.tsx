import { RiErrorWarningFill } from "../assets/icons";
import { createContext, useContext, useState } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SearchContent } from "./SearcherContent";
import {
  Arrival,
  Departure,
  STYLE_VARIANTS,
  SearchContextProps,
} from "./types";

const queryClient = new QueryClient();

interface Props {
  url: string | undefined;
  variant?: STYLE_VARIANTS;
  animated?: boolean;
  vertical?: boolean;
  lang?: "es" | "en";
}

const SearchContext = createContext({} as SearchContextProps);

export const useSearch = () => useContext(SearchContext);

export const Searcher = ({
  url,
  variant = "flat",
  vertical,
  lang = "es",
}: Props) => {
  const [departure, setDeparture] = useState<null | Departure>();
  const [arrival, setArrival] = useState<null | Arrival>();
  const [startDate, setStartDate] = useState<null | string>();
  const [endDate, setEndDate] = useState<null | string>();
  const [passengers, setPassengers] = useState<null | number>();

  const setter = (key: keyof SearchContextProps, value: any) => {
    switch (key) {
      case "arrival":
        setArrival(value as Arrival);
        break;
      case "departure":
        setDeparture(value as Departure);
        break;
      case "endDate":
        setEndDate(value as string);
        break;
      case "startDate":
        setStartDate(value as string);
        break;
      case "passengers":
        setPassengers(value as number);
        break;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex w-full flex-col items-center">
        {!url && (
          <div className="absolute left-0 top-0 z-50 flex h-full w-full flex-col items-center justify-center gap-5 rounded-2xl bg-red-800 bg-opacity-20 p-2 backdrop-blur-sm 2xl:gap-0">
            <RiErrorWarningFill className="text-2xl text-red-500" />
            <span className="text-center text-2xl text-red-500">
              {lang === "en"
                ? "An URL hasn't been added!!!"
                : "No se ha ingresado una URL!!!"}
            </span>
          </div>
        )}
        <SearchContext.Provider
          value={{ departure, arrival, endDate, passengers, startDate, setter }}
        >
          <SearchContent
            url={url}
            variant={variant}
            vertical={vertical}
            lang={lang}
          />
        </SearchContext.Provider>
      </div>
    </QueryClientProvider>
  );
};
