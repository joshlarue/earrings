import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="flex bg-primary justify-between shadow-md max-md:flex-col">
                <div className={"flex items-center justify-center text-xl font-bold bg-secondary w-[50%] max-md:w-[100vw] max-md:p-5"}>KM Jewelry</div>
                <nav className={"flex p-5 justify-center gap-10 w-[50%] font-bold max-md:w-[100vw] max-md:p-5"}>
                    <Link href={"/"} className={"flex items-center justify-center bg-secondary px-3 py-2 rounded-md w-20 hover:bg-accent"}>home</Link>
                    <Link href={"/store"} className={"flex items-center justify-center bg-secondary px-3 py-2 rounded-md w-20 hover:bg-accent"}>store</Link>
                    <Link href={"/about"} className={"flex items-center justify-center bg-secondary px-3 py-2 rounded-md w-20 hover:bg-accent"}>about</Link>
                </nav>
            </header>
        </>
    );
}