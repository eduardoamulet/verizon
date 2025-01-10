import React from "react";
import Header from "./VDSComponentContainerHeader";
import Footer from "./VDSComponentContainerFooter";

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

  const handleIconClick = (index: number) => {
    console.log(`Button ${index + 1} clicked.`);
  };

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-full max-w-lg">
      <Header title="Signal • Breaking Changes" />
      <hr className="pt-2 mt-4 border-gray-400" />

      {/* Render the passed child component or fallback content */}
      <div>
        {childComponent ? (
          childComponent
        ) : (
          <p className="text-gray-600 text-center">No component provided.</p>
        )}
      </div>

      <hr className="pt-2 mt-2 border-gray-400" />
      <Footer bottonIconSvgPaths={bottonIconSvgPaths} onIconClick={handleIconClick} />
    </div>
  );
};

export default VDSComponentContainer;
