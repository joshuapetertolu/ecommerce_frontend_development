import React from "react";
import Image from "next/image";

function LandingHero() {
  return (
    <section>
      <div className="container relative mx-auto">
        <Image
          src="/images/circle.svg"
          height={100}
          width={100}
          alt=""
          className="absolute left-32 -z-50 "
        />
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
              <Image
                width={50}
                height={50}
                src="/images/applestore.svg"
                alt="Apple Store download"
                className="w-40 h-40 cursor-pointer"
              />{" "}
              <Image
                width={50}
                height={50}
                src="/images/playstore.svg"
                alt="Playstore Download"
                className="w-40 h-40 cursor-pointer"
              />
            </div>
          </div>

          {/* LEFT HANDSIDE  */}
          <div className="flex relative justify-center">
            <Image
              width={50}
              height={50}
              src="/images/farmer.svg"
              alt="procurement"
              className="w-64 h-64"
            />

            <Image
              width={50}
              height={50}
              src="/images/sales.svg"
              alt="procurement"
              className="w-40 h-40 absolute -right-10 -top-10 "
            />

            <Image
              width={50}
              height={50}
              src="/images/orders.svg"
              alt="procurement"
              className="w-40 h-40 absolute -right-10 -top-10 "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingHero;
