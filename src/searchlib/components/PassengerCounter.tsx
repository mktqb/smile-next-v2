import clsx from "clsx"

import styles from "../assets/selector.module.css"
import { PassengerCounterProps } from "./types"
import { useState } from "react"
import { useSearch } from "./Searcher"
import { HeroiconsMinus20Solid, HeroiconsPlus20Solid } from "../assets/icons"

export const PassengerCounter = ({variant = 'flat', max = 100}: PassengerCounterProps) => {
  const [inputFocus, setInputFocus] = useState(false)
  const { passengers, setter } = useSearch()

  const alterPassegnerCount = (number: number) => {
    if(passengers){
      setter('passengers',Math.max(0,Math.min(passengers + number,max)))
      return
    } 
    if(number === -1) return
    setter('passengers',1)
    return
  }

  const validate = () => {
    if(passengers! > max) setter('passengers',max)
    if(passengers! < 0) setter('passengers',0)
  }

  return(
    <div className="w-full">
      <div className={clsx(styles[variant],styles.container)}>
        <span 
          className={clsx(
            styles[variant],
            styles.label,
            inputFocus && styles.focus,
            passengers && styles.focus,
            !inputFocus && (!passengers ?? passengers === 0) && styles.idle
          )}>Pasajeros</span>
        <input 
          type="number" 
          onFocus={() => setInputFocus(true)}
          onBlur={() => {
            setInputFocus(false)
            validate()
          }} 
          value={passengers ?? 0}
          onChange={(e) => setter('passengers',parseInt(e.currentTarget.value))}
          className={clsx(styles[variant],styles.input)}
        />
        <button onClick={() => alterPassegnerCount(-1)} className={`group ${styles.btn} ${styles.iconContainer}`}>
          <HeroiconsMinus20Solid 
              className="h-5 w-5 text-gray-400 group-hover:text-primary-600 duration-200"
              aria-hidden="true"
            />
        </button>
        <button onClick={() => alterPassegnerCount(1)} className={`group ${styles.btn} ${styles.iconContainer}`}>
          <HeroiconsPlus20Solid 
              className="h-5 w-5 text-gray-400 group-hover:text-primary-600 duration-200"
              aria-hidden="true"
            />
        </button>
      </div>
    </div>
  )
}