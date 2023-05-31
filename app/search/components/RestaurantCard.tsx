import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link";
import { calculateReviewRatingAverage } from "../../../utils/helpers";
import Price from "../../components/Price";

interface RestaurantCardProps {
  id: number;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
  reviews: Review[];
}

const RestaurantCard = ({
  restaurant,
}: {
  restaurant: RestaurantCardProps;
}) => {
  const { name, main_image, cuisine, location, price, slug, reviews } =
    restaurant;

  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);
    if (!rating) return "No reviews yet";
    if (rating < 2) return "Poor";
    if (rating < 3) return "Average";
    if (rating < 4) return "Good";
    return "Awesome";
  };

  return (
    <div className="border-b flex pb-5">
      <img src={main_image} className="w-44 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="text-sm ml-2">{renderRatingText()}</p>
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
