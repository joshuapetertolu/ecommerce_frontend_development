"use client";

import Image from "next/image";
import LandingNavigation from "@/components/navigations/LandingNavigation";
import LandingHero from "@/components/hero/LandingHero";
import FooterNavigation from "@/components/navigations/FooterNavigation";
import { motion } from "framer-motion";

export default function Supplier() {
  const options = [
    {
      title: "Secure platform",
      description:
        "The ultimate solution for hotels and restaurants to simplify their purchasing processes. Discover, order and manage supplies.",
      image: "/images/security.svg",
    },
    {
      title: "Real time support",
      description:
        "The ultimate solution for hotels and restaurants to simplify their purchasing processes. Discover, order and ",
      image: "/images/support.svg",
    },
    {
      title: "Good user experience",
      description:
        "The ultimate solution for hotels and restaurants to simplify their purchasing processes. Discover, order and ",
      image: "/images/quality.svg",
    },
  ];

  const features = [
    {
      title: "Inventory management",
      description:
        "The ultimate solution for hotels and restaurants to simplify their purchasing processes. Discover, order and manage supplies effortlessly, all within one seamless platform.",
      image: "/images/woman.svg",
      bgColor: "#FFEEEE",
    },
    {
      title: "Chat with verified businesses",
      description:
        "The ultimate solution for hotels and restaurants to simplify their purchasing processes. Discover, order and manage supplies effortlessly, all within one seamless platform.",
      image: "/images/chat.svg",
      bgColor: "#E5FEF2",
    },
    {
      title: "Send invoice, get paid",
      description:
        "The ultimate solution for hotels and restaurants to simplify their purchasing processes. Discover, order and manage supplies effortlessly, all within one seamless platform. ",
      image: "/images/paid.svg",
      bgColor: "#E1E5F5",
    },
  ];

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <LandingNavigation />
        <LandingHero />
      </main>

      <section className="h-100 bg-[#F0F5FF] w-[100vw] mt-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex md:flex-row flex-col justify-center items-center flex-1 w-full p-10 md:p-20"
        >
          <div className="justify-center items-center flex md:mr-20 ">
            <Image
              width={200}
              height={200}
              src="/images/cartoon-orders.svg"
              alt="procurement"
              // className="w-8 h-80"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-bold text-black font-dmSans mt-10">
              Recieve orders and <br /> sellout in no time
            </h1>
            <p className="text-[#1F1F1F] mt-4 ">
              The ultimate solution for hotels and restaurants to <br />{" "}
              simplify their purchasing processes. Discover, <br /> order and
              manage supplies effortlessly, all within <br />
              one seamless platform.{" "}
            </p>
          </div>
        </motion.div>
      </section>

      {/* WHY CHOOSE PROCUREMENT STARTS HERE  */}

      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <section>
          <div className="w-full md:w-1/2">
            <h2 className="font-extrabold text-3xl my-10">
              Why Choose Procurement
            </h2>
            <p>
              The ultimate solution for hotels and restaurants to simplify their
              purchasing processes. Discover, order and manage supplies.
            </p>
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mt-4 grid md:grid-cols-3 gap-4"
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="bg-[#6073C0] rounded-lg text-white p-5"
              >
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl font-bold">{option.title}</h3>
                  <Image
                    width={200}
                    height={200}
                    src={option.image}
                    alt="procurement"
                    className="w-20 h-20"
                  />
                </div>

                <p className="mt-10">{option.description}</p>
              </div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* WHY CHOOSE PROCUREMENT ENDS HERE  */}

      {/* FEATURES STARTS HERE  */}
      <section className="grid grid-cols-1 gap-5 mt-10">
        {features.map((feature) => (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            key={feature.title}
            className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8"
          >
            <div
              style={{ backgroundColor: feature.bgColor }}
              className={`flex md:flex-row flex-col rounded-xl justify-between items-center bg-[${feature.bgColor}] p-5`}
            >
              <div className="md:px-40">
                <h2 className="font-extrabold text-3xl my-10">
                  {feature.title}{" "}
                </h2>
                <p>{feature.description}</p>
              </div>
              <Image
                width={200}
                height={200}
                src={feature.image}
                alt="procurement"
                className="w-80 h-80"
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* FEATURES ENDS HERE  */}

      {/* DOWNLOAD THE APP SECTION */}

      <FooterNavigation />
    </>
  );
}
