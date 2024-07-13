"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function LandingHero() {
  return (
    <section>
      <div className="container relative mx-auto">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
          }}
          className="absolute top-10 left-32 -z-50"
        >
          <Image src="/images/circle.svg" height={100} width={100} alt="" />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-[90vh]">
          <div className="flex flex-col justify-center">
            <h1 className="md:text-5xl text-2xl font-extrabold text-[#1F1F1F] font-dmSans">
              Join procurenet and sell out your products to verified businesses
            </h1>
            <p className="text-sm md:text-xl text-[#1F1F1F] mt-4">
              The ultimate solution for hotels and restaurants to simplify their
              purchasing processes. Discover, order and manage supplies
              effortlessly, all within one seamless platform.{" "}
            </p>

            <div className="flex space-x-5">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex space-x-5"
              >
                <Image
                  width={50}
                  height={50}
                  src="/images/playstore.svg"
                  alt="Google Play download"
                  className="w-40 h-40 cursor-pointer"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex space-x-5"
              >
                <Image
                  width={50}
                  height={50}
                  src="/images/playstore.svg"
                  alt="Playstore Download"
                  className="w-40 h-40 cursor-pointer"
                />
              </motion.div>
            </div>
          </div>

          {/* LEFT HANDSIDE  */}
          <div className="flex relative justify-center">
            <Image
              width={1200}
              height={1200}
              src="/images/farmer.png"
              alt="procurement"
              // className="w-8 h-80"
            />
          </div>
        </div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
          }}
          className="absolute bottom-5 -z-50"
        >
          <Image src="/images/rectangle.svg" height={100} width={100} alt="" />
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
          }}
          className="absolute bottom-5 left-1/3 -z-50"
        >
          <Image src="/images/polygon.svg" height={100} width={100} alt="" />
        </motion.div>
      </div>
    </section>
  );
}

export default LandingHero;
