
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <>
      <Header />
        <div className="flex flex-wrap py-3 px-36 mt-10">
        <RestaurantCard />
        </div>
    </>

  );
}
