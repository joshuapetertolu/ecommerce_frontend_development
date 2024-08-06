"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { motion } from "framer-motion";
import ChatModal from "@/components/modals/ChatModal";

function Messages() {
  const [openChat, setOpenChat] = useState(false);
  return (
    <div>
      <ChatModal show={openChat} close={() => setOpenChat(false)} />
      <div>
        <h1 className="my-5 font-bold text-2xl">Chats</h1>

        {/* SEARCH STARTS HERE */}
        <div className="md:flex min-w-max hidden  ">
          <div>
            <div>
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <IoIosSearch
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  id="search"
                  name="search"
                  className="block w-[500px] rounded-md border-0 bg-[#EFEFEF] py-1.5 pl-10 pr-3 text-gray-900 placeholder:text-gray-400 focus:ring-[#EFEFEF] focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  placeholder="Search for messages"
                  type="search"
                />
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white rounded-lg p-5 mt-10">
          <div className="grid grid-cols-1 gap-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <motion.div
                onClick={() => setOpenChat(true)}
                whileHover={{ scale: 1.02 }}
                className="shadow-md hover:bg-[#FFEEEE]  cursor-pointer flex justify-between items-center rounded-md p-4"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src="/images/profile.svg"
                    alt="Empty"
                    width={100}
                    height={100}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h1 className="font-bold text-lg">Buyer</h1>
                    <p className="text-[#828282] text-sm">
                      Do you have 2 cartons of Kings Vegetable Oil 5L, 5 basket
                      of fresh tomatoes ......
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[#828282] text-sm ">Today</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Messages;
