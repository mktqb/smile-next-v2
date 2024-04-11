import clsx from "clsx";
import { Button, ButtonProps, DatePickerStateContext, Popover, PopoverProps } from "react-aria-components";
import styles from "../assets/selector.module.css"
import { useContext, useEffect } from "react";
import { useSearch } from "./Searcher";
import { HeroiconsXMark20Solid } from "../assets/icons";

export function RoundButton(props: ButtonProps) {
  return (
    <Button
      {...props}
      className="cursor-pointer disabled:hover:bg-white disabled:text-gray-300 w-9 h-9 outline-none disabled:cursor-default bg-transparent text-gray-600 border-0 rounded-full flex items-center justify-center hover:bg-gray-100 pressed:bg-gray-200"
    />
  );
}

export function CustomPopover(props: PopoverProps) {
  return (
    <Popover
      {...props}
      className={({ isEntering, isExiting }) => clsx(
        styles.calendarPopover,
        isEntering && styles.animateFadeIn,
        isExiting && styles.animateFadeOut
      )}
    />
  );
}

export function DatePickerClearButton({ type }: {type: 'startDate' | 'endDate'}) {
  let state = useContext(DatePickerStateContext)!;
  const { setter, startDate } = useSearch()

  useEffect(() => {
    if(startDate === null) {
      setter('endDate', null)
      state.setValue(null)
    }
  },[startDate])

  return (
    <Button
      // Don't inherit default Button behavior from DatePicker.
      slot={null}
      className={`group/clear ${styles.btn} ${styles.iconContainer}`}
      aria-label="Clear"
      onPress={() => {
        state.setValue(null)
        setter(type, null)
      }}>
      <HeroiconsXMark20Solid 
        className="h-5 w-5 text-gray-400 group-hover/clear:text-primary-600 duration-200"
        aria-hidden="true"
      />
    </Button>
  );
}