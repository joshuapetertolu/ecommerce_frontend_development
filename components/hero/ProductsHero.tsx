import React from "react";
import Image from "next/image";
import Slider from "react-slick";
// import Slider from "rc-slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductHero() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    showArrows: false,
  };

  return (
    <section>
      <div className="w-full flex">
        <Slider {...settings}>
          {[0, 1, 2, 3, 4, 8, 9, 10].map((item) => (
            <div key={item} className="w-full">
              <Image
                src="/images/tomato.png"
                alt="Google Play download"
                className="w-full h-60 cursor-pointer"
                width={1200}
                height={600}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ProductHero;
