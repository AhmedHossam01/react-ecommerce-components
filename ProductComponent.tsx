import React from "react";
import Icon from "@mdi/react";
import StarRatingComponent from "react-star-rating-component";
import { mdiCart } from "@mdi/js";
import { mdiHeart } from "@mdi/js";
import { shortenText } from "../utils/textOperations";

const ProductCard = (props: IProductProps) => {
  const {
    productName,
    quantity,
    price,
    description,
    rating,
    picture,
    favourite,
    carted,
    onAddToCart,
    onAddToFavourite
  } = props.item;

  const descriptionOutput = shortenText(description, 50);

  return (
    <div className="shadow-md rounded-sm overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/3">
        {/* Product Image */}
        <div className="bg-red-500 h-56 md:h-auto">
          <img
            className="object-cover h-full w-full"
            src={picture}
            alt={productName}
          />
        </div>
      </div>

      <div className="p-8 md:w-2/3 flex flex-col">
        {/* Product Details */}
        <div>
          <h3 className="text-3xl font-light">{productName}</h3>

          <div className="flex justify-between text-gray-900 font-light text-sm">
            <p>Stock: {quantity}</p>
            <div className="mr-5">
              <StarRatingComponent name={productName} value={rating} />
            </div>
          </div>

          <p className="mt-4 font-light text-gray-700 text-sm capitalize">
            {descriptionOutput}...
          </p>
        </div>

        {/* Product Actions */}
        <div className="border border-t flex mt-auto">
          <div className="bg-m-red flex items-center text-xl font-light text-white p-2">
            <p>${price}</p>
          </div>
          <button className="bg-gray-200 px-1 sm:px-8 border-r uppercase text-sm">
            Buy now
          </button>

          {/* Add to Cart */}
          <button
            onClick={onAddToCart}
            className="border-r flex-1 flex items-center justify-center"
          >
            <Icon
              className={`stroke-current hover:fill-current ${
                carted ? "fill-current" : "fill-white"
              }`}
              size={1}
              path={mdiCart}
            />
          </button>

          {/* Add to Favourite */}
          <button
            onClick={onAddToFavourite}
            className="flex-1 flex items-center justify-center"
          >
            <Icon
              className={`stroke-current text-m-red hover:fill-current ${
                favourite ? "fill-current" : "fill-white"
              }`}
              size={1}
              path={mdiHeart}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

interface IProductProps {
  item: {
    productName: string;
    quantity: number;
    price: number;
    description: string;
    rating: number;
    picture: string;
    favourite?: boolean;
    carted?: boolean;
    onAddToCart: () => void;
    onAddToFavourite: () => void;
  };
}

export default ProductCard;
