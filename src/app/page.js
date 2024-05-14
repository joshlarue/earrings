import Image from "next/image";
import Header from "@/app/components/Header";
import StoreItem from "@/app/components/StoreItem";

export default function Home() {
  return (
      <>
          <Header />
          <div className="flex flex-col w-full">
              <StoreItem />
          </div>
      </>
  );
}
