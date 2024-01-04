"use client";
import styles from "./footer.module.css";
import { useEffect, useState } from "react";

export default function Footer() {

    const [date, setDate] = useState("asd")
    
    useEffect(()=>{
        setDate( new Date().toISOString());
      },[])

    return (
        <footer>
          <div className="container">
            <a href="https://nextjs.org/" target="_blank" className={styles.anchor}>
              <span>Made with Next</span>
              <span className={styles.spacer}>|</span>
              <span>{date}</span>
            </a>
          </div>
        </footer>
      );
}