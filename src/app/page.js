import Image from "next/image";
import Header from "@/app/components/Header";
import StoreItem from "@/app/components/StoreItem";

export default function Home() {
  return (
      <>
          <Header />
          <div className="grid grid-cols-3 max-md:grid-cols-2 gap-5 mt-20 p-5">
              <StoreItem />
              <StoreItem />
              <StoreItem />
              <StoreItem />
          </div>
      </>
  );
}
