import React from "react";

import { VDSComponentSignal, VDSComponentInfo} from "../models/breadthSignals";

interface VDSComponentDetailProps {
  componentInfo: VDSComponentInfo;
  onGoBack: () => void;
}

const Card: React.FC<VDSComponentSignal> = ({
  title,
  partialRatio1,
  totalRatio1,
  unitRatio1,
  partialRatio2,
  totalRatio2,
  unitRatio2,
  icon,
}) => {
  const ratioText1 = `${partialRatio1}${unitRatio1}/${totalRatio1}${unitRatio1}`;
  const ratioText2 = `${partialRatio2}${unitRatio2}/${totalRatio2}`;

  return (
    <div className={`flex flex-col items-center border p-4 rounded-lg border-2 ${icon?.color || "text-gray-900"}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 mb-2">
        <path d={icon?.path} />
      </svg>
      <span className="text-sm font-bold text-gray-500">{title}</span>
      <span className="text-lg text-gray-500">{ratioText1}</span>
      <span className="text-lg text-gray-500">{ratioText2}</span>
    </div>
  );
};

const VersionSelector: React.FC = () => {
  const handleRadioClick = (versionType: string) => {
    console.log(`${versionType} button clicked`);
  };

  return (
    <div className="p-4 text-gray-500">
      <h3 className="text-lg font-semibold">Select Version Change</h3>
      <div className="text-3xl text-gray-900 font-semibold flex justify-center space-x-4 my-4">
        <label className="flex flex-col items-center space-x-2">
          <input
            type="radio"
            name="version"
            className="form-radio h-3 w-3"
            id="major"
            onClick={() => handleRadioClick("Major")}
          />
          <div className="border p-4 rounded-lg border-2 cursor-pointer px-3 py-1 rounded-full bg-black text-xl text-white">
            Major
          </div>
          <span className="text-xs text-gray-600">recommended</span>
        </label>
        <label className="flex flex-col items-center space-x-2">
          <input
            type="radio"
            name="version"
            className="form-radio h-3 w-3"
            id="minor"
            onClick={() => handleRadioClick("Minor")}
          />
          <div className="border p-4 rounded-lg border-2 cursor-pointer px-3 py-1 rounded-full bg-gray-300 text-xl text-white">
            Minor
          </div>
        </label>
        <label className="flex flex-col items-center space-x-2">
          <input
            type="radio"
            name="version"
            className="form-radio h-3 w-3"
            id="patch"
            onClick={() => handleRadioClick("Patch")}
          />
          <div className="border p-4 rounded-lg border-2 cursor-pointer px-3 py-1 rounded-full bg-gray-300 text-xl text-white">
            Patch
          </div>
        </label>
      </div>
      <p className="text-sm text-gray-600">Top Changes Affecting Version Recommendation</p>
      <ul className="text-lg mt-2 space-y-2">
        <li className="bg-gray-100 p-2 rounded">
          <span className="text-black">•</span> The color has changed, certain text may no longer be legible on this
          background
        </li>
        <li className="bg-gray-100 p-2 rounded">
          <span className="text-black">•</span> The border radius has changed, this may do something that looks bad
          somewhere
        </li>
        <li className="bg-gray-100 p-2 rounded">
          <span className="text-black">•</span> The drop shadow was added, this may produce strange effects on some
          designs
        </li>
      </ul>
      <a
        href="#"
        className="text-blue-600 underline text-sm mt-4 block focus:outline-none focus:ring-2 focus:ring-blue-400"
        onClick={(e) => {
          e.preventDefault(); // Prevent default anchor behavior
          console.log("See full report Link clicked!"); // Replace with actual navigation logic
        }}
        aria-label="View detailed report"
      >
        See full report
      </a>
      <p className="text-sm text-gray-500 mt-2">Uses AI analysis, and may have some inaccuracies.</p>
    </div>
  );
};


  const VDSComponentDetail: React.FC<VDSComponentDetailProps> = ({
    componentInfo,
    onGoBack,
  }) => {
   
  if (!componentInfo) {
     throw new Error("componentInfo is undefined");
  }

  const { name, icon, status, componentSignals } = componentInfo;

  return (
    <div className="bg-white w-full max-w-md">

      {/* link to gp back to VDSComponentMain*/}
      <h3
        className="text-xl text-gray-500 font-bold mb-2 font-semibold mb-2 flex justify-left cursor-pointer"
        onClick={onGoBack}
      >
        &lt; VDS Core Changes  
      </h3>

      <div className="py-2 flex justify-between items-center">
        <h2 className="text-xl text-gray-900 font-semibold">{name}</h2>
        <span className={`text-xl ${icon?.color || "text-gray-900"} font-semibold flex items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 mr-1">
            <path d={icon?.path || ""} />
          </svg>
          {status}
        </span>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-4">
      {componentSignals?.map((componentSignal, index) => (
        <Card key={index} {...componentSignal} />
       ))}
      </div>
      <VersionSelector />
    </div>
  );
};

export default VDSComponentDetail;