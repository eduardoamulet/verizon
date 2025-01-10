import React from "react";

interface VDSComponentContainerHeaderProps {
  title: string;
}

const VDSComponentContainerHeader: React.FC<VDSComponentContainerHeaderProps> = ({ title }) => (
  <div className="flex justify-items-start">
    <span className="text-2xl text-gray-500 font-semibold flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 mr-1">
        <path d="M2 9h4v7H2V9zM7 5h4v11H7V5zM12 1h4v15h-4V1z" />
      </svg>
    </span>
    <h2 className="text-xl text-black ml-3">{title}</h2>
  </div>
);

export default VDSComponentContainerHeader;