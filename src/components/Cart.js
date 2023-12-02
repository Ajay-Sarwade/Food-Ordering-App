import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

function Cart() {
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const removeCartItem = (item) => {
    dispatch(removeItem(item.info.id));
  };

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <h1 className="font-bold my-6 text-2xl text-center">
        {cartItem?.length > 0
          ? `My Cart items (${cartItem.length})`
          : "Your Cart is empty. Add something from the menu"}
      </h1>
      <div className="w-6/12 mx-auto my-2 bg-gray-50 shadow-lg">
        {cartItem &&
          cartItem?.length > 0 &&
          cartItem.map((item) => (
            <div className=" shadow-md rounded-sm" key={item.info.name}>
              <div className="font-semibold flex justify-between  m-2 p-2">
                <div>{item.info.name}</div>
                <span>
                  {item?.info?.price
                    ? " ₹ " + item?.info?.price / 100
                    : " ₹ " + item?.info?.defaultPrice / 100}
                </span>
              </div>
              <div className="flex justify-between m-2 p-2">
                <span className="text-xs text-left w-9/12">
                  {item?.info?.description}
                </span>
                <button
                  className=" text-white text-sm bg-slate-800 p-2 rounded-md hover:bg-slate-200 hover:text-black h-10"
                  onClick={() => removeCartItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        {cartItem && cartItem?.length > 0 && (
          <div
            className=" text-white text-sm bg-slate-800 h-7 p-5 rounded-md hover:bg-slate-200 hover:text-black flex items-center justify-center  "
            onClick={() => handleClick()}
          >
            Clear Cart
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
