import React from "react";
import Header from "./components/Header";

const RestaurantLayout = ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) => {
  return (
    <main>
      <Header title={params.slug} />
      <div className="flex m-auto w-5/6 md:w-2/3 relative justify-between items-start 0 -mt-11">
        {children}
      </div>
    </main>
  );
};

export default RestaurantLayout;
