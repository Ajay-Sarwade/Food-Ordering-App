import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Restaurantcategory from "./Restaurantcategory";

const RestaurantMenu = () => {
  const [resName, setResName] = useState([]);
  const [menuList, setMenuList] = useState([]);
  const params = useParams();
  const { resId } = params;

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.3911928&lng=75.0742941&restaurantId=" +
        resId
    );

    const json = await data.json();
    setResName(json?.data?.cards[0]?.card?.card?.info?.name);
    setMenuList(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl">{resName}</h2>
      <h3 className="font-bold my-2 text-xl">Menu</h3>
      {menuList.map((item) =>
        item?.card?.card?.title ? (
          <Restaurantcategory
            title={item?.card?.card?.title}
            menuItems={item?.card?.card?.itemCards}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default RestaurantMenu;
