import Image from "next/image";
import styles from "./hero.module.css"

export default function Hero (){
    
    return(
    <div className={`container ${styles.hero}`}>
      <Image src="/media/thunder.png" width={1000} height={1000} class={styles["hero-image"]} alt="Thunderbolt"/>
      <h1>
        Qwik.js <span className="highlight">vs </span>
        Next.js <br /> Speed Comparison
      </h1>
      <p>This App was made with Next.</p>
    </div>
  );
    
}