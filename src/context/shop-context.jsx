import { createContext, useState } from "react"
import { Products } from '../products'; 

export const ShopContext = createContext(null);

function getDefaultCart() {
    let cart = {};

    for (let i = 1; i < Products.length + 1; i++) {
        cart[i] = 0;
    }

    return cart;
}


export default function ShopContextProvider(props) {

    const [cartItems, setCartItems] = useState(getDefaultCart());

    function addToCart(itemID) {
        setCartItems((prevItem) => ({ ...prevItem, [itemID]: prevItem[itemID] + 1 }));
    }

    function removeFromCart(itemID) {
        setCartItems((prevItem) => ({ ...prevItem, [itemID]: prevItem[itemID] - 1 }));
    }

    function removeAllCart(itemID) {
        setCartItems((prevItem) => ({ ...prevItem, [itemID]: prevItem[itemID] = 0 }));
    }

    function getCartTotal() {
        let totalAmount = 0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = Products.find((product) => product.id === Number(item));

                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }

    const contextValue = { cartItems, addToCart, removeFromCart, removeAllCart, getCartTotal };

    console.log(cartItems);

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}