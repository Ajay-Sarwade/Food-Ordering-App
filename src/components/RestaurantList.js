import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [resList, setResList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [search, setSearch] = useState("");

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
    setSearchList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList && resList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <input
        className="search-input"
        type="search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button
        className="search-btn"
        onClick={() => {
          const list = resList.filter((res) => {
            return res.info.name.toLowerCase().includes(search.toLowerCase());
          });

          list.length > 0 ? setSearchList(list) : "";
        }}
      >
        Search
      </button>
      <div className="res-list">
        {searchList &&
          searchList.map((res) => {
            return (
              <Link key={res?.info?.id} to={"/restaurantMenu/" + res?.info?.id}>
                <RestaurantCard resData={res.info} />
              </Link>
            );
          })}
      </div>
    </>
  );
};

export default RestaurantList;
