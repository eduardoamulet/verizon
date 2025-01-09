import React from "react";

interface VDSComponentContainerProps {
  childComponent: React.ReactNode;
}

const VDSComponentContainer: React.FC<VDSComponentContainerProps> = ({ childComponent }) => {
  const bottonIconSvgPaths = [
    "M10 14L4 20M4 20H10M4 20V14M14 10L20 4M20 4H14M20 4V10",
    "M12 12L15 12M12 12L12 9M12 1C6.48 1 2 5.48 2 11C2 16.52 6.48 21 12 21C17.52 21 22 16.52 22 11C22 5.48 17.52 1 12 1Z",
    "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73zM16.5 9.4L7.55 4.24",
    "M3 4h18v18H3V4zM16 2v4M8 2v4M3 10h18",
  ];

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-full max-w-md">
      <div className="flex justify-between items-center">
        <span className="text-2xl text-gray-500 font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 mr-1">
            <path d="M2 9h4v7H2V9zM7 5h4v11H7V5zM12 1h4v15h-4V1z" />
          </svg>
        </span>
        <h2 className="text-xl text-gray-900 font-semibold">Signal • Breaking Changes</h2>
      </div>
      <hr className="pt-2 mt-4" />

      {/* Render the passed child component or fallback content */}
      <div>
        {childComponent ? (
          childComponent
        ) : (
          <p className="text-gray-600 text-center">No component provided.</p>
        )}
      </div>

      <hr className="pt-2 mt-4" />
      <div className="flex justify-center mt-3 space-x-6 text-xl text-gray-900 font-semibold">
        {bottonIconSvgPaths.map((path, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-5 h-5 hover:text-blue-500 hover:shadow-4xl transition-all duration-300"
          >
            <path d={path} />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default VDSComponentContainer;
