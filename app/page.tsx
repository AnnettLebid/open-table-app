import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import DBClient from "./DB";
export interface RestaurantCardType {
  id: number;
  name: string;
  slug: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  reviews: Review[];
}

const prisma = DBClient.getInstance().prisma;
const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      reviews: true,
    },
  });
  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      <div className="flex flex-wrap py-3 px-36 mt-10 justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}
