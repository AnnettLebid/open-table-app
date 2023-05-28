import { PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

const prisma = new PrismaClient();
const fetchRestaurants = async () => {
  const restaurants = await prisma.restaurant.findMany();
  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      <div className="flex flex-wrap py-3 px-36 mt-10">
        <RestaurantCard />
      </div>
    </>
  );
}
