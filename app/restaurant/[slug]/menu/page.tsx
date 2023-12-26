import { notFound } from "next/navigation";
import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/Menu";
import DBClient from "../../../DB";

const prisma = DBClient.getInstance().prisma;

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });
  if (!restaurant) {
    notFound();
  }
  return restaurant.items;
};

const Menu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);

  return (
    <>
      <div className="bg-white w-full md:w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <RestaurantMenu menu={menu} />
      </div>
    </>
  );
};

export default Menu;
