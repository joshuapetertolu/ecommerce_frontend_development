import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const sliderImages = [
  "/images/hero2.png",
  "/images/hero1.svg",
  "/images/hero3.svg",
  "/images/hero4.svg",
  "/images/hero5.svg",
];

const loadingState = [1, 2, 3, 4, 5, 6, 7, 8];

export default function () {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Carousel
        showDots={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        infinite={true}
        responsive={responsive}
      >
        {sliderImages.map((item, index) => (
          <div className="w-full h-[458px] rounded-lg">
            <Image
              src={`${item}`}
              alt="hero"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
