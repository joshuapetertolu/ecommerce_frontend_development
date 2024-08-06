"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { IoCheckmarkCircle } from "react-icons/io5";
function Membership() {
  return (
    <>
      <section className="flex md:flex-row flex-col justify-between items-center md:space-x-5 w-full ">
        <div className="bg-white md:mb-0 mb-10  rounded-lg md:w-1/2 w-full p-4 ">
          <div className="flex justify-between items-center">
            <p className="text-[#4A4545] text-xl font-bold">Sponsor product</p>

            <button className="text-lg p-3 rounded-md text-primary border-[#9D9A9A] border">
              {" "}
              + Promote
            </button>
          </div>
          <div className="bg-[#E6FFE5] rounded-md my-5">
            <p className="text-[#034627] text-xs p-3 ">
              Sponsor allow you to promote your products to buyers and will run
              for 1 week
            </p>
          </div>

          <table className="min-w-full divide-y divide-gray-300">
            <thead className="rounded-md text-center">
              <tr className=" rounded-2xl text-center">
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5  text-sm font-semibold text-gray-900 "
                >
                  PRODUCT
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5  text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-[#756D78] bg-white text-center">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <motion.tr
                  whileHover={{ scale: 1.02 }}
                  key={item}
                  className="cursor-pointer "
                >
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    #234567
                  </td>
                  <td className=" px-3 py-4 text-sm flex justify-center items-end">
                    <Image
                      width={50}
                      height={50}
                      src="/images/kingsoil.svg"
                      alt={""}
                      className="h-10 w-10"
                    />
                    <p className="text-xs">Kings Vegetable Oil 5L ......</p>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    30, Jan 2024{" "}
                  </td>

                  <td className="px-3 py-4 m-5 text-sm  ">
                    <p className="bg-[#17B26A] text-white px-3 py-1 font-bold rounded-xl">
                      Active
                    </p>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* //SECOND SECTION STARTS HERE */}
        <div className="bg-white rounded-lg md:w-1/2 w-full p-4 ">
          <div className="flex justify-between items-center">
            <p className="text-[#4A4545] text-xl font-bold">Discounts</p>

            <button className="text-lg p-3 rounded-md text-primary border-[#9D9A9A] border">
              {" "}
              + Discounts
            </button>
          </div>
          <div className="bg-[#E6FFE5] rounded-md my-5">
            <p className="text-[#034627] text-xs p-3 ">
              Discounts allows you promote products at a discounted price to
              buyers
            </p>
          </div>

          <table className="min-w-full divide-y divide-gray-300">
            <thead className="rounded-md text-center">
              <tr className=" rounded-2xl text-center">
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5  text-sm font-semibold text-gray-900 "
                >
                  PRODUCT
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5  text-sm font-semibold text-gray-900"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-[#756D78] bg-white text-center">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                <motion.tr
                  whileHover={{ scale: 1.02 }}
                  key={item}
                  className="cursor-pointer "
                >
                  <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                    #234567
                  </td>
                  <td className=" px-3 py-4 text-sm flex justify-center items-end">
                    <Image
                      width={50}
                      height={50}
                      src="/images/kingsoil.svg"
                      alt={""}
                      className="h-10 w-10"
                    />
                    <p className="text-xs">Kings Vegetable Oil 5L ......</p>
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                    Jun 6, 2024
                  </td>

                  <td className="px-3 py-4 m-5 text-sm  ">
                    <p className="bg-[#17B26A] text-white px-3 py-1 font-bold rounded-xl">
                      Active
                    </p>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PRICING SECTION STARTS HERE  */}

      <section className="flex justify-between items-center md:space-x-5 w-full mt-10 ">
        <div className="bg-white rounded-lg md:w-1/2 w-full p-4 ">
          <div className="flex justify-between items-center">
            <p className="text-[#4A4545] text-xl font-bold">Enterprise plan</p>

            <p className="bg-[#17B26A] text-white px-3 py-0.5 font-bold rounded-xl">
              Active
            </p>

            <p className=" text-[#756D78] px-3 py-1 font-bold rounded-xl">
              Expires: 10/06/24
            </p>
          </div>
          <div className="mt-10 mb-5 flex justify-between items-center">
            <p>FEATURES</p>
            <div>
              <span className="font-extrabold text-3xl">N19,999</span>
              <span className="text-sm text-[#8D8B8B]">/month</span>
            </div>
          </div>

          <hr />
          <div className="mt-10 flex flex-col space-y-10 ">
            <div className="flex space-x-4 items-center">
              <IoCheckmarkCircle size={20} color="#3758F9" />{" "}
              <p className=" text-sm text-[#555555]">Sponsor products</p>
            </div>

            <div className="flex space-x-4 items-center">
              <IoCheckmarkCircle size={20} color="#3758F9" />{" "}
              <p className=" text-sm text-[#555555]">Search Preferences</p>
            </div>

            <div className="flex space-x-4 items-center">
              <IoCheckmarkCircle size={20} color="#3758F9" />{" "}
              <p className=" text-sm text-[#555555]">Supplier showcase</p>
            </div>
          </div>

          <div className="flex justify-center items-center my-10">
            <button className="bg-[#2D60FF] px-5 py-3 text-sm text-white rounded-3xl">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Membership;
