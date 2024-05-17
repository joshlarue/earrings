'use client'
import Image from "next/image";
import {useEffect} from "react";

export default function Page() {

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems"));
        console.log(items);
    }, []);

    return (
        <>
            <div className={"w-full flex flex-col items-center justify-center p-10"}>
                <h1 className={"pl-10 py-5 w-full text-left text-2xl bg-primary-dark"}>Your Cart!</h1>
                <CartItem />
            </div>
        </>
    );
}

function CartItem() {
    return (
        <div className={"w-full bg-primary p-10 flex gap-10"}>
                <Image className={"w-[50%] max-md:w-[100%] object-cover"} src={"/stock.jpeg"} alt={"temp stock photo"}
                       width={1000}
                       height={100}/>
            <div className={"flex flex-col w-[50%] min-h-full justify-between"}>
                <div className={"flex justify-between items-start"}>
                    <h2 className={"text-xl"}>Title!</h2>
                    <button className={"bg-secondary-dark text-sm rounded-md text-primary font-bold px-4 py-2"}>remove
                    </button>
                </div>
                <div className={"flex items-center gap-10"}>
                    <p className={"text-3xl font-bold"}>$29.99</p>
                    <button className={"bg-secondary text-xl rounded-md font-bold px-4 py-2 hover:bg-accent"}>buy now!</button>
                </div>
            </div>
        </div>
    );
}