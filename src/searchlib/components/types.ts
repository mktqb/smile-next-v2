interface BaseResponse {
  code: number;
  msg: string;
}
export interface SystemOptions extends BaseResponse {
  data?: {
    DEFAULT_CITY_ARRIVAL: {
      key: string;
      value: string;
    };
    DEFAULT_CITY_DEPARTURE: {
      key: string;
      value: string;
    };
    DEFAULT_TICKET_TYOE_ID: {
      key: string;
      value: string;
    };
    SHUTTLE_SERVICE: {
      key: string;
      value: string;
    };
    WEB_MAX_SELECTABLE_SEATS: {
      key: string;
      value: string;
    };
    WEB_SALE_SHOW_ITINERARIES_DATEPICKER: {
      key: string;
      value: string;
    };
    URL_QUAWEB: {
      key: string;
      value: string;
    };
    DATE_FORMAT: {
      key: string;
      value: "PE" | "US" | "MX";
    };
  };
}
export interface DepartureResponse extends BaseResponse {
  data: Departure[];
}
export interface ArrivalResponse extends BaseResponse {
  data: Arrival[];
}
export interface DatesResponse extends BaseResponse {
  options: {
    passFreq: string;
    shuttleService: string;
    priceBySection: boolean;
  };
  sparams: any | null;
  data: {
    ow: TravelDate[];
    rw: TravelDate[];
  };
}
export interface Departure {
  id: string;
  value: string;
  label: string;
  idIsCityNear?: string;
  idRouteCityDeparture?: string;
}
export interface Arrival
  extends Omit<Departure, "idIsCityNear" | "idRouteCityDeparture"> {
  isCityNearArrival: string;
}
export interface TravelDate {
  travelDateReal: string;
  travelDateValidate: string;
}
export interface SearchContextProps {
  departure: Departure | null | undefined;
  arrival: Arrival | null | undefined;
  startDate: string | null | undefined;
  endDate: string | null | undefined;
  passengers: number | null | undefined;
  setter: (key: keyof SearchContextProps, value: any) => void;
}

export type STYLE_VARIANTS = "flat" | "transparent" | "square";

interface CommonProps {
  isLoading?: boolean;
  error?: string;
  isDisabled?: boolean;
  variant?: STYLE_VARIANTS;
  lang?: "es" | "en";
}

export interface DepartureSelectorProps extends CommonProps {
  data: Departure[];
}

export interface ArrivalSelectorProps extends CommonProps {
  data: Arrival[];
}

export interface DatePickerProps extends CommonProps {
  validate?: TravelDate[];
}

export interface PassengerCounterProps extends CommonProps {
  max?: number;
}
