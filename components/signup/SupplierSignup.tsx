"use client";

import React, { useEffect, useState } from "react";
import ProcurmentInputField from "@/components/Inputs/ProcurmentInputField";
import ProcurementSelectInputField from "@/components/Inputs/ProcurementSelectInputField";
import { Formik } from "formik";
import * as Yup from "yup";
import { states } from "@/utils/constants/constants";

function SupplierSignup() {
  return (
    <div className="flex justify-center items-center flex-col flex-1 mt-20 border border-white p-5 md:p-20 rounded-xl shadow-lg">
      <div className="md:w-[600px] w-full justify-center items-center text-center">
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
            <form
              onSubmit={handleSubmit}
              className="flex justify-start items-start flex-col w-full"
            >
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
                label="Phone "
                placeholder="Enter your phone number"
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
              <ProcurementSelectInputField
                label="State"
                data={states}
                placeholder="Select State"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                required
              />

              <ProcurmentInputField
                label="City"
                placeholder="Enter your phone number"
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
                label="First Name"
                placeholder="Enter your first name"
                id="firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.firstName}
                touched={touched.firstName}
                required
              />
              <ProcurmentInputField
                label="Last Name"
                placeholder="Enter your last name"
                id="lastName"
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.lastName}
                touched={touched.lastName}
                required
              />

              <ProcurmentInputField
                label=" NIN"
                placeholder="Tell us about your business"
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
                label="Is your business CAC registered "
                data={["Yes", "No"]}
                placeholder="Select"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
                required
              />

              <ProcurementSelectInputField
                label="Select product categories you are interested in"
                data={states}
                placeholder="Select"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
                touched={touched.email}
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

export default SupplierSignup;
