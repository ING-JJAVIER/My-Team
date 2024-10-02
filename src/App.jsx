import Card1 from "./components/Card1"
import Card2 from "./components/Card2"
import Card3 from "./components/Card3"
import Card4 from "./components/Card4"
import Card5 from "./components/Card5"
import Card6 from "./components/Card6"
import Header from "./components/Header"

function App() {


  return (
    <>
      <div className="md:flex md:justify-center md:items-center md:h-screen">
        
        <main className="p-4 md:w-[33rem] md:flex md:flex-col md:items-center">

          <header className="mb-10">
            <Header />
          </header>

          <div className="flex flex-wrap justify-evenly md:w-[30rem]md:justify-evenly ">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
            <Card5 />
            <Card6 />
          </div>

        </main>
        
      </div>


    </>
  )
}

export default App
