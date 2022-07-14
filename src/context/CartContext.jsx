import { createContext,useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item,qty) => {
        const newItem = {...item, qty}

        //buscar si el producto existe en el carrito
        const itemExists = cart.find(item => item.id === newItem.id)

        if(itemExists){
            //si existe, sumar la cantidad
            setCart(cart.map(item => item.id === newItem.id ? {...item, qty: item.qty + 1} : item))
        }else{
            //si no existe, agregarlo al carrito
            setCart([...cart, newItem])
        }

        alert('Producto agregado al carrito')

        console.log(cart)

    }


    return(
        <CartContext.Provider value={{cart,setCart,addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;