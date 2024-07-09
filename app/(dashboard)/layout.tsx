"use client";

import { Fragment, useState } from "react";
import {
  Dialog,
  Menu,
  Transition,
  DialogPanel,
  TransitionChild,
  MenuButton,
} from "@headlessui/react";
import { IoHome } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiPackageLight } from "react-icons/pi";
import { SiGooglemessages } from "react-icons/si";
import { SiSalesforce } from "react-icons/si";
import { MdCardMembership } from "react-icons/md";
import { CiSettings, CiSearch, CiUser } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { RiMenu2Line, RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import Image from "next/image";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: IoHome, current: true },
  {
    name: "Products",
    href: "/products",
    icon: PiPackageLight,
    current: false,
  },
  {
    name: "Orders",
    href: "/orders",
    icon: SiSalesforce,
    current: false,
  },
  {
    name: "Messages",
    href: "/messages",
    icon: SiGooglemessages,
    current: false,
  },
  {
    name: "Membership",
    href: "/membership",
    icon: MdCardMembership,
    current: false,
  },
  {
    name: "Notifications",
    href: "",
    icon: IoMdNotificationsOutline,
    current: false,
  },
  { name: "Settings", href: "#", icon: CiSettings, current: false },
  { name: "Log out", href: "#", icon: MdLogout, current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <div className="bg-[#F6F7FA] min-h-[100vh]">
        <Transition show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <TransitionChild
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-slate-300" />
            </TransitionChild>

            <div className="fixed inset-0 flex">
              <TransitionChild
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <TransitionChild
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <RiMenu3Fill className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </TransitionChild>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <Image
                        src={"/procurement-logo.svg"}
                        height={50}
                        width={50}
                        alt="Procurement Logo"
                        className="h-8 w-auto"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <motion.li
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                key={item.name}
                              >
                                <a
                                  href={item.href}
                                  className={classNames(
                                    pathName === item.href
                                      ? "bg-primary text-white"
                                      : "text-[#B1B1B1] hover:text-white hover:bg-primary",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 my-2 font-semibold"
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      pathName === item.href
                                        ? "text-white"
                                        : "text-[#B1B1B1] group-hover:text-white",
                                      "h-6 w-6 shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </motion.li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </Dialog>
        </Transition>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <Image
                src="/procurement-logo.svg"
                height={50}
                width={50}
                alt="Procurement Logo"
                className="h-10 w-auto"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <motion.li
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        key={item.name}
                      >
                        <a
                          href={item.href}
                          className={classNames(
                            pathName === item.href
                              ? "bg-primary text-white"
                              : "text-[#B1B1B1] hover:text-white hover:bg-primary",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 my-2 font-semibold"
                          )}
                        >
                          <item.icon
                            className={classNames(
                              pathName === item.href
                                ? "text-white"
                                : "text-[#B1B1B1] group-hover:text-white",
                              "h-6 w-6 shrink-0"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center sha gap-x-4 px-4 lg:px-8">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <RiMenu2Line className="h-6 w-6" aria-hidden="true" />
            </button>

            <div className="flex bg-white h-16 m-1 p-2 mt-3 rounded-lg flex-1 gap-x-4 self-stretch lg:gap-x-6 shadow-lg ">
              <form
                className="relative flex flex-1 h-10 "
                action="#"
                method="GET"
              >
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <CiSearch
                  className="pointer-events-none absolute ml-3 inset-y-0 left-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
                <input
                  id="search-field"
                  className="block h-full w-4/5 bg-[#EFEFEF] rounded-md border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                  placeholder="Search"
                  type="search"
                  name="search"
                />
              </form>
              <div className="flex items-center gap-x-4 lg:gap-x-6">
                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-[#828282] hover:text-[#828282]"
                >
                  <span className="sr-only">View Home</span>
                  <IoHome className="h-6 w-6 " aria-hidden="true" />
                </button>

                <button
                  type="button"
                  className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">View notifications</span>
                  <IoMdNotificationsOutline
                    className="h-6 w-6"
                    aria-hidden="true"
                  />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative">
                  <MenuButton className="-m-1.5 flex items-center p-1.5">
                    <span className="sr-only">Open user menu</span>
                    <CiUser
                      className="h-10 w-10 p-2 rounded-full  bg-[#D9D9D9] text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="hidden lg:flex lg:items-center">
                      <span
                        className="ml-4 text-sm font-semibold leading-6 text-gray-900"
                        aria-hidden="true"
                      >
                        Best Store
                      </span>
                    </span>
                  </MenuButton>
                </Menu>
              </div>
            </div>
          </div>

          <main className="py-10">
            <div className="px-4 sm:px-6 lg:px-8 ">{children}</div>
          </main>
        </div>
      </div>
    </>
  );
}
