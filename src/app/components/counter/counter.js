'use client'
import styles from "./counter.module.css";
import Gauge from "../gauge/gauge";
import { useState } from "react";


export default function Counter () {

    const [count, setCount] = useState(70)

    const updateCount = (newValue) =>{
        if (newValue < 0 || newValue > 100) {
              return;
        }
        setCount(newValue)
    }


  return (
    <div className={styles.counterWrapper}>
      <button
        className="button-dark button-small"
        onClick={() => updateCount(count - 1)}
      >
        -
      </button>
      <Gauge value={count} />
      <button
        className="button-dark button-small"
        onClick={() => updateCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};