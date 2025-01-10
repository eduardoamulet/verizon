import React from "react";

interface VDSComponentFinalizationSectionProps {
    signalVersion: string
}

// Component for the "Finalization" section
const VDSComponentFinalizationSection: React.FC<VDSComponentFinalizationSectionProps> = ({ signalVersion }) => (
  <div className="mt-8 text-xl pt-4 border-t border-gray-400">
    <p className="text-center text-black mb-2">Published Changes</p>
    <p className="text-center text-black mb-2">Finalize Version Number</p>
    <p className="text-center text-black mb-2">
      Major Change: <span className="font-semibold ">{signalVersion}</span>
    </p>
    <p className="text-center text-black mb-2">One-liner description of the package changes.</p>
    <div className="flex justify-center space-x-4 my-4 mt-4">
      <button className="px-4 py-2 text-black bg-white border border-gray-400 rounded-lg text-sm">
        Update
      </button>
      <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Publish</button>
    </div>
  </div>
);

export default VDSComponentFinalizationSection;