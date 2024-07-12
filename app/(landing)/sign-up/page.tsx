"use client";

import React, { useEffect, useState } from "react";
import ProcurmentInputField from "@/components/Inputs/ProcurmentInputField";
import ProcurementSelectInputField from "@/components/Inputs/ProcurementSelectInputField";
import { Formik } from "formik";
import * as Yup from "yup";
import { states } from "@/utils/constants/constants";

function Signup() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Prevent rendering on the server
  }

  return (
    <div className="flex justify-center items-center flex-col flex-1 mt-20">
      <div className="md:w-[600px] w-full">
        <h2 className="text-2xl font-bold font-dmSans text-black">Sign Up</h2>
        <p className="text-sm text-grayLight mt-3 mb-10">
          Provide your details to get started
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
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required("Email is required"),
            password: Yup.string()
              .min(6, "Password must be at least 6 characters")
              .required("Password is required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), ""], "Passwords must match")
              .required("Confirm Password is required"),
            businessName: Yup.string().required("Business Name is required"),
            city: Yup.string().required("City is required"),
            state: Yup.string().required("State is required"),
            phoneNumber: Yup.string()
              .required("Phone Number is required")
              .min(11, "Phone number must be 11 digits starting with 0"),
          })}
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
              <ProcurmentInputField
                label="Business Name"
                placeholder="Enter your business name"
                id="businessName"
                name="businessName"
                type="text"
                value={values.businessName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.businessName}
                touched={touched.businessName}
                required
              />
              <ProcurmentInputField
                label="Email"
                placeholder="Enter your email"
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                required
              />
              <ProcurmentInputField
                label="Phone"
                placeholder="Enter your phone number"
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                maxLength={11}
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
                required
              />

              <ProcurementSelectInputField
                label="State"
                placeholder="Select your state"
                id="state"
                name="state"
                value={values.state}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.state}
                touched={touched.state}
                required
                data={states}
              />

              <ProcurmentInputField
                label="City"
                placeholder="Enter your city"
                id="city"
                name="city"
                type="text"
                value={values.city}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.city}
                touched={touched.city}
                required
              />

              <ProcurmentInputField
                label="Password"
                placeholder="Enter your password"
                id="password"
                name="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.password}
                touched={touched.password}
                required
              />
              <ProcurmentInputField
                label="Confirm Password"
                placeholder="Confirm your password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.confirmPassword}
                touched={touched.confirmPassword}
                required
              />

              <div>
                <input type="checkbox" className="mr-5" />
                <span className="text-xs text-grayLight">
                  I have read and agree to Procurement's of Use and Privacy
                  policy .
                </span>
              </div>
              <button
                type="submit"
                className="w-full mt-10 bg-primary py-2 rounded-md text-white font-dmSans font-bold text-lg "
              >
                Create account
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Signup;
