import React, { createContext, useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
export const CartContext = createContext()
export default function CartProvider({ children }) {
    const [cart, setCart] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedCart = JSON.parse(localStorage.getItem("cart")) || []
            return savedCart
        }
        return []
    })

    // const addToCart = (product) => {
    //     console.log("addToCart function clicked", product);

    //     setCart((prevCart) => [...prevCart, product])
        
    // }
    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.id === product.id)
            if (existingItem) {
                return prevCart.map(item => 
                    item.id === product.id 
                        ? {...item, quantity: (item.quantity || 1) + 1} 
                        : item
                )
            }
            return [...prevCart, {...product, quantity: 1}]
        })
    }
    const removeFromCart = (productId) => {
        // console.log("Context Remove ProductID", productId);

        setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
    }

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return
        setCart(prevCart => 
            prevCart.map(item => 
                item.id === productId 
                    ? {...item, quantity: newQuantity} 
                    : item
            )
        )
    }


//     const clearCart = () => setCart([])
//     useEffect(()=>{
//         localStorage.setItem("cart", JSON.stringify(cart))

//     },[cart])
//     return (
//         <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
//             {children}
//         </CartContext.Provider>
//     )
// }


const clearCart = () => setCart([])

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
}, [cart])

return (
    <CartContext.Provider 
        value={{ 
            cart, 
            addToCart, 
            removeFromCart, 
            updateQuantity,
            clearCart 
        }}
    >
        {children}
    </CartContext.Provider>
)
}

// export const useCart = () => {
//     const context = useContext(CartContext)
//     if (!context) {
//         throw new Error("useCart must be used within a CartProvider");
//     }
//     return context
// }