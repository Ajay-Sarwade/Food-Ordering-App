import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;

  let url =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="res-card w-[200px] h-[300px] m-4 bg-gray-100 rounded-xl hover:bg-gray-200">
      <div className="p2 ">
        <img
          className="card-img w-[200px] h-[150px] p-2 rounded-xl"
          src={url + cloudinaryImageId}
        />
        <div className="p-2 ">
          <h3 className="font-bold text-md py-2">{name}</h3>
          <h4 className="truncate font-semibold text-xs">
            {cuisines.join(" ")}
          </h4>
          <h4 className="font-bold text-sm py-1">{avgRating} stars</h4>
          <h4 className="font-bold text-sm">{costForTwo}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
