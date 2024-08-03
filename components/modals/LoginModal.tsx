import React from "react";
import ModalLayout from "../layouts/ModalLayout";
import ProcurmentInputField from "../Inputs/ProcurmentInputField";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
interface LoginModalProps {
  show: boolean;
  close: () => void;
}
function LoginModal({ show, close }: LoginModalProps) {
  const { push } = useRouter();
  return (
    <ModalLayout show={show} close={close}>
      <div className="h-[400px] md:p-10">
        <div>
          <p className="font-dmSans text-3xl font-bold text-center">
            Sign in to your account
          </p>
        </div>

        <div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().required("Email is required"),
              password: Yup.string().required("Password is required"),
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
              <form onSubmit={handleSubmit} className="w-full">
                <div>
                  <ProcurmentInputField
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    touched={touched.email}
                    label={"Email or phone"}
                    id={"email"}
                  />
                </div>

                <div>
                  <ProcurmentInputField
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password}
                    touched={touched.password}
                    label={"Password"}
                    id={"password"}
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-primary text-white w-full py-2 rounded-md mt-5"
                  >
                    Log in
                  </button>
                </div>
              </form>
            )}
          </Formik>

          <div className="flex justify-between items-center mt-5">
            <p className="text-center text-gray cursor-pointer">
              Forgot password?
            </p>
            <p
              onClick={() => push("/sign-up")}
              className="text-center text-secondary cursor-pointer "
            >
              Create an Account
            </p>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}

export default LoginModal;
