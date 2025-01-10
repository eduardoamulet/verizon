import React from "react";

interface VDSComponentContainerFooterProps {
  bottonIconSvgPaths: string[];
  onIconClick: (index: number) => void;
}

const VDSComponentContainerFooter: React.FC<VDSComponentContainerFooterProps> = ({ bottonIconSvgPaths, onIconClick }) => (
  <div className="flex justify-center mt-3 space-x-6 text-xl text-gray-500 font-semibold">
    {bottonIconSvgPaths.map((path, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        className="w-8 h-8 hover:text-blue-500 hover:shadow-4xl transition-all duration-300 cursor-pointer"
        onClick={() => onIconClick(index)}
      >
        <path d={path} />
      </svg>
    ))}
  </div>
);

export default VDSComponentContainerFooter;
