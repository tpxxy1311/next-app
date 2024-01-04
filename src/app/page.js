import Counter from "./components/counter/counter";
import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <>
    <Hero/>
    <div className="container container-center container-spacing-xl">
        <h3>
          You can <span className="highlight">interact</span>
          <br /> with me!
        </h3>
        <Counter />
      </div>
    </>
  )
}
