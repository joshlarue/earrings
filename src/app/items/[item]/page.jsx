import Header from "@/app/components/Header";
import Image from "next/image";

export default function Page({params}) {
    console.log(params.item);
    return (
        <>
            <Header />
            <div className={"w-full h-full flex flex-col justify-center items-center"}>
                <div className={"w-[90%] bg-primary p-10 flex flex-col"}>
                    <h1 className={"text-4xl mb-10"}>{params.item}</h1>
                    <div className={"flex max-md:flex-col gap-10"}>
                        <Image className={"w-[50%] max-md:w-[100%]"} src={"/stock.jpeg"} alt={"temp stock photo"} width={1000}
                               height={100}/>
                        <div className={"flex flex-col"}>
                            <p>description</p>
                            <button className={"px-3 py-1 bg-secondary rounded-md hover:bg-accent"}>add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}