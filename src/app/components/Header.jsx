import Link from "next/link";

export default function Header() {
    return (
        <>
            <header className="flex p-5 bg-primary justify-between">
                <div className={"flex items-center justify-start bg-secondary -m-5 w-[50%] px-10"}>Katrina's Earrings</div>
                <nav className={"flex gap-10"}>
                    <Link href={"/"} className={"flex items-center justify-center bg-secondary px-3 py-2 rounded-lg w-20"}>home</Link>
                    <Link href={"/store"} className={"flex items-center justify-center bg-secondary px-3 py-2 rounded-lg w-20"}>store</Link>
                    <Link href={"/about"} className={"flex items-center justify-center bg-secondary px-3 py-2 rounded-lg w-20"}>about</Link>
                </nav>
            </header>
        </>
    );
}