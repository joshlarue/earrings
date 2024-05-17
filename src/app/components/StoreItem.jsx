import Image from "next/image";
import Link from "next/link";

export default function StoreItem() {
    return (
        <>
            <div
                className="justify-self-center bg-primary w-full h-fit relative flex flex-col gap-3 justify-start p-3 shadow-md">
                <Link href={"/items/earring-1"}>
                    <Image className={""} src={"/stock.jpeg"} alt={"temp stock photo"} width={1000} height={100}/>
                </Link>
                <p>description here</p>
                <p>$24.99</p>
                <button className={"px-3 py-1 bg-secondary rounded-md hover:bg-accent"}>add to cart</button>
                <Link href={"items/earring-1"} className={"px-3 py-1 text-center bg-primary-dark rounded-md hover:bg-accent"}>view item</Link>
            </div>
        </>
    );
}