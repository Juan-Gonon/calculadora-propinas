import { useState } from "react"
import { type OrderItem, type MenuItem } from "../types"

export function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item:MenuItem) => {
        const itemExist = order.find((orderItem) => orderItem.id === item.id)
        console.log(itemExist)

        if(!itemExist){
            const newItem:OrderItem = {...item, quantity:1}
            setOrder((prevState) => ([...prevState, newItem]))
            return
        }

        const updateOrder = order.map((itemOrder) => itemOrder.id === itemExist.id ? {...itemOrder, quantity: itemOrder.quantity+1} : itemOrder )

        setOrder(updateOrder)

    }

    const removeItem = (id: MenuItem['id']) =>{
       setOrder((prevState) => (prevState?.filter((item) => item.id !== id)) )
    }

    console.log(order)

  return {
    order,
    addItem,
    removeItem
  }
}
