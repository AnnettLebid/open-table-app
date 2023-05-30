"use client";

import { Location, Cuisine, PRICE } from "@prisma/client";
import Link from "next/link";

const priceButtons = [
  {
    id: 1,
    class: "border w-full text-reg font-light rounded-l p-2",
    text: "$",
    price: PRICE.CHEAP,
  },
  {
    id: 2,
    class: "border-r border-t border-b w-full text-reg font-light p-2",
    text: "$$",
    price: PRICE.REGULAR,
  },
  {
    id: 3,
    class:
      "border-r border-t border-b w-full text-reg font-light rounded-r p-2",
    text: "$$$",
    price: PRICE.EXPENSIVE,
  },
];

const SearchSideBar = ({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) => {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4 flex flex-col">
        <>
          <h1 className="mb-2">Region</h1>
          {locations.map((location) => (
            <Link
              href={{
                pathname: "/search",
                query: {
                  ...searchParams,
                  city: location.name,
                },
              }}
              className="font-light text-reg capitalize"
              key={location.id}
            >
              {location.name}
            </Link>
          ))}
        </>
      </div>
      <div className="border-b pb-4 mt-3 flex flex-col">
        <>
          <h1 className="mb-2">Cuisine</h1>
          {cuisines.length &&
            cuisines.map((cuisine) => (
              <Link
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    cuisine: cuisine.name,
                  },
                }}
                className="font-light text-reg capitalize"
                key={cuisine.id}
              >
                {cuisine.name}
              </Link>
            ))}
        </>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <>
            {priceButtons.map((btn) => (
              <Link
                href={{
                  pathname: "/search",
                  query: {
                    ...searchParams,
                    price: btn.price,
                  },
                }}
                className={btn.class}
                key={btn.id}
              >
                {btn.text}
              </Link>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default SearchSideBar;
