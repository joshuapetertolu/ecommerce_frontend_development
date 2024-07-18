"use client";

import React from "react";
import ProcurmentInputField from "@/components/Inputs/ProcurmentInputField";
import { Formik } from "formik";
import * as Yup from "yup";
import OrdersTable from "@/components/tables/OrdersTable";

function Orders() {
  return (
    <div>
      <div>
        <h1 className="my-5 font-bold text-2xl">Orders</h1>
      </div>
      <section className="bg-white rounded-lg p-5">
        <Formik
          initialValues={{
            search: "",
            from: "",
            to: "",
            minPrice: "",
            maxPrice: "",
          }}
          validationSchema={Yup.object().shape({
            search: Yup.string().required("Search is required"),
            from: Yup.string().required("From is required"),
            to: Yup.string().required("To is required"),
            minPrice: Yup.string().required("Min Price is required"),
            maxPrice: Yup.string().required("Max Price is required"),
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
              <div className="grid w-full lg:grid-cols-5 md:grid-cols-3 md:gap-4">
                <ProcurmentInputField
                  label=""
                  placeholder="Search"
                  type="text"
                  name="from"
                  id="from"
                  value={values.from}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.from}
                  touched={touched.from}
                />
                <ProcurmentInputField
                  label=""
                  placeholder="From"
                  type="date"
                  name="from"
                  id="from"
                  value={values.from}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.from}
                  touched={touched.from}
                />

                <ProcurmentInputField
                  label=""
                  placeholder="To"
                  type="date"
                  name="to"
                  id="to"
                  value={values.to}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.to}
                  touched={touched.to}
                />
                <ProcurmentInputField
                  label=""
                  placeholder="Min Price"
                  type="text"
                  name="minPrice"
                  id="minPrice"
                  value={values.minPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.minPrice}
                  touched={touched.minPrice}
                />
                <ProcurmentInputField
                  label=""
                  placeholder="Max Price"
                  type="text"
                  name="maxPrice"
                  id="maxPrice"
                  value={values.maxPrice}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.maxPrice}
                  touched={touched.maxPrice}
                />
              </div>

              <div className="flex space-x-10">
                <button
                  type="submit"
                  className="bg-[#1B9347] text-white rounded-md py-2 px-10 mt-4"
                >
                  Search
                </button>

                <button
                  type="submit"
                  className="text-[#1B9347] border border-[#1B9347] rounded-md py-2 px-10 mt-4"
                >
                  Clear
                </button>
              </div>
            </form>
          )}
        </Formik>
      </section>

      <section className="bg-white  mt-10 rounded-lg p-5">
        {/* //TABLE STARTS HERE  */}

        <OrdersTable />
      </section>
    </div>
  );
}

export default Orders;
