import { createContext, useContext } from "react"
import { ProductProps as ProductType } from "../components/Product";

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
    products: ProductType[]
    setProducts: (products: ProductType[]) => void
}

export type CartItem = {
    id: number
    quantity: number
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}