import Image from "next/image";
import LandingNavigation from "@/components/navigations/LandingNavigation";
import LandingHero from "@/components/hero/LandingHero";
import FooterNavigation from "@/components/navigations/FooterNavigation";

export default function Home() {
  return (
    <>
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        <LandingNavigation />
        <LandingHero />
      </main>

      <section className="h-100 bg-[#F0F5FF] w-[100vw] mt-10">
        <div className="flex md:flex-row flex-col justify-center items-center flex-1 w-full p-10 md:p-20">
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
        </div>
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
        </section>
      </div>

      <FooterNavigation />
    </>
  );
}
