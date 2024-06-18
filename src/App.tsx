import { menuItems } from "./data/db"
import { MenuItems } from "./components/MenuItems"
import { useOrder } from "./hook/useOrder"

function App() {
  const {addItem} = useOrder()
  console.log(menuItems)
  return (
    <>
    <header className=" bg-teal-400 py-5 ">
      <h1 className=" text-center text-4xl font-black " >Calculadora de Propinas</h1>
    </header>
    <main className=" max-w-7xl mx-auto py-20 bg-slate-700 grid md:grid-cols-2  ">
      <div className=" p-5 " >
        <h2 className=" text-4xl font-black mb-3 " >Menu</h2>
        <div className=" space-y-3 mt-10 " >
          {
            menuItems.map((item) => {
              return <MenuItems key={item.id} item={item} addItem={addItem} />
            })
          }
        </div>
      </div>
      <div>
        <h2>Consumo</h2>
      </div>
   
    </main>
    </>
  )
}

export default App
