import Header from "@/app/components/Header";
import RestaurantCard from "@/app/components/RestaurantCard";

const Home = () => {
  return (
    <>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap">
        <RestaurantCard />
      </div>
    </>
  );
};

export default Home;
