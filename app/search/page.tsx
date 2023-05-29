import { PrismaClient, Restaurant } from "@prisma/client";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

const prisma = new PrismaClient();
const fetchRestaurantsByCity = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
    slug: true,
  };
  if (!city) return await prisma.restaurant.findMany({ select });
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: city.toLowerCase(),
      },
    },
    select,
  });
  return restaurants;
};

const Search = async ({ searchParams }: { searchParams: { city: string } }) => {
  const { city } = searchParams;
  const restaurants = await fetchRestaurantsByCity(city);
  console.log(restaurants);
  return (
    <div>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start ">
        <SearchSideBar />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} />
              ))}{" "}
            </>
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
