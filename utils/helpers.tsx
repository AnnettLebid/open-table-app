import { Review } from "@prisma/client";

export const calculateReviewRatingAverage = (reviews: Review[]) => {
  if (!reviews.length) return 0;
  return (
    reviews.reduce((acc, review) => {
      return acc + review.rating;
    }, 0) / reviews.length
  );
};

export const capitalizeFirstLetter = (str: string) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
};
