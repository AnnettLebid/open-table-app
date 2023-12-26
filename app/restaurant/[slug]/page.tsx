import { notFound } from "next/navigation";
import { Cuisine, PrismaClient, Review, Location } from "@prisma/client";
import {
  VillaOutlined,
  RestaurantOutlined,
  WatchLaterOutlined,
} from "@mui/icons-material";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import {
  convertToDisplayTime,
  Time,
} from "../../../utils/convertToDisplayTime";

import { capitalizeFirstLetter } from "../../../utils/helpers";

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  open_time: string;
  close_time: string;
  slug: string;
  reviews: Review[];
  location: Location;
  cuisine: Cuisine;
}

const prisma = new PrismaClient();

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
      open_time: true,
      close_time: true,
      cuisine: true,
      location: true,
    },
  });
  if (!restaurant) {
    notFound();
  }
  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  const { location, cuisine, open_time, close_time } = restaurant;

  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="bg-white w-full md:w-[70%] rounded p-3 shadow mb-4 border-3-red">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title title={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="w-full mb-4 md:w-[27%] sticky top-0">
        <ReservationCard
          openTime={restaurant.open_time}
          closeTime={restaurant.close_time}
          slug={restaurant.slug}
        />
        {/* <div className="mt-3">
          <h4 className="font-bold">Additional information</h4>
          <div className="flex mt-3">
            <VillaOutlined />
            <div className="ml-1">
              <h5 className="font-bold">Neighborhood</h5>
              <h5>{capitalizeFirstLetter(location.name)}</h5>
            </div>
          </div>
          <div className="flex mt-2">
            <WatchLaterOutlined />
            <div className="ml-1">
              <h5 className="font-bold">Hours of operation</h5>
              <h5>
                {convertToDisplayTime(open_time as Time)} -
                {convertToDisplayTime(close_time as Time)}
              </h5>
            </div>
          </div>
          <div className="flex mt-2">
            <RestaurantOutlined />
            <div className="ml-1">
              <h5 className="font-bold">Cuisines</h5>
              <h5>{capitalizeFirstLetter(cuisine.name)}</h5>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RestaurantDetails;
