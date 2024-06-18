import { type MenuItem } from "../types"
type MenuItemProps = {
    item : MenuItem
}

export function MenuItems({item}: MenuItemProps) {
  return (
    <button className="border-2 border-teal-200 hover:bg-teal-500 w-full p-3 flex justify-between " >
    <p>{item.name}</p>
    <p className=" font-black "> ${item.price}</p>
    </button>
  )
}
