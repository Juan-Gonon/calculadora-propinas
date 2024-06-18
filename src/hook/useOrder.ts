import { useState } from "react"
import { type OrderItem, type MenuItem } from "../types"

export function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item:MenuItem) => {
        const newItem:OrderItem = {...item, quantity:1}
        setOrder((prevState) => ([...prevState, newItem]))
    }

    console.log(order)

  return {
    addItem
  }
}
