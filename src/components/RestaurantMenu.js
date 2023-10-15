import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  return (
    <div>
      <h2>{resName}</h2>
      <h3>Menu</h3>
      {menuList.map(
        (item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name +
              " - " +
              (item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : "250") +
              " Rs"}
          </li>
        )
        // console.log(item.card.info.price)
      )}
    </div>
  );
};

export default RestaurantMenu;
