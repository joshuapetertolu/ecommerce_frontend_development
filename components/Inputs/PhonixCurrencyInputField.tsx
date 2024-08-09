import React from "react";
import CurrencyInput from "react-currency-input-field";

interface PhonixCurrencyInputFieldProps {
  label: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error: string | undefined | null;
  touched: boolean | undefined | null;
  name: string;
  id: string;
  required?: boolean;
  defaultalue?: number;
}

function PhonixCurrencyInputField({
  placeholder,
  id,
  name,
  touched,
  label,
  onBlur,
  onChange,
  error,
  required,
  defaultalue,
}: PhonixCurrencyInputFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="flex space-x-2 justify-start items-start font-bold font-dmSans leading-6 text-black"
      >
        {required && <span className="text-red-600 mr-1">*</span>}
        {label}
      </label>

      <CurrencyInput
        id={id}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultalue}
        decimalsLimit={2}
        prefix="₦"
        intlConfig={{ locale: "en-US", currency: "NGN" }}
        onValueChange={(value, name, values) =>
          console.log(value, name, values)
        }
        className="block w-full rounded-md py-2 text-gray-900 shadow-sm placeholder:text-[#B1B1B1] border border-[#B1B1B1] focus:border-none focus:border-0 sm:text-sm sm:leading-6"
      />

      <div>
        {touched && error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}

export default PhonixCurrencyInputField;
