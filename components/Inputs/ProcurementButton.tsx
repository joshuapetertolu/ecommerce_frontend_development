import React from "react";

interface ProcurementButtonProps {
  label: string;
  onClick: () => void;
  type: "submit" | "button";
  btnColor?: string;
}
function ProcurementButton({
  label,
  type,
  onClick,
  btnColor,
}: ProcurementButtonProps) {
  return (
    <div>
      <button
        onClick={onClick}
        type={type}
        className={`items-center justify-center px-8 py-3 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[${btnColor}] focus:outline-none w-full`}
      >
        {label}
      </button>
    </div>
  );
}

export default ProcurementButton;
