"use client";

import Image from "next/image";
import LandingNavigation from "@/components/navigations/LandingNavigation";
import FooterNavigation from "@/components/navigations/FooterNavigation";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import ProductListCard from "@/components/product/ProductListCard";
import ReactPlayer from "react-player/youtube";
import HomeCarouselHero from "@/components/hero/HomeCarouselHero";
import SponsoredProduct from "@/components/product/SponsoredProduct";
export default function Home() {
  const { push } = useRouter();

  const features = [
    {
      title: "Track Orders in real Time",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
      image: "/images/delivery.svg",
      bgColor: "#E1E5F5",
    },
  ];


  return (
    <>
      <div className="overflow-x-hidden ">
        <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 ">
          <LandingNavigation />
          <div className="w-full my-5 md:space-x-5  flex flex-col md:flex-row">
            <div className="md:w-9/12 w-full">
              <HomeCarouselHero />
            </div>

            <div className="md:w-3/12 md:mt-0 mt-5">
              <SponsoredProduct title="SPONSORED" />
            </div>
          </div>

          <div>
            <h2 className="font-bold my-10 font-dmSans text-xl">
              NEW PRODUCTS ADDED
            </h2>
            <ProductListCard />
          </div>

        
          <div>
            <h2 className="font-bold my-10 font-dmSans text-xl">LATEST RELEASE</h2>
            <ProductListCard />
          </div>

          <div>
            <h2 className="font-bold my-10 font-dmSans text-xl">
            SMARTPHONES
            </h2>
            <ProductListCard />
          </div>
        </main>

    
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
                    alt="Phonix"
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
        <FooterNavigation />
      </div>
    </>
  );
}
