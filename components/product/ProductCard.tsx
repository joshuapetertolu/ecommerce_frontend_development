"use client";

import Image from "next/image";

import { motion } from "framer-motion";
const products = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    price: "$149",
    rating: 5,
    reviewCount: 38,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    price: "$15",
    rating: 5,
    reviewCount: 18,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    price: "$15",
    rating: 5,
    reviewCount: 14,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    price: "$15",
    rating: 4,
    reviewCount: 21,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg",
    imageAlt: "TODO",
    href: "#",
  },
  // More products...
];

export default function ProductCard() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid gap-4 grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item) => (
              <motion.div
                key={item}
                className="group relative border border-[#D6DEEA] shadow-lg p-4 sm:p-6 cursor-pointer hover:shadow-2xl transition duration-300 ease-in-out rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <Image
                    src="/images/kingsoil.svg"
                    alt={"product name"}
                    height={200}
                    width={200}
                  />
                </div>

                <div className="pb-4 pt-10 text-center">
                  <p className=" flex w-full text-right justify-end items-end p-0.5 font-dmSans rounded-lg text-[#D92D20] font-extrabold text-sm ">
                    Out of Stock
                  </p>

                  <p className="mt-4 text-left text-base font-bold font-dmSans text-gray-900">
                    ₦12, 500.00
                  </p>

                  <h3 className="text-sm text-left font-medium mt-4 text-gray-900">
                    <a href={"#"}>Kings Vegetable Oil 5l</a>
                  </h3>

                  <h3 className="text-sm text-left font-medium mt-4 text-gray-900">
                    <a href={"#"}>This is product description......</a>
                  </h3>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
