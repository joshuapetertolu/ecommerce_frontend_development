import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

interface ProcurementProductUpload {
  name: string;
  label: string;
  children: any;
  required?: boolean;
  disabled?: boolean;
}

const fileTypes = ["JPG", "PNG", "JPEG", "GIF"];

function ProcurementProductImageUpload({
  name,
  required,
  label,
  children,
  disabled,
}: ProcurementProductUpload) {
  const [file, setFile] = useState(null);
  const handleChange = (file: any) => {
    setFile(file);
  };
  return (
    <div>
      <label
        htmlFor={name}
        className="flex space-x-2 justify-start items-start font-bold font-dmSans leading-6 text-black"
      >
        {required && <span className="text-red-600 mr-1">*</span>}
        {label}
      </label>

      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        children={children}
        disabled={disabled}
      />
    </div>
  );
}

export default ProcurementProductImageUpload;
