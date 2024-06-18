import { useState } from "react"
import { type OrderItem, type MenuItem } from "../types"

export function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = (item:MenuItem) => {
        console.log(item)
    }


  return {
    addItem
  }
}
