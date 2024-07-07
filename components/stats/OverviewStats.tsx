import { IoMdPricetag } from "react-icons/io";
import { IoCard, IoCartSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import { GrMoney } from "react-icons/gr";

const stats = [
  {
    id: 1,
    name: "Total Orders",
    stat: "400",
    icon: IoCartSharp,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 2,
    name: "Total Sale",
    stat: "₦1.2M",
    icon: GrMoney,
    change: "5.4%",
    changeType: "increase",
  },
  {
    id: 3,
    name: "Total Products",
    stat: "452",
    icon: IoMdPricetag,
    change: "3.2%",
    changeType: "decrease",
  },
  {
    id: 4,
    name: "Total Payments",
    stat: "236",
    icon: IoCard,
    change: "3.2%",
    changeType: "decrease",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function OverviewCard() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute border border-[#E6E4E7] shadow-sm rounded-md p-3">
                <item.icon
                  className="h-6 w-6 text-[#612568]"
                  aria-hidden="true"
                />
              </div>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-xl font-semibold text-[#1A181B] font-dmSans">
                {item.name}
              </p>
            </dd>

            <div className=" inset-x-0 bottom-0 bg-gray-50 py-4">
              <div className="text-sm">
                <p className="font-bold text-3xl font-dmSans">{item.stat}</p>
              </div>
            </div>

            <dd className="flex items-baseline">
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-green-600"
                    : "text-red-600",
                  "ml-2 flex items-baseline text-sm font-semibold"
                )}
              >
                {item.changeType === "increase" ? (
                  <HiArrowTrendingUp
                    className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                    aria-hidden="true"
                  />
                ) : (
                  <HiArrowTrendingDown
                    className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                    aria-hidden="true"
                  />
                )}

                <span className="">{item.change}</span>
              </p>
              <span className="text-[#756D78] text-xs ml-4">vs last month</span>
            </dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}
