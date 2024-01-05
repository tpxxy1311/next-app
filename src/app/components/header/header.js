'use client'
import Image from "next/image";
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
          <div className={`container ${styles.wrapper}`}>
            <div className={styles.logo}>
              <a href="/" title="next">
                <Image width={50} height={50} src="/media/logo.svg" alt="logo"/>
              </a>
            </div>
            <ul>
              <li>
                <a
                  href="https://qwik.builder.io/docs/components/overview/"
                  target="_blank"
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>
        </header>
      );
}