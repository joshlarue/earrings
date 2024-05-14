import Image from "next/image";

export default function StoreItem() {
    return (
      <>
        <div className="bg-primary w-[30vw] h-[40vw] relative flex flex-col items-start justify-start p-3">
            <Image className={""} src={"/stock.jpeg"} alt={"temp stock photo"} width={500} height={100} />
            <p>description here</p>
            <button className={"px-3 py-1 bg-secondary rounded-md hover:bg-accent"}>buy - $24.99</button>
        </div>
      </>
    );
}