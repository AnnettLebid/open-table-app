import { PrismaClient } from "@prisma/client";
import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/Menu";

const prisma = new PrismaClient();

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
    throw new Error("Cannot find restaurant");
  }
  return restaurant.items;
};

const Menu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <RestaurantMenu menu={menu} />
      </div>
    </>
  );
};

export default Menu;
