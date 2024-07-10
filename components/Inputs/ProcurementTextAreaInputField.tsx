import React from "react";

interface ProcurmentTextAreaInputFieldProps {
  label: string;
  placeholder: string;
  onChange: any;
  onBlur: any;
  value: string;
  error: string | undefined | null;
  touched: boolean | undefined | null;
  name: string;
  id: string;
  required?: boolean;
  row: number;
  maxLength?: number;
}

function ProcurementTextAreaInputField({
  placeholder,
  id,
  name,
  touched,
  label,
  onBlur,
  onChange,
  error,
  row,
  required,
  maxLength,
}: ProcurmentTextAreaInputFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="flex space-x-2 justify-start items-start font-bold font-dmSans leading-6 text-black"
      >
        {required && <span className="text-red-600 mr-1">*</span>} {label}
      </label>
      <div className="mt-2">
        <textarea
          rows={row}
          name={name}
          id={id}
          className="block w-full rounded-md py-2 text-gray-900 shadow-sm placeholder:text-[#B1B1B1] border border-[#B1B1B1] focus:border-none focus:border-0 sm:text-sm sm:leading-6"
          defaultValue={""}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
        />
      </div>

      <div>
        {touched && error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
}

export default ProcurementTextAreaInputField;
