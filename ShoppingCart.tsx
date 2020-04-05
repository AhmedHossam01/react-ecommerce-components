import React from "react";
import { shortenText } from "../utils/textOperations";

const ShoppingCart = (props: IProps) => {
  const { items, onChangeQuantity } = props;
  return (
    <div className="p-8 shadow-xl m-full rounded-sm overflow-hidden">
      {/* Header */}
      <div className="flex justify-between pb-4 border-b-2">
        <h3 className="uppercase">Shpping Cart</h3>
        <button
          onClick={() => onChangeQuantity()}
          className="uppercase text-sm font-light text-gray-700"
        >
          resest cart
        </button>
      </div>
      {/* Items */}
      <div>
        {items.map(item => (
          <div className="border-b-2 py-4 flex items-center">
            <div className="w-1/5">
              <img
                className="w-20 h-16 shadow-mg object-cover"
                alt="product name"
                src={item.picture}
              />
            </div>
            <div className="flex justify-center flex-col w-2/5">
              <h4 className="capitalize">{item.productName}</h4>
              <p className="text-gray-700 text-sm font-light">
                {shortenText(item.description, 25)}...
              </p>
            </div>
            <div className="w-1/5 flex text-xl justify-around">
              <button onClick={() => onChangeQuantity()} className="">
                -
              </button>
              <div>{item.quantity}</div>
              <button onClick={() => onChangeQuantity()} className="text-m-red">
                +
              </button>
            </div>
            <div className="w-1/5 flex justify-end">${item.price}</div>
          </div>
        ))}
      </div>
      {/* Details */}
      <div className="py-2">
        <div className="flex justify-between items-center pt-2">
          <p className="font-light text-sm">Subtotal </p>
          <p>$559</p>
        </div>
        <div className="flex justify-between items-center py-1">
          <p className="font-light text-sm">Shipping</p>
          <p>$998</p>
        </div>
        <div className="flex justify-between items-center pb-2">
          <p className="font-light text-sm">Total</p>
          <p className="text-m-red font-bold">$9917</p>
        </div>
      </div>
      {/* Actions */}
      <div>
        <button className="uppercase text-white text-sm bg-m-red py-4 w-full shadow-lg ">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

interface IProps {
  items: {
    productName: string;
    quantity: number;
    price: number;
    description: string;
    picture: string;
  }[];
  onChangeQuantity: () => void;
}

export default ShoppingCart;
