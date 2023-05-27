import Header from "../components/Header";
import RestaurantNavBar from "../components/RestaurantNavBar";
import RestaurantMenu from "../components/Menu";

const Menu = () => {
  return (
    <>
      <Header />
      <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
        <div className="bg-white w-[70%] rounded p-3 shadow">
          <RestaurantNavBar />
          <RestaurantMenu />
        </div>
      </div>
    </>
  );
};

export default Menu;
