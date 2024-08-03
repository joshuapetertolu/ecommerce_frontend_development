"use client";

import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import ChooseAccount from "@/components/signup/ChooseAccount";
import BuyerSignup from "@/components/signup/BuyerSignUp";
import SupplierSignup from "@/components/signup/SupplierSignup";

function Signup() {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && <ChooseAccount setStep={setStep} />}
      {step === 2 && <BuyerSignup />}
      {step === 3 && <SupplierSignup />}
    </div>
  );
}

export default Signup;
