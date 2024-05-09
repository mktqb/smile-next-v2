import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
} from "react-aria-components";
import {
  today,
  getLocalTimeZone,
  parseDate,
  CalendarDate,
} from "@internationalized/date";
import { DatePickerProps } from "./types";
import {
  HeroiconsCalendar20Solid,
  HeroiconsChevronLeft20Solid,
  HeroiconsChevronRight20Solid,
  MingcuteLoadingFill,
  RiErrorWarningFill,
} from "../assets/icons";
import clsx from "clsx";

import styles from "../assets/selector.module.css";
import { useSearch } from "./Searcher";
import {
  CustomPopover,
  DatePickerClearButton,
  RoundButton,
} from "./DatePickerExtras";
import { useEffect, useState } from "react";
import { useDateFormatter } from "react-aria";

export const StartDatePicker = ({
  variant = "flat",
  isLoading,
  isDisabled,
  error,
  validate,
  lang,
}: DatePickerProps) => {
  const { setter } = useSearch();

  // const [controller, setController] = useState(today(getLocalTimeZone()));
  const [controller, setController] = useState<CalendarDate>();

  useEffect(() => {
    console.log(error);
    if (error) return;
    if (!!validate?.length) {
      setController(
        parseDate(
          new Date(validate[0].travelDateReal).toISOString().split("T")[0],
        ),
      );
      setter(
        "startDate",
        new Date(validate[0].travelDateReal).toISOString().split("T")[0],
      );
    }
  }, [validate, error]);

  return (
    <DatePicker
      //@ts-ignore
      value={controller}
      className="realtive group flex w-full flex-col gap-1"
      //@ts-ignore
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={
        !validate
          ? undefined
          : (date) => {
              const _date = date.toString();
              return validate.some((val) => {
                const _val = val.travelDateReal.split("/");
                const _day = `${_val[2]}-${_val[1]}-${_val[0]}`;
                return _day === _date;
              });
            }
      }
      onChange={(val) => {
        setter("startDate", val ? val.toString() : null);
        //@ts-ignore
        setController(val);
      }}
    >
      {({ isOpen, state }) => (
        <>
          <Group
            className={clsx(
              styles[variant],
              styles.container,
              isLoading && !isDisabled && styles.loading,
              !!error && styles.error,
              isOpen && styles.open,
              isDisabled && styles.disabled,
            )}
          >
            <Label
              className={clsx(
                styles[variant],
                styles.label,
                !(isLoading ?? isDisabled) && styles.idle,
                isLoading && styles.idle,
                !isDisabled && !isLoading && !error && styles.focus,
                !!error && styles.error,
              )}
            >
              {error ?? (lang === "es" ? "Fecha de salida" : "Start date")}
            </Label>
            <DateInput
              className={clsx(
                styles[variant],
                styles.dateInput,
                isDisabled && "cursor-default select-none opacity-0",
                isLoading && "cursor-default select-none opacity-0",
                !!error && "cursor-default select-none opacity-0",
              )}
            >
              {(segment) => (
                <DateSegment
                  segment={segment}
                  className="rounded-sm px-0.5 tabular-nums caret-transparent outline-none placeholder-shown:italic focus:bg-primary-100 focus:text-neutral-800"
                />
              )}
            </DateInput>
            {isDisabled ? (
              <div className={styles.iconContainer}>
                <MingcuteLoadingFill className="h-5 w-5 text-white" />
                <span className="sr-only">disabled</span>
              </div>
            ) : isLoading ? (
              <div className={styles.iconContainer}>
                <MingcuteLoadingFill className="h-5 w-5 animate-spin !text-primary-500" />
                <span className="sr-only">loading</span>
              </div>
            ) : error ? (
              <div className={styles.iconContainer}>
                <RiErrorWarningFill className="h-5 w-5 text-red-500" />
                <div className="sr-only">error</div>
              </div>
            ) : (
              <>
                {state.value && <DatePickerClearButton type="startDate" />}
                <Button
                  className={`group/button ${styles.iconContainer} ${styles.btn}`}
                >
                  <HeroiconsCalendar20Solid className="h-5 w-5 text-[#21D840] duration-200 group-hover/button:text-primary-600" />
                </Button>
              </>
            )}
          </Group>
          <CustomPopover>
            <Dialog className="p-3 text-gray-600">
              <Calendar isDisabled={isDisabled}>
                {({ state }) => (
                  <>
                    <header className="flex w-full items-center gap-1 px-1 pb-4">
                      <RoundButton
                        slot="previous"
                        isDisabled={state.isPreviousVisibleRangeInvalid()}
                      >
                        <HeroiconsChevronLeft20Solid className="text-2xl" />
                      </RoundButton>
                      <Heading className="flex-1 text-center font-semibold" />
                      <RoundButton slot="next">
                        <HeroiconsChevronRight20Solid className="text-2xl" />
                      </RoundButton>
                    </header>
                    <CalendarGrid className="border-separate border-spacing-1">
                      <CalendarGridHeader>
                        {(day) => (
                          <CalendarHeaderCell className="text-xs font-semibold text-gray-500">
                            {day}
                          </CalendarHeaderCell>
                        )}
                      </CalendarGridHeader>
                      <CalendarGridBody>
                        {(date) => (
                          <CalendarCell
                            date={date}
                            className={({
                              isDisabled,
                              isOutsideMonth,
                              isSelected,
                              isHovered,
                              isUnavailable,
                            }) =>
                              clsx(
                                "flex h-7 w-7 items-center justify-center rounded-lg outline-none ring-primary-500 duration-200 focus-visible:ring-1",
                                isDisabled &&
                                  !isOutsideMonth &&
                                  "text-gray-300",
                                isOutsideMonth && "text-gray-300",
                                isUnavailable && "text-gray-300",
                                isSelected && isHovered && "!bg-primary-300",
                                (!isDisabled ??
                                  (isOutsideMonth && !isDisabled)) &&
                                  isHovered &&
                                  "bg-neutral-200",
                                isSelected && "bg-primary-100",
                              )
                            }
                          />
                        )}
                      </CalendarGridBody>
                    </CalendarGrid>
                  </>
                )}
              </Calendar>
            </Dialog>
          </CustomPopover>
        </>
      )}
    </DatePicker>
  );
};
