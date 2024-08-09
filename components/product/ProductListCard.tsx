"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProductModal from "../modals/ProductModal";
import { useEffect, useState } from "react";
import { BsCartCheck } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import productService from "@/features/actions/getProducts";

export default function ProductListCard() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts ] = useState<any>([])
  const [selectedProduct, setSelectedProduct] = useState()





  useEffect(() => {

    const getProducts = async () => {
      const res = await productService.getProducts();

      if (res) {
        setProducts(res);
      }
    }

        getProducts()
  }, []);


  return (
    <div className="bg-white">
      <ProductModal
        show={showModal}
        close={() => setShowModal(false)}
        selectedProduct={selectedProduct}
      />
      <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
        <div className=" grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-center items-center">
          {products &&
            products?.length > 0 &&
            products.map((item: any) => (
              <motion.div
                key={item}
                onClick={() => {
                  setSelectedProduct(item);
                  setShowModal(true);
                }}
                className="group relative  cursor-pointer  transition duration-300 ease-in-out rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-h-90 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                  <Image
                    src="/images/phones.png"
                    alt={"product name"}
                    height={400}
                    width={200}
                  />
                </div>

                <div className="pb-4 pt-5">
                  <p className="text-grayLight text-sm font-extrabold">
                    {item?.name}
                  </p>
                  {/* <p className="mt-4 text-left text-base font-bold font-dmSans text-gray-900">
                    ₦12, 500.00
                  </p> */}

                  <h3 className="text-sm text-left font-medium mt-4 text-gray-900">
                    <a href={"#"}>Price: ${item?.price}9</a>
                  </h3>

                  <h3 className="text-xs text-left font-medium mt-1 text-grayLight">
                    <a href={"#"}>{item?.description}</a>
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="underline text-[#34A853] text-xs my-3 ">
                      View Details
                    </p>
                   
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
