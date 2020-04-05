import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductCard from "./ProductCard";
import Icon from "@mdi/react";
import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";

const ProductCardsCarousel = (props: IProps) => {
  const ref: any = useRef(document.createElement("div"));

  const goToNext = () => ref.current.slickNext();
  const goToPrev = () => ref.current.slickPrev();

  const { items, slidesToShow } = props;

  const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: slidesToShow > items.length ? items.length : slidesToShow, // to avoid any bug
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="relative">
      <button
        className="absolute z-50"
        style={{ top: "50%", left: "0" }}
        onClick={goToPrev}
      >
        <div className="w-12 h-12 bg-white shadow-lg opacity-50 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Icon path={mdiArrowLeft} size={1} />
        </div>
      </button>

      <button
        className="absolute z-50"
        style={{ top: "50%", right: "0" }}
        onClick={goToNext}
      >
        <div className="w-12 h-12 bg-white shadow-lg opacity-50 hover:opacity-100 transition-all duration-300 flex items-center justify-center">
          <Icon path={mdiArrowRight} size={1} />
        </div>
      </button>
      <Slider ref={ref} {...settings}>
        {items.map(item => (
          <div className="p-2">
            <ProductCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

interface IProps {
  items: any[];
  slidesToShow: number;
}

export default ProductCardsCarousel;
