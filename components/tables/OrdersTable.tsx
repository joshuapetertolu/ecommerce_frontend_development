import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaSortDown } from "react-icons/fa";
import { motion } from "framer-motion";

const filters = [
  { name: "All", current: true },
  { name: "Pending invoice", current: false },
  { name: "Payment confirmed", current: false },
  { name: "Delivery in progress", current: false },
  { name: "Disputes", current: false },
  { name: "Complete", current: false },
];
function OrdersTable() {
  return (
    <div className=" text-[#828282]">
      <div>
        <div className="grid md:grid-cols-6 grid-cols-2 items-center px-4 py-4 sm:px-6 ">
          {filters.map((filter) => (
            <button
              key={filter.name}
              className={`${
                filter.current
                  ? "text-black font-bold border-b-4 border-[#1B9347]"
                  : "text-[#828282]"
              }  px-4 py-2   text-sm font-semibold`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-[#F2F5F8] rounded-md text-center">
            <tr className=" rounded-2xl text-center">
              <th
                scope="col"
                className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Order ID
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5  text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Status
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5  text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-3 py-3.5  text-sm font-semibold text-gray-900"
              >
                Total
              </th>
              <th scope="col" className=" py-3.5 pl-3 pr-4 sm:pr-0">
                <span>Action</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white text-center">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <motion.tr key={item}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                  #1234567893
                  <dl className="font-normal lg:hidden">
                    <dt className="sr-only">Title</dt>
                    <dd className="mt-1 truncate text-gray-700">Pending</dd>
                    <dt className="sr-only sm:hidden">Email</dt>
                    <dd className="mt-1 truncate text-gray-500 sm:hidden">
                      30, Jan 2024{" "}
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                  Pending
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  30, Jan 2024{" "}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">650,000 </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                  <Menu
                    as="div"
                    className="flex justify-center items-center "
                    key={item}
                  >
                    <MenuButton className="rounded-md border border-[#8D8B8B] px-3 py-1 flex space-x-3">
                      <p>Action</p>
                      <FaSortDown />
                    </MenuButton>
                    <MenuItems
                      anchor="bottom"
                      className="bg-white  shadow-2xl z-50 text-[#828282] rounded-lg p-5 flex flex-col space-y-4"
                    >
                      <MenuItem>
                        <a
                          className="block text-[#828282] hover:text-[#1B9347] font-semibold"
                          href="#"
                        >
                          Process Inoice
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrdersTable;
