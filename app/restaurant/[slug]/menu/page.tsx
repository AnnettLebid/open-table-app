import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/Menu";

const Menu = () => {
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar />
        <RestaurantMenu />
      </div>
    </>
  );
};

export default Menu;
