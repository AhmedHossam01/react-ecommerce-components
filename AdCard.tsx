import React from "react";
import { shortenText } from "../utils/textOperations";

const AdCard = (props: IProps) => {
  const { picture, title, description, onAction, price, overlay } = props;
  return (
    <div
      className="w-full h-full bg-cover bg-center relative rounded-md shadow-lg overflow-hidden"
      style={{ backgroundImage: `url(${picture})` }}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full opacity-75 ${overlay}`}
      ></div>
      <div className="absolute p-4 text-white flex justify-between items-center text-center">
        <div className="w-3/6 text-left">
          <h3 className="text-4xl font-light">{title}</h3>
          <p className="mt-4 font-light text-sm">
            {shortenText(description, 203)}...
          </p>
        </div>

        <div className="w-2/6">
          <div className="font-bold text-5xl">${price}</div>
          <button
            onClick={onAction}
            className="mt-4 uppercase py-4 px-8 bg-m-red text-sm font-light"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

interface IProps {
  title: string;
  price: number;
  description: string;
  picture: string;
  onAction: () => void;
  overlay: string; // should be a tailwindcss color
}

export default AdCard;
