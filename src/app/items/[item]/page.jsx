"use client";
import Header from "@/app/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import IncrementAndAddToCart from "@/app/components/IncrementAndAddToCart";
export default function Page({ params }) {
  return (
    <>
      <ItemPage title={params.item} />
    </>
  );
}
export const ItemPage = ({ title, price, desc }) => {
  return (
    <div className={"w-full h-full flex flex-col justify-center items-center"}>
      <div className={"w-[90%] bg-primary shadow-md p-10 flex flex-col"}>
        <h1 className={"text-4xl mb-10"}>{title}</h1>
        <div className={"flex max-md:flex-col gap-10"}>
          <Image
            className={"w-[50%] max-md:w-[100%] object-cover"}
            src={"/stock.jpeg"}
            alt={"temp stock photo"}
            width={1000}
            height={100}
          />
          <div className={"flex flex-col w-[50%]"}>
            <div className={"flex gap-5"}>
              {desc}
              <IncrementAndAddToCart
                showAdd={true}
                initNum={1}
                product={title}
              />
              <p>{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
