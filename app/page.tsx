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

  const navigations = [
    {
      id: 1,
      name: "Diary",
      Image: "/images/diary.svg",
    },
    {
      id: 2,
      name: "Sea food",
      Image: "/images/diary.svg",
    },
    {
      id: 3,
      name: "Meat",
      Image: "/images/diary.svg",
    },
    {
      id: 4,
      name: "Fruits and vegetable",
      Image: "/images/diary.svg",
    },
    {
      id: 5,
      name: "Poultry",
      Image: "/images/diary.svg",
    },
    {
      id: 6,
      name: "Processed foods",
      Image: "/images/diary.svg",
    },
    {
      id: 7,
      name: "Oil",
      Image: "/images/diary.svg",
    },
    {
      id: 8,
      name: "Spice",
      Image: "/images/diary.svg",
    },
    // {
    //   id: 8,
    //   name: "View all",
    //   Image: "/images/diary.svg",
    // },
  ];

  return (
    <>
      <div className="overflow-x-hidden ">
        <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 ">
          <LandingNavigation />

          <section className="my-5 mb-10">
            <div className="flex justify-between items-center">
              {navigations?.map((item) => (
                <div
                  onClick={() => push("/category/" + item.name?.toLowerCase())}
                  key={item.id}
                  className="flex justify-center space-x-3 cursor-pointer"
                >
                  <Image
                    src={`${item.Image}`}
                    height={20}
                    width={20}
                    alt={item.name}
                  />
                  <p className="text-[#6D6B6B] text-sm">{item.name}</p>
                </div>
              ))}
            </div>
          </section>

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

          <motion.section
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1, ease: "easeOut" }}
            className=" w-full gap-10 md:gap-40 grid md:grid-cols-2 grid-cols-1 my-20 items-center "
          >
            <div>
              <ReactPlayer
                // height="700px"
                // width="300px"
                pip={true}
                url="https://www.youtube.com/watch?v=rkJrFl9g-iY"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-4xl font-bold font-dmSans text-[#034627] mb-5">
                Get products at the <br /> cheapest price possible{" "}
              </h3>
              <p className="font-poppins">
                Say hello to effortless procurement on the go as we bring the
                power of PROCURENET right to your fingertips. Manage your
                procurement needs anytime, anywhere with our intuitive and
                user-friendly mobile app.
              </p>
            </div>
          </motion.section>

          <div>
            <h2 className="font-bold my-10 font-dmSans text-xl">POULTRY</h2>
            <ProductListCard />
          </div>

          <div>
            <h2 className="font-bold my-10 font-dmSans text-xl">
              FRUITS AND VEGETABLES
            </h2>
            <ProductListCard />
          </div>
        </main>

        {/* TESTIMONIALS STARTS HERE  */}
        <motion.section
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1, ease: "easeOut" }}
          className=" w-full px-20 h-[600px] gap-10 bg-[#034627] md:gap-40 grid md:grid-cols-2 grid-cols-1 my-20 items-center  "
        >
          <div>
            <ReactPlayer
              height="437px"
              width="745px"
              pip={true}
              url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              style={{}}
            />
          </div>
        </motion.section>

        {/* <New Section */}
        <section className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-5 ">
          <SponsoredProduct title="OILS" />
          <SponsoredProduct title="SPICES" />
          <SponsoredProduct title="PROCESSED GOODS" />
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
            Why Use Procurenet{" "}
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
        <FooterNavigation />
      </div>
    </>
  );
}
