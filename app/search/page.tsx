import { PRICE, Review } from "@prisma/client";
import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import DBClient from "../DB";

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const prisma = DBClient.getInstance().prisma;
const fetchRestaurantsBySearchParams = async (searchParams: SearchParams) => {
  const whereParams: any = {};
  if (searchParams.city) {
    const location = {
      name: {
        equals: searchParams.city.toLowerCase(),
      },
    };
    whereParams.location = location;
  }
  if (searchParams.cuisine) {
    const cuisine = {
      name: {
        equals: searchParams.cuisine.toLowerCase(),
      },
    };
    whereParams.cuisine = cuisine;
  }
  if (searchParams.price) {
    const price = {
      name: {
        equals: searchParams.price,
      },
    };
    whereParams.price = price;
  }
  const select = {
    id: true,
    name: true,
    main_image: true,
    cuisine: true,
    location: true,
    price: true,
    slug: true,
    reviews: true,
  };

  const restaurants = await prisma.restaurant.findMany({
    where: whereParams,
    select,
  });

  return restaurants;
};

const fetchAllLocations = () => {
  return prisma.location.findMany();
};

const fetchAllCuisines = () => {
  return prisma.cuisine.findMany();
};

const Search = async ({ searchParams }: { searchParams: SearchParams }) => {
  const restaurants = await fetchRestaurantsBySearchParams(searchParams);
  const locations = await fetchAllLocations();
  const cuisines = await fetchAllCuisines();

  return (
    <div>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start ">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            <div className="ml-3">
              {restaurants.map((restaurant) => (
                <RestaurantCard restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
