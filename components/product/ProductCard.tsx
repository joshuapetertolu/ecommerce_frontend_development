"use client";

import Image from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductModal from "../modals/ProductModal";

export default function ProductCard() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-white">
      <ProductModal show={showModal} close={() => setShowModal(false)} />
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="-mx-px grid gap-4 grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item: any) => (
              <motion.div
                onMouseEnter={() => setHoveredCard(item)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setShowModal(true)}
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
                  {/* //only show on hover  */}

                  {hoveredCard === item && (
                    <div className="p-2 bg-white text-right">
                      <button className="text-[#656363]">
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  )}

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
