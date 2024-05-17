'use client'
import Header from "@/app/components/Header";
import Image from "next/image";
import {useEffect, useState} from "react";
import IncrementAndAddToCart from "@/app/components/IncrementAndAddToCart";
export default function Page({params}) {
    return (
        <>
            <ItemPage title={params.item}/>
        </>
    )
}

export const ItemPage = ({title}) => {
    return (
        <div className={"w-full h-full flex flex-col justify-center items-center"}>
            <div className={"w-[90%] bg-primary shadow-md p-10 flex flex-col"}>
                <h1 className={"text-4xl mb-10"}>{title}</h1>
                <div className={"flex max-md:flex-col gap-10"}>
                    <Image className={"w-[50%] max-md:w-[100%] object-cover"} src={"/stock.jpeg"} alt={"temp stock photo"}
                           width={1000}
                           height={100}/>
                    <div className={"flex flex-col w-[50%]"}>
                        <p className={"mb-10"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.</p>
                        <div className={"flex gap-5"}>
                            <IncrementAndAddToCart product={title}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}