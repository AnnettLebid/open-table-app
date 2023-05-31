import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";

interface RestaurantCardProps {
  restaurant: RestaurantCardType;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const { name, main_image, cuisine, location, price, reviews } = restaurant;
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href={`restaurant/${restaurant.slug}`}>
        <img src={main_image} className="w-full h-36" />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">{name}</h3>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex mb-2">*****</div>
              <p className="ml-2">{reviews.length} review{reviews.length === 1 ? "" : "s"}</p>
            </div>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className="mr-3">{cuisine.name}</p>
            <Price price={price} />
            <p>{location.name}</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
