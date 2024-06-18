import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/intex"
type OrderTotalsProps = {
    order : OrderItem[];
    tip: number
}

export function OrderTotals({order, tip } : OrderTotalsProps) {
    const subTotalAmount = useMemo(() =>{
        return order.reduce((total, item) => total + (item.quantity * item.price), 0 )
    }, [order])

    const tipAmount = useMemo(() =>{
        return subTotalAmount * tip
    }, [tip, order])

  return (
    <>
    <div className="space-y-3">
        <h2 className=" font-black text-2xl " > Totales y Propinas:</h2>
        <p>Subtotal a pagar: <span className="font-bold" >{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>Propina: <span className="font-bold">{formatCurrency(tipAmount)}</span></p>
        <p>Total a Pagar: <span className="font-bold">$0</span></p>
    </div>
    </>
  )
}
