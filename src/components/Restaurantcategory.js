import React, { useState } from "react";

function Restaurantcategory({ title, menuItems }) {
  const [clicked, setClicked] = useState(false);
  return menuItems ? (
    <>
      <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <span className="font-semibold m-2">
            {title} ({menuItems?.length})
          </span>
          <span className=" m-2">⬇️</span>
        </div>
        {clicked &&
          menuItems.map((item) => (
            <div className=" shadow-md rounded-sm" key={item.card.info.name}>
              <div className="font-semibold flex justify-between  m-2 p-2">
                <div>{item.card.info.name}</div>
                <span>
                  {item?.card?.info?.price
                    ? " ₹ " + item?.card?.info?.price / 100
                    : " ₹ " + item?.card?.info?.defaultPrice / 100}
                </span>
              </div>
              <div className="flex justify-between m-2 p-2">
                <span className="text-xs text-left w-9/12">
                  {item?.card?.info?.description}
                </span>
                <button className=" text-white text-sm bg-slate-800 p-2 rounded-md hover:bg-slate-200 hover:text-black h-10">
                  Add+
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  ) : (
    ""
  );
}

export default Restaurantcategory;
