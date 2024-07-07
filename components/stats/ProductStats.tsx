"use client";

import { IoCartSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { GrMoney } from "react-icons/gr";
import { GiBoxUnpacking } from "react-icons/gi";
import { MdInventory } from "react-icons/md";
const stats = [
  {
    id: 1,
    name: "All Products",
    stat: "524",
    icon: GrMoney,
    bgColor: "bg-[#1B9347]",
  },
  {
    id: 2,
    name: "Out of Stock",
    stat: "62",
    icon: GiBoxUnpacking,
    bgColor: "bg-[#2D60FF]",
  },
  {
    id: 3,
    name: "Inventory Value",
    stat: "N1,245,000",
    icon: MdInventory,
    bgColor: "bg-[#808285]",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductStatsCard() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            key={item.id}
            className={
              "relative bg-white py-2 px-4 sm:px-6 shadow rounded-lg overflow-hidden " +
              item.bgColor
            }
          >
            <dt>
              <div className="absolute rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-xl font-semibold text-white font-dmSans">
                {item.name}
              </p>
            </dd>

            <div className=" inset-x-0 bottom-0 bg-gray-50 py-4">
              <div className="text-sm ml-16">
                <p className="font-bold text-white text-3xl font-dmSans">
                  {item.stat}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}
