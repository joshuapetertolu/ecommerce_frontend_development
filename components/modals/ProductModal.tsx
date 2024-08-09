import React, { useState } from "react";
import ModalLayout from "../layouts/ModalLayout";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import PhonixButton from "../Inputs/PhonixButton";
import ProcurmentInputField from "../Inputs/ProcurmentInputField";
import {toast} from 'react-hot-toast'

interface ProductModalProps {
  show: boolean;
  close: () => void;
  selectedProduct: any
}
function ProductModal({ show, close, selectedProduct }: ProductModalProps) {
  const [rating, setRating] = useState(4.5);
  const [quantity, setQuantity] = useState(1);  
  let cartItem = JSON.parse(localStorage.getItem("carts") as any) || []


  const addToCartHandler = () => {
    let existingItem = cartItem.find(
      (i: any) => i.product_id === selectedProduct.product_id
    );
    if (existingItem) {
      existingItem.quantity = quantity
    }
    else {
      cartItem=[...cartItem, { ...selectedProduct, quantity: quantity }];
    }
    localStorage.setItem("carts", JSON.stringify(cartItem));

    toast.success("Item added to cart successfully")
    close()

    window.location.reload();
  }

  return (
    <ModalLayout show={show} close={close}>
      <p className="my-5 font-dmSans text-xl">${selectedProduct?.price}</p>

      <div className="flex flex-col md:flex-row justify-between items-center space-x-2 ">
        <div className="flex justify-between">
          <div className="relative inline-block">
            <Image
              src="/images/phones.png"
              alt="hero"
              width={150}
              height={150}
              className="object-cover"
            />
            <span className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 text-sm font-bold">
              ${selectedProduct?.discount} Discount
            </span>
          </div>
        </div>

        <div className="md:w-1/2 w-full md:mt-0 mt-5 flex-col space-y-2">
          <p className="font-dmSans font-extrabold">{selectedProduct?.name}</p>
          <p className="font-dmSans font-extrabold">
            Brand:{selectedProduct?.brand}
          </p>
          <p className="font-dmSans font-extrabold">
            Category: {selectedProduct?.category}
          </p>
          <p className="font-dmSans font-extrabold">
            {" "}
            <p className="font-dmSans font-extrabold">
              Availability: {selectedProduct?.availability}
            </p>
          </p>
          <p className="text-[#656363]">seller’s rating</p>
          <Rating
            readonly
            tooltipDefaultText={selectedProduct?.rating}
            size={25}
            allowFraction={true}
            fillStyle={{
              color: "#33A854",
            }}
            initialValue={selectedProduct?.rating}
            SVGstyle={{
              display: "inline",
            }}
          />

          <p className="font-bold">Description: </p>
          <p className="text-[#656363] flex text-wrap text-sm">
            {selectedProduct?.description}{" "}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0  md:items-center md:space-x-10 mt-5">
        <div>
          <label htmlFor="unit" className="block text-sm text-[#656363]">
            Unit
          </label>
          <select className="border border-[#D9D9D9] text-[#656363] text-sm rounded-md">
            <option value="value">Piece</option>
            <option value="value">Bulk</option>
          </select>
        </div>

        <div>
          <label htmlFor="unit" className="block text-sm text-[#656363]">
            Quantity
          </label>
          <div className="flex space-x-3 items-center">
            <button
              onClick={() => {
                if (quantity === 1) {
                  return;
                }
                setQuantity(quantity - 1);
              }}
              className="border border-[#D9D9D9] text-[#656363] px-3 py-1 rounded-md"
            >
              <p className="font-extrabold">-</p>
            </button>
            <p className="">{quantity}</p>
            <button
              onClick={() => {
                setQuantity(quantity + 1);
              }}
              className="border bg-primary border-[#D9D9D9] text-[#656363] px-3 py-1 rounded-md"
            >
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
        <PhonixButton
          label={"Add to cart"}
          onClick={() => addToCartHandler()}
          type="button"
          btnColor="#4285F4"
        />
      </div>
    </ModalLayout>
  );
}

export default ProductModal;
