import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";
import Price from "../../components/Price";

interface RestaurantCardProps {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
}

const RestaurantCard = ({
  restaurant,
}: {
  restaurant: RestaurantCardProps;
}) => {
  const { name, main_image, cuisine, location, price, slug } = restaurant;
  return (
    <div className="border-b flex pb-5">
      <img src={main_image} className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="text-sm ml-2">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={price} />
            <p className="mr-4 capitalize">{cuisine.name}</p>
            <p className="mr-4 capitalize">{location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
