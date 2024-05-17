'use client'
import Header from "@/app/components/Header";
import Image from "next/image";
import {useState} from "react";

export default function Page({params}) {
    const [addedToCart, setAddedToCart] = useState(false);
    const [amountOfItems, setAmountOfItems] = useState(1);
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = () => {
        // cartItems will need to be held and loaded from localStorage

        // searches cartItems to see if the item being added already exists
        let newItem = true;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].itemName === params.item) {
                newItem = false;
            }
        }

        // if it is a new entry, setCartItems with spreading syntax to add new item
        if (newItem) {
            setCartItems([...cartItems, {itemName: params.item, amountOfItems: amountOfItems}]);
        } else {
            // if not new entry, loop over cartItems and replace old amount with new amount
            const newCartItems = cartItems.map(item => {
                if (item.itemName === params.item) {
                    return {itemName: params.item, amountOfItems: amountOfItems};
                } else {
                    return item;
                }
            });
            setCartItems(newCartItems);
        }
    }

    const AmountIncrementer = () => {
        const decrementItems = () => {
            if (amountOfItems > 1) {
                setAmountOfItems(amountOfItems-1);
            }
        }
        const incrementItems = () => {
            setAmountOfItems(amountOfItems+1);
        }

        return (
            <>
                <div className={"flex items-center gap-2"}>
                    <button onClick={decrementItems} className={"bg-core text-white rounded-full w-[2rem] h-[2rem] font-bold"}>-</button>
                    <p className={"font-bold text-xl"}>{amountOfItems}</p>
                    <button onClick={incrementItems} className={"bg-core text-white rounded-full w-[2rem] h-[2rem] font-bold"}>+</button>
                    <button onClick={() => console.log(cartItems)}>cartItems</button>
                </div>
            </>
        );
    }

    return (
        <>
            <Header />
            <div className={"w-full h-full flex flex-col justify-center items-center"}>
                <div className={"w-[90%] bg-primary shadow-md p-10 flex flex-col"}>
                    <h1 className={"text-4xl mb-10"}>{params.item}</h1>
                    <div className={"flex max-md:flex-col gap-10"}>
                        <Image className={"w-[50%] max-md:w-[100%] object-cover"} src={"/stock.jpeg"} alt={"temp stock photo"} width={1000}
                               height={100}/>
                        <div className={"flex flex-col w-[50%]"}>
                            <p className={"mb-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <div className={"flex gap-5"}>
                                <AmountIncrementer />
                                <button onClick={handleAddToCart} className={"px-3 py-1 bg-secondary rounded-md hover:bg-accent"}>add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}