import Counter from "./components/counter/counter";
import Hero from "./components/hero/hero";
import NextSteps from "./components/nextsteps/nextsteps";
import Userlist from "./components/userlist/userlist";

export default async function Home() {

  const response = await fetch('https://dummyjson.com/users?limit=20');
  const data = await response.json();
  const userList = data.users
  console.log(userList)

  return (
    <>
    <Hero/>
    <div className="container container-center container-spacing-xl">
        <h3>
          You can <span className="highlight">interact</span>
          <br /> with me!
        </h3>
        <Counter />
        <NextSteps/>
        <h3>
        These useres develop <br/>
        with  <span class="highlight">Next</span>
        </h3>
        <Userlist users={userList}/>
      </div>
    </>
  )
}
