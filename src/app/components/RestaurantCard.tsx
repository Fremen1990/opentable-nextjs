import Link from "next/link";

const RestaurantCard = () => {
  return (
    <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
      <Link href="/restaurant/milestones-grill">
        <img
          src="https://res.cloudinary.com/tkwy-prod-eu/image/upload/ar_40:9,c_thumb,w_1580/f_auto/q_auto/dpr_1.0/v1678910654/static-takeaway-com/images/generic/heroes/51/51_sushi_59"
          alt="Food"
          className="w-full h-36"
        />
        <div className="p-1">
          <h3 className="font-bold text-2xl mb-2">Cool Sushi</h3>
          <div className="flex items-start">
            <div className="flex mb-2">*****</div>
            <p className="ml-2">77 reviews</p>
          </div>
          <div className="flex text-reg font-light capitalize">
            <p className="mr-3">Mexican</p>
            <p className="mr-3">$$$</p>
            <p>Toronto</p>
          </div>
          <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
