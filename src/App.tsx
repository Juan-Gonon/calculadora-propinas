import { menuItems } from "./data/db"
import { MenuItems } from "./components/MenuItems"

function App() {
  console.log(menuItems)
  return (
    <>
    <header className=" bg-teal-400 py-5 ">
      <h1 className=" text-center text-4xl font-black " >Calculadora de Propinas</h1>
    </header>
    <main className=" max-w-7xl mx-auto py-20 bg-slate-700 grid md:grid-cols-2  ">
      <div>
        <h2>Menu</h2>
        {
          menuItems.map((item) => {
            return <MenuItems key={item.id} />
          })
        }
      </div>
      <div>
        <h2>Consumo</h2>
      </div>
   
    </main>
    </>
  )
}

export default App
