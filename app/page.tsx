"use client";

import Image from "next/image";
import LandingNavigation from "@/components/navigations/LandingNavigation";
import FooterNavigation from "@/components/navigations/FooterNavigation";
import { motion } from "framer-motion";
import HomeHero from "@/components/hero/HomeHero";
import Partner1 from "../public/images/partner1.svg";
import Partner2 from "../public/images/partner2.svg";
import Partner3 from "../public/images/partner3.svg";
import Partner4 from "../public/images/partner4.svg";
import Partner5 from "../public/images/partner5.svg";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
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
      title: "Track Orders in real Time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      image: "/images/delivery.svg",
      bgColor: "#E1E5F5",
    },
  ];

  const partners = [
    {
      image: Partner1,
    },
    {
      image: Partner2,
    },
    {
      image: Partner3,
    },
    {
      image: Partner4,
    },
    {
      image: Partner5,
    },
  ];

  return (
    <div className="overflow-x-hidden ">
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 ">
        <LandingNavigation />
        <HomeHero />
      </main>

      <section>
        <div className="flex justify-center items-center text-center flex-col  ">
          <h2 className="font-bold text-2xl md:text-4xl mb-3 font-dmSans">
            Trusted by 2000+ Food Businesses
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            <br /> Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </div>

        {
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center items-center flex-wrap space-x-10 mt-10"
          >
            {partners.map((partner, index) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex justify-center cursor-pointer items-center"
              >
                <Image
                  width={200}
                  height={200}
                  src={partner.image}
                  alt="procurement"
                  className="w-20 h-20"
                />
              </motion.div>
            ))}
          </motion.div>
        }
      </section>

      {/* //PRODUCT FEATURES STARTS HERE  */}

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="mt-10 md:mt-20 my-10 md:mx-20 mx-5"
      >
        <h2 className="font-bold text-4xl font-dmSans text-center mb-10 ">
          Product Features
        </h2>

        <div className="w-full flex space-x-5 justify-between items-center flex-col md:flex-row ">
          <div className="bg-[#FFEEEE] rounded-sm p-10 mb-5 md:mb-0">
            <p className="font-bold font-dmSans text-2xl mb-5 ">
              Procurement for food businesses
            </p>
            <p className="font-poppins">
              Say hello to effortless procurement on the go as we bring the
              power of PROCURENET right to your fingertips. Manage your
              procurement needs anytime, anywhere with our intuitive and
              user-friendly mobile app.
            </p>

            <div className="flex justify-end items-end w-full">
              <Image
                width={260}
                height={260}
                src="/images/woman.svg"
                alt="procurement"
              />
            </div>
          </div>

          <div className="flex w-full flex-col space-y-3">
            <div className="bg-[#F8E9FF] rounded-sm p-10 flex flex-col md:flex-row justify-end w-full">
              <div>
                <p className="font-bold font-dmSans text-xl mb-5 ">
                  Peace of Mind With Escrow Payment{" "}
                </p>
                <p className="font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="flex justify-end items-end w-full">
                <Image
                  width={200}
                  height={200}
                  src="/images/money.svg"
                  alt="procurement"
                />
              </div>
            </div>

            <div className="bg-[#F8E9FF] rounded-sm p-10 flex flex-col md:flex-row justify-end w-full">
              <div>
                <p className="font-bold font-dmSans text-xl mb-5 ">
                  Buy Now Pay Later{" "}
                </p>
                <p className="font-poppins">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="flex justify-end items-end w-full">
                <Image
                  width={200}
                  height={200}
                  src="/images/cashless.svg"
                  alt="procurement"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

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
              className={`flex w-full md:flex-row flex-col rounded-xl justify-between bg-[${feature.bgColor}] p-10`}
            >
              <div className="md:w-3/5">
                <Image
                  width={200}
                  height={200}
                  src={feature.image}
                  alt="procurement"
                  className="w-full h-full"
                />
              </div>

              <div className="md:w-2/3">
                <h2 className="font-extrabold text-3xl my-10">
                  {feature.title}{" "}
                </h2>
                <p>{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* FEATURES ENDS HERE  */}

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center space-x-10 items-center my-10 md:my-20 md:mx-20 mx-5"
      >
        <div>
          <Image
            width={500}
            height={500}
            src="/images/marketwomen.png"
            alt="procurement"
          />
        </div>

        <div>
          <h3 className="text-2xl md:text-4xl font-bold  font-dmSans text-[#034627] mb-5">
            E-Procurement for all Food Items
          </h3>
          <p className="font-poppins">
            Access to a variety of food supplies for your food business at the
            best prices.
          </p>
          <motion.button
            onClick={() => push("/businesses")}
            whileHover={{ scale: 1.1 }}
            className="px-5 py-3 mt-10 rounded-sm text-white bg-[#4285F4]"
          >
            For Businesses
          </motion.button>
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex justify-center space-x-10 items-center my-10 md:my-20 md:mx-20 mx-5"
      >
        <div>
          <h3 className="text-2xl md:text-4xl font-bold  font-dmSans text-[#034627] mb-5">
            Sell to over 2000+ Food Businesses{" "}
          </h3>
          <p className="font-poppins">
            Access to a variety of food supplies for your food business at the
            best prices.
          </p>
          <motion.button
            onClick={() => push("/suppliers")}
            whileHover={{ scale: 1.1 }}
            className="px-5 py-3 mt-10 rounded-sm text-white bg-[#34A853]"
          >
            For Suppliers
          </motion.button>
        </div>

        <div>
          <Image
            width={500}
            height={500}
            src="/images/forsupplier.png"
            alt="procurement"
          />
        </div>
      </motion.section>
      {/* DOWNLOAD THE APP SECTION */}

      <FooterNavigation />
    </div>
  );
}
