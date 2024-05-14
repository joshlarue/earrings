import Image from "next/image";

export default function StoreItem() {
    return (
      <>
        <div className="justify-self-center bg-primary w-full h-fit relative flex flex-col gap-3 justify-start p-3 shadow-md">
            <Image className={""} src={"/stock.jpeg"} alt={"temp stock photo"} width={1000} height={100} />
            <p>description here</p>
            <p>$24.99</p>
            <button className={"px-3 py-1 bg-secondary rounded-md hover:bg-accent"}>add to cart</button>
        </div>
      </>
    );
}