import React from "react";

interface VDSComponentVersionProps {
  id: string;
  label: string;
  isSelected: boolean;
  isRecommended: boolean;
  onClick: () => void;
}

const VDSComponentVersion: React.FC<VDSComponentVersionProps> = ({
  id,
  label,
  isSelected,
  isRecommended,
  onClick,
}) => (
  <div className="flex flex-col items-center">
    <label className="px-3 flex flex-row items-center space-x-2">
      <input
        type="radio"
        name="version"
        className="form-radio h-3 w-3"
        id={id}
        checked={isSelected}
        onChange={onClick}
      />
      <div
        className={`border p-4 rounded-lg border-2 cursor-pointer px-6 py-2 rounded-full text-xl text-white ${
          isSelected ? "bg-black" : "bg-gray-300"
        }`}
      >
        {label}
      </div>
    </label>
    {isRecommended && (
      <span className="ml-4 text-xs text-gray-600">recommended</span>
    )}
  </div>
);

export default VDSComponentVersion;