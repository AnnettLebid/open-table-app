
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
         <div className="flex flex-wrap py-3 px-36 mt-10">
          <RestaurantCard />
         </div>
      </main>
    </main>
  );
}
