import { createContext,useState } from "react";    

export const CartContext = createContext()

export function CartProvider({children}){
    const [cart, setCart] = useState([])

    const addToCart = product =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        console.log(productInCartIndex)
        if (productInCartIndex >=0){
            const newChart = structuredClone(cart)
            newChart[productInCartIndex].quantity += 1
            setCart(newChart)
        }
        else{
        setCart(presState => [...presState, {...product, quantity: 1}])
        }
    }

    const subtractToCart = product =>{
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >=0){
            const newChart = structuredClone(cart)
            newChart[productInCartIndex].quantity -= 1
            if (newChart[productInCartIndex].quantity === 0){
                newChart.splice(productInCartIndex,1)
            }
            setCart(newChart)
        }
        else{
            setCart(presState => [...presState, {...product, quantity: 1}])
        }
    }

    const removeToCart = product =>{
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }
    const clearCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeToCart,
            clearCart,
            subtractToCart
        }}>
            {children}
        </CartContext.Provider>
    )


}