import { menuItems } from "./data/db"
import { MenuItems } from "./components/MenuItems"
import { useOrder } from "./hook/useOrder"
import { OrderContents } from "./components/OrderContents"
import { OrderTotals } from "./components/OrderTotals"
import { TiPorcentageForm } from "./components/TiPorcentageForm"

function App() {
  const {order, addItem, removeItem} = useOrder()
  // console.log(menuItems)
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
      <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10 ">
        <OrderContents order={order} removeItem={removeItem} />
        <TiPorcentageForm />
        <OrderTotals order={order} />
      </div>
   
    </main>
    </>
  )
}

export default App
