import React from "react";

interface ProcurmentInputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  error: string | undefined | null;
  touched: boolean | undefined | null;
  name: string;
  id: string;
  required?: boolean;
}

function ProcurmentInputField({
  placeholder,
  id,
  name,
  touched,
  label,
  onBlur,
  onChange,
  type,
  error,
  required,
}: ProcurmentInputFieldProps) {
  return (
    <div className="flex flex-col w-full my-4">
      <div>
        <label
          htmlFor={name}
          className="flex space-x-2 justify-start items-start font-bold font-dmSans leading-6 text-black"
        >
          {required && <span className="text-red-600 mr-1">*</span>} {label}
        </label>
        <input
          type={type}
          name={name}
          id={id}
          className="block w-full rounded-md py-2 text-gray-900 shadow-sm placeholder:text-[#B1B1B1] border border-[#B1B1B1] focus:border-none focus:border-0 sm:text-sm sm:leading-6"
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          onWheel={() => {
            return false;
          }}
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

export default ProcurmentInputField;
