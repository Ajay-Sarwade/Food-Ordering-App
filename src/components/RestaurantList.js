import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  console.log(resList.length);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList && resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-list">
      {resList &&
        resList.map((res) => {
          return <RestaurantCard resData={res.info} />;
        })}
    </div>
  );
};

export default RestaurantList;
