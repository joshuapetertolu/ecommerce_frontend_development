"use client";
import React from "react";
import ProcurmentInputField from "@/components/Inputs/ProcurmentInputField";
import ProcurementSelectInputField from "@/components/Inputs/ProcurementSelectInputField";
import ProcurementCurrencyInputField from "@/components/Inputs/ProcurementCurrencyInputField";
import ProcurementTextAreaInputField from "@/components/Inputs/ProcurementTextAreaInputField";
import ProcurementProductImageUpload from "@/components/Inputs/ProcurementProductImageUpload";
import { Formik } from "formik";
import * as Yup from "yup";
import { FiUpload } from "react-icons/fi";

function AddProduct() {
  return (
    <div>
      <p className="text-2xl font-dmSans font-extrabold my-4">Add product</p>

      <Formik
        initialValues={{
          productName: "",
          productDescription: "",
          productPrice: "",
          productCategory: "",
          productQuantity: "",
          category: "", // This is for the select input
        }}
        validationSchema={Yup.object({
          productName: Yup.string().required("Product name is required"),
          productDescription: Yup.string().required(
            "Product description is required"
          ),
          productPrice: Yup.string().required("Product price is required"),
          productCategory: Yup.string().required(
            "Product category is required"
          ),
          productQuantity: Yup.string().required(
            "Product quantity is required"
          ),
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
          <form className="bg-white p-4 rounded-lg" onSubmit={handleSubmit}>
            <div className="flex md:space-x-10   md:flex-row flex-col justify-start items-start ">
              <div className="md:w-3/5 w-full">
                <ProcurmentInputField
                  label="Product Name"
                  placeholder="Enter product name"
                  type="text"
                  id="productName"
                  name="productName"
                  value={values.productName}
                  error={errors.productName}
                  touched={touched.productName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                />
                <div className="md:grid md:grid-cols-2 md:gap-x-3">
                  <ProcurementSelectInputField
                    label="Category"
                    placeholder="Select product Category"
                    type="text"
                    id="category"
                    name="category"
                    value={values.category}
                    error={errors.category}
                    touched={touched.category}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    data={["United States", "Canada", "Mexico"]}
                    required
                  />
                  <div className="md:mt-0 mt-2">
                    <ProcurementCurrencyInputField
                      label="Price"
                      placeholder="Enter product price"
                      id="productPrice"
                      name="productPrice"
                      value={values.productPrice}
                      error={errors.productPrice}
                      touched={touched.productPrice}
                      required
                      onChange={function (
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                      onBlur={function (
                        e: React.FocusEvent<HTMLInputElement, Element>
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-x-3">
                  <ProcurmentInputField
                    label="Product Brand"
                    placeholder="input product brand"
                    type="text"
                    id="productDescription"
                    name="productDescription"
                    value={values.productDescription}
                    error={errors.productDescription}
                    touched={touched.productDescription}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                  <ProcurmentInputField
                    label="Unit"
                    placeholder="Input unit"
                    type="text"
                    id="productPrice"
                    name="productPrice"
                    value={values.productPrice}
                    error={errors.productPrice}
                    touched={touched.productPrice}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-x-3">
                  <ProcurmentInputField
                    label="Stock Quantity"
                    placeholder="input stock quantity"
                    type="number"
                    id="productDescription"
                    name="productDescription"
                    value={values.productDescription}
                    error={errors.productDescription}
                    touched={touched.productDescription}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                  />
                  <div className="mt-4">
                    <ProcurementCurrencyInputField
                      label="Discount price (N)"
                      placeholder="input discount price"
                      id="productPrice"
                      name="productPrice"
                      value={values.productPrice}
                      error={errors.productPrice}
                      touched={touched.productPrice}
                      onChange={function (
                        e: React.ChangeEvent<HTMLInputElement>
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                      onBlur={function (
                        e: React.FocusEvent<HTMLInputElement, Element>
                      ): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  </div>
                </div>

                <ProcurementTextAreaInputField
                  label="Describe Product "
                  placeholder="Description maximum of 300 letters"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={""}
                  error={undefined}
                  touched={undefined}
                  name={""}
                  id={""}
                  row={10}
                  required
                  maxLength={300}
                />
              </div>
              <div className="md:w-2/5 w-full ">
                <div className="mt-3">
                  <ProcurementProductImageUpload
                    label="Product Image"
                    required
                    name="image"
                    children={
                      <div className="w-full mt-1 h-80 rounded-lg bg-[#F6F6F7] border border-[#BFBFC0]">
                        <div className=" flex flex-1 justify-center items-center mt-32">
                          <FiUpload color="#AAAAAA" size={50} />{" "}
                        </div>
                      </div>
                    }
                  />

                  <div className="grid grid-cols-4 gap-3 mt-10">
                    {[0, 1, 2, 3].map((item: any) => (
                      <ProcurementProductImageUpload
                        label=""
                        name="image"
                        disabled
                        children={
                          <div className="mt-1 h-20 w-20 border-dashed rounded-lg bg-[#F6F6F7] border border-[#BFBFC0]">
                            <div className=" text-[#828282] text-2xl mt-5 flex flex-1 justify-center items-center">
                              +
                            </div>
                          </div>
                        }
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[#808285] mt-5">
                    Images need to be between the dimension of 500x500 or
                    2000x2000. White backgrounds are recommended. No watermark.
                    Maximum image size should be 2MB.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-10 flex justify-end items-end space-x-5">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary"
              >
                Save
              </button>

              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-primary border-primary"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default AddProduct;
