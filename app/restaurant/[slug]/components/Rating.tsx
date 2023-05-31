import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "../../../../utils/helpers";

const Rating = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div className="flex items-end">
      <div className="ratings mt-2 flex items-center">
        <p>*****</p>
        <p className="text-reg ml-3">
          {calculateReviewRatingAverage(reviews)?.toFixed(1)}
        </p>
      </div>
      <div>
        <p className="text-reg ml-4">
          {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
        </p>
      </div>
    </div>
  );
};

export default Rating;
