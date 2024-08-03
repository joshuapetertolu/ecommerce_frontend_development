"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductModal from "../modals/ProductModal";
import { useState } from "react";

export default function ProductListCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white">
      <ProductModal show={showModal} close={() => setShowModal(false)} />
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <div className=" grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
            (item: any) => (
              <motion.div
                key={item}
                onClick={() => setShowModal(true)}
                className="group relative  cursor-pointer  transition duration-300 ease-in-out rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <Image
                    src="/images/fruit.svg"
                    alt={"product name"}
                    height={200}
                    width={200}
                  />
                </div>

                <div className="pb-4 pt-5">
                  <p className="text-grayLight text-sm font-extrabold">Oils</p>
                  {/* <p className="mt-4 text-left text-base font-bold font-dmSans text-gray-900">
                    ₦12, 500.00
                  </p> */}

                  <h3 className="text-sm text-left font-medium mt-4 text-gray-900">
                    <a href={"#"}>Premium fresh palm oil </a>
                  </h3>

                  <h3 className="text-xs text-left font-medium mt-1 text-grayLight">
                    <a href={"#"}>
                      Kings Vegetable Oil 5l: A Carton Of This Product Consists
                      Of 4 Units...
                    </a>
                  </h3>

                  <p className="underline text-[#34A853] text-xs my-3 ">
                    Request for quote
                  </p>

                  <p className=" text-xs text-grayLight ">SELLER NAME</p>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
