"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import IncrementAndAddToCart from "../components/IncrementAndAddToCart.jsx";

export default function Page() {
  const [storageCartItems, setStorageCartItems] = useState([]);
  const [cartItemsDisplay, setCartItemsDisplay] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems"));
    console.log(items);
    setStorageCartItems(items);
  }, []);
  useEffect(() => {
    if (storageCartItems != null) {
      setCartItemsDisplay(
        storageCartItems.map((item, index) => {
          console.log(item.amountOfItems);
          return (
            <CartItem
              key={index}
              itemName={item.itemName}
              amount={item.amountOfItems}
            />
          );
        }),
      );
    }
  }, [storageCartItems]);

  const handleRemove = (itemName) => {
    setStorageCartItems(
      storageCartItems.filter((item) => item.itemName != itemName),
    );
  };
  const CartItem = ({ itemName, amount }) => {
    return (
      <div className={"w-full bg-primary p-10 flex gap-10"}>
        <Image
          className={"w-[50%] max-md:w-[100%] object-cover"}
          src={"/stock.jpeg"}
          alt={"temp stock photo"}
          width={1000}
          height={100}
        />
        <div className={"flex flex-col w-[50%] min-h-full justify-between"}>
          <div className={"flex justify-between items-start"}>
            <h2 className={"text-xl"}>{itemName}</h2>
            <button
              onClick={() => handleRemove(itemName)}
              className={
                "bg-secondary-dark text-sm rounded-md text-primary font-bold px-4 py-2"
              }
            >
              remove
            </button>
          </div>
          <div className={"flex items-center gap-10"}>
            <IncrementAndAddToCart
              showAdd={false}
              product={itemName}
              initNum={amount}
            />
            <p className={"text-3xl font-bold"}>$29.99</p>
            <button
              className={
                "bg-secondary text-xl rounded-md font-bold px-4 py-2 hover:bg-accent"
              }
            >
              buy now!
            </button>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className={"w-full flex flex-col items-center justify-center p-10"}>
        {storageCartItems !== null ? (
          <h1
            className={"pl-10 py-5 w-full text-left text-2xl bg-primary-dark"}
          >
            Your Cart!
          </h1>
        ) : (
          <h1
            className={"pl-10 py-5 w-full text-left text-2xl bg-primary-dark"}
          >
            Nothing in your cart yet!
          </h1>
        )}
        {cartItemsDisplay}
      </div>
    </>
  );
}
