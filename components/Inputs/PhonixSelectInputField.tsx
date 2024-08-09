import React from "react";

interface ProcurmentSelectInputFieldProps {
  label: string;
  placeholder: string;
  data: any[];
  onChange: any;
  onBlur: any;
  value: string;
  error: string | undefined | null;
  touched: boolean | undefined | null;
  name: string;
  id: string;
  required?: boolean;
}

export default function PhonixSelectInputField({
  placeholder,
  id,
  name,
  touched,
  label,
  onBlur,
  onChange,
  error,
  required,
  data,
}: ProcurmentSelectInputFieldProps) {
  return (
    <div className="flex flex-col w-full my-2">
      <label
        htmlFor={name}
        className="flex space-x-2 justify-start items-start font-dmSans leading-6 text-black"
      >
        {required && <span className="text-red-600 mr-1">*</span>}
        {label}
      </label>
      <select
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        className="block w-full rounded-md py-2 text-gray-900 shadow-sm placeholder:text-[#B1B1B1] border border-[#B1B1B1] focus:border-none focus:border-0 sm:text-sm sm:leading-6"
      >
        <option className="disabled hidden">{placeholder}</option>
        {data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>

      <div>
        {touched && error && (
          <p className="mt-1 text-xs text-start text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}
