import Header from "@/app/restaurant/[slug]/components/Header";
import RestaurantNavBar from "@/app/restaurant/[slug]/components/RestaurantNavBar";
import RestaurantLayout from "@/app/restaurant/[slug]/Layout";

const Menu = () => {
  return (
    <RestaurantLayout>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar />
        <Menu />
      </div>
    </RestaurantLayout>
  );
};

export default Menu;
