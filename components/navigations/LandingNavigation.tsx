"use client";

import { Fragment, useState } from "react";
import {
  Menu,
  Popover,
  PopoverButton,
  Transition,
  MenuButton,
  PopoverPanel,
  MenuItems,
  MenuItem,
} from "@headlessui/react";
import { IoIosSearch } from "react-icons/io";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaCaretDown } from "react-icons/fa";
import { RiMenu2Line, RiMenu3Fill } from "react-icons/ri";
import Image from "next/image";

function LandingNavigation() {
  const [loggedIn, setLoggedIn] = useState(false);
  const user = {
    name: "Chelsea Hagon",
    email: "chelsea.hagon@example.com",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Calendar", href: "#", current: false },
    { name: "Teams", href: "#", current: false },
    { name: "Directory", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];

  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  const categories = [
    {
      name: "Electronics",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
      imageAlt: "Headphones",
    },
    {
      name: "Books",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
      imageAlt: "Books",
    },
    {
      name: "Home & Garden",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
      imageAlt:
        "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    },
    {
      name: "Beauty",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
      imageAlt:
        "Bottle of perfume on white marble table next to tropical leaf.",
    },
    {
      name: "Jewelry",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-05.jpg",
      imageAlt: "Gold bracelet with emerald and diamond gemstones.",
    },
    {
      name: "Outdoors",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-06.jpg",
      imageAlt: "Patagonia Torres del Paine treck",
    },
    {
      name: "Clothing",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/mega-menu-category-07.jpg",
      imageAlt: "Model",
    },
  ];

  return (
    <Popover
      as="header"
      className={({ open }) =>
        classNames(
          open ? "fixed inset-0 z-40 overflow-y-auto" : "",
          "bg-white shadow-sm lg:static lg:overflow-y-visible"
        )
      }
    >
      {({ open }) => (
        <>
          <div>
            <div className=" flex justify-between items-center">
              <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static">
                <div className="flex flex-shrink-0 items-center">
                  <a href="#">
                    <Image
                      src="/procurement-logo.svg"
                      width={50}
                      height={50}
                      alt="procurement logo"
                      className="block h-8 w-auto"
                    />
                  </a>

                  <div className="ml-10 flex items-center space-x-6 text-sm ">
                    <div className="text-[#6D6B6B] flex items-center ">
                      <span>Categories </span>{" "}
                      <span>
                        <Menu as="div" className="relative ml-5 flex-shrink-0">
                          <div>
                            <MenuButton className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <FaCaretDown className="inline-block h-4 w-4 text-[#6D6B6B] cursor-pointer" />
                            </MenuButton>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {categories.map((item) => (
                                <MenuItem key={item.name}>
                                  {({ active }) => (
                                    <a
                                      href={item.href}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.name}
                                    </a>
                                  )}
                                </MenuItem>
                              ))}
                            </MenuItems>
                          </Transition>
                        </Menu>
                      </span>
                    </div>
                    <p className="">For Suppliers</p>
                  </div>
                </div>
              </div>

              {/* SEARCH STARTS HERE */}
              <div className="md:flex min-w-max hidden  ">
                <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                  <div className="w-full flex  space-x-5">
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
                        placeholder="Search for products"
                        type="search"
                      />
                    </div>
                    <button
                      type="submit"
                      className="hidden lg:inline-flex items-center justify-center px-8 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary focus:outline-none"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                {/* Mobile menu button */}
                <PopoverButton className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 ">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <RiMenu2Line className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <RiMenu3Fill className="block h-6 w-6" aria-hidden="true" />
                  )}
                </PopoverButton>
              </div>
              <div className=" hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                {/* Profile dropdown */}
                <div className="flex items-center lg:ml-8 space-x-4 ">
                  <CiUser
                    className="h-10 w-10 p-2 rounded-full  bg-[#D9D9D9] text-gray-400"
                    aria-hidden="true"
                  />
                  <p className="text-sm text-gray md:block hidden">
                    Login/Register
                  </p>
                </div>
                {loggedIn && (
                  <Menu
                    as="div"
                    className="relative ml-5 flex-shrink-0 hidden md:flex"
                  >
                    <div>
                      <MenuButton className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        />
                      </MenuButton>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <MenuItem key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </MenuItem>
                        ))}
                      </MenuItems>
                    </Transition>
                  </Menu>
                )}
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <PopoverPanel as="nav" className="lg:hidden" aria-label="Global">
            <div className="flex min-w-max   ">
              <div className="flex items-center px-2 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full flex  space-x-5 ">
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
                      className="block rounded-md border-0 bg-[#EFEFEF] py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2= focus:ring-inset focus:ring-[#EFEFEF] sm:text-sm sm:leading-6"
                      placeholder="Search for products"
                      type="search"
                    />
                  </div>
                  <button
                    type="submit"
                    className=" lg:inline-flex items-center justify-center px-8 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-secondary focus:outline-none"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-10  lg:items-center lg:justify-end xl:col-span-4">
              {/* Profile dropdown */}
              <div className="flex items-center lg:ml-8 space-x-4 ">
                <CiUser
                  className="h-10 w-10 p-2 rounded-full  bg-[#D9D9D9] text-gray-400"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray">Login/Register</p>
              </div>
              {loggedIn && (
                <Menu as="div" className="relative ml-5 flex-shrink-0 flex">
                  <div>
                    <MenuButton className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                </Menu>
              )}
            </div>
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
}

export default LandingNavigation;
