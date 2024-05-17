'use client'
import {useState, useEffect} from "react";

export default function IncrementAndAddToCart({product}) {
    const [addedToCart, setAddedToCart] = useState(false);
    const [amountOfItems, setAmountOfItems] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const handleAddToCart = () => {
        // cartItems will need to be held and loaded from localStorage

        // searches cartItems to see if the item being added already exists
        let newItem = true;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].itemName === product) {
                newItem = false;
            }
        }

        // if it is a new entry, setCartItems with spreading syntax to add new item

        if (newItem) {
            setCartItems([...cartItems, {itemName: product, amountOfItems: amountOfItems}]);
        } else {
            // if not new entry, loop over cartItems and replace old amount with new amount
            const newCartItems = cartItems.map(item => {
                if (item.itemName === product) {
                    return {itemName: product, amountOfItems: amountOfItems};
                } else {
                    return item;
                }
            });
            setCartItems(newCartItems);
        }
    }

    const decrementItems = () => {
        if (amountOfItems > 1) {
            setAmountOfItems(amountOfItems - 1);
        }
    }
    const incrementItems = () => {
        setAmountOfItems(amountOfItems + 1);
    }

    return (
        <>
            <div className={"flex items-center gap-2"}>
                <button onClick={decrementItems}
                        className={"bg-core text-white rounded-full w-[2rem] h-[2rem] font-bold"}>-
                </button>
                <p className={"font-bold text-xl"}>{amountOfItems}</p>
                <button onClick={incrementItems}
                        className={"bg-core text-white rounded-full w-[2rem] h-[2rem] font-bold"}>+
                </button>
            </div>
            <button onClick={handleAddToCart} className={"px-5 py-2 text-lg bg-secondary rounded-md hover:bg-accent"}>add to cart</button>
            <button onClick={() => console.log(cartItems)} />
        </>
    );
}