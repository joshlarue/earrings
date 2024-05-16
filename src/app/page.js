import Image from "next/image";
import Header from "@/app/components/Header";
import StoreItem from "@/app/components/StoreItem";

export default function Home() {
  return (
      <>
          <Header />
          <div className="grid grid-cols-3 max-md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
              <StoreItem />
              <StoreItem />
              <StoreItem />
              <StoreItem />
          </div>
      </>
  );
}
