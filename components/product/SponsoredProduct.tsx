import React from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import ProductModal from "../modals/ProductModal";

interface SponsoredProductProps {
  title: string;
}
function SponsoredProduct({ title }: SponsoredProductProps) {
  const [showProduct, setShowProduct] = useState(false);
  return (
    <div className="w-full border md:m border-[#D6D7DA] md:p-4 p-2 rounded-lg">
      {showProduct && (
        <ProductModal show={showProduct} close={() => setShowProduct(false)} />
      )}
      <div className="flex justify-between items-center">
        <p className="font-dmSans font-extrabold my-2">{title}</p>
        <div className="flex justify-between items-center space-x-2">
          <FaCaretLeft size={20} />
          <FaCaretRight size={20} />
        </div>
      </div>
      {[0, 1, 2, 3].map((item) => (
        <motion.div
          whileHover={{
            scale: 1.02,
          }}
          className="cursor-pointer"
          onClick={() => setShowProduct(true)}
        >
          <div className=" flex justify-between items-center space-x-2">
            <Image
              src="/images/oil.svg"
              alt="hero"
              width={100}
              height={100}
              className="object-cover"
            />

            <div className="text-xs">
              <p>Oils</p>
              <p className="my-2">Premium fresh palm oil </p>
              <p className="underline text-green-500 cursor-pointer">
                Request for quote
              </p>
            </div>
          </div>
          <hr className="my-2 text-[#D9D9D9]" />
        </motion.div>
      ))}
    </div>
  );
}

export default SponsoredProduct;
