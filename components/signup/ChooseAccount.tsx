"use client";

import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";

function ChooseAccount() {
  return (
    <div className="flex justify-center items-center flex-col flex-1 mt-20 border border-white p-5 md:p-20 rounded-xl shadow-lg">
      <div className="md:w-[600px] w-full justify-center items-center text-center">
        <h2 className="text-2xl font-bold font-dmSans text-black">
          Create an account{" "}
        </h2>
        <p className="text-sm text-grayLight mt-3 mb-10">
          ChooseAccount to procurenet to get started{" "}
        </p>

        <Formik
          initialValues={{
            email: "",
            businessName: "",
            firstName: "",
            lastName: "",
            state: "",
            city: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object().shape({})}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex cursor-pointer flex-col md:space-x-5 space-y-5 md:space-y-0 md:flex-row md:gap-5">
                <div className="flex justify-between items-center px-10 py-3 font-extrabold border rounded-md bg-[#F8E9FF] text-[#8959A0] w-full">
                  <Image
                    width={20}
                    height={20}
                    src="/images/restaurant.svg"
                    alt=""
                  />
                  <p> I am a buyer</p>
                </div>

                <div className="flex cursor-pointer justify-between items-center px-10 py-3 font-extrabold border rounded-md bg-[#FFEEEE] text-[#B58585] w-full">
                  <Image
                    width={20}
                    height={20}
                    src="/images/seller.svg"
                    alt=""
                  />
                  <p> I am a supplier</p>
                </div>
              </div>

              <p className="mt-20 text-sm">Already have an account?</p>
              <button
                type="submit"
                className="border-primary border-2 text-primary w-full py-2 rounded-md mt-5"
              >
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ChooseAccount;
