import React, { useState } from "react";
import ModalLayout from "../layouts/ModalLayout";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import ProcurementButton from "../Inputs/ProcurementButton";
import ProcurmentInputField from "../Inputs/ProcurmentInputField";

interface ProductModalProps {
  show: boolean;
  close: () => void;
}
function ProductModal({ show, close }: ProductModalProps) {
  const [rating, setRating] = useState(4.5);

  return (
    <ModalLayout show={show} close={close}>
      <p className="my-5 font-dmSans text-xl">SELLER NAME</p>

      <div className="flex flex-col md:flex-row justify-between items-center space-x-2 ">
        <div className="flex justify-between">
          <Image
            src="/images/kingsoil.svg"
            alt="hero"
            width={150}
            height={150}
            className="object-cover"
          />
          <Image
            src="/images/kingsoil.svg"
            alt="hero"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full md:mt-0 mt-5 flex-col space-y-2">
          <p className="font-dmSans font-extrabold">Kings Vegetable Oil 5l</p>
          <p className="text-[#656363]">seller’s rating</p>
          <Rating
            readonly
            size={25}
            allowFraction={true}
            fillStyle={{
              color: "#33A854",
            }}
            initialValue={rating}
            SVGstyle={{
              display: "inline",
            }}
          />

          <p className="font-bold">Description: </p>
          <p className="text-[#656363] flex text-wrap text-sm">
            Kings Vegetable Oil 5l: A Carton Of This Product Consists Of 4 Units{" "}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0  md:items-center md:space-x-10 mt-5">
        <div>
          <label htmlFor="unit" className="block text-sm text-[#656363]">
            Unit
          </label>
          <select className="border border-[#D9D9D9] text-[#656363] text-sm rounded-md">
            <option value="value">Cartoon</option>
          </select>
        </div>

        <div>
          <label htmlFor="unit" className="block text-sm text-[#656363]">
            Quantity
          </label>
          <div className="flex space-x-3 items-center">
            <button className="border border-[#D9D9D9] text-[#656363] px-3 py-1 rounded-md">
              <p className="font-extrabold">-</p>
            </button>
            <p className="" onClick={() => console.log("clicked")}>
              2
            </p>
            <button className="border bg-primary border-[#D9D9D9] text-[#656363] px-3 py-1 rounded-md">
              <p className="text-white font-extrabold">+</p>
            </button>
          </div>
        </div>

        <ProcurmentInputField
          type="text"
          name="quantity"
          placeholder="Delivery address"
          value={""}
          onChange={() => console.log("changed")}
          onBlur={() => console.log("blurred")}
          error={""}
          touched={true}
          label={""}
          id={"quantity"}
        />
      </div>

      <div className="w-full my-10">
        <ProcurementButton
          label={"Request for quote"}
          onClick={() => console.log("clicked")}
          type="button"
          btnColor="#4285F4"
        />
      </div>
    </ModalLayout>
  );
}

export default ProductModal;
