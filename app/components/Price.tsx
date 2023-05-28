import React from "react";
import { PRICE } from "@prisma/client";

const Price = ({ price }: { price: PRICE }) => {
  const renderPrice = () => {
    if (price === PRICE.CHEAP) {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    } else if (price === PRICE.REGULAR) {
      <>
        <span>$$$</span>
        <span className="text-gray-400">$</span>
      </>;
    } else {
      <span>$$$$</span>;
    }
  };
  return <p className="mr-3 flex">{renderPrice()}</p>;
};

export default Price;
