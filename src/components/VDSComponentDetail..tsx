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
      <div className="pt-4 px-0 text-gray-500">
          <hr className="my-4 border-gray-400"/>
          <h3 className="text-lg font-semibold float-left">Select Version Change</h3>
          <div className="clear-both pt-4 flex justify-between text-3xl text-gray-900 font-semibold space-x-4 my-4">
              <div className="flex flex-col items-center">
                  <label className="px-3 flex flex-row items-center space-x-2">
                      <input
                          type="radio"
                          name="version"
                          className="form-radio h-3 w-3"
                          id="major"
                          onClick={() => handleRadioClick("Major")}
                      />
                      <div
                          className="border p-4 rounded-lg border-2 cursor-pointer px-6 py-2 rounded-full bg-black text-xl text-white">
                          Major
                      </div>
                  </label>
                  <span className="ml-4 text-xs text-gray-600">recommended</span>
              </div>
              <div className="flex flex-col items-center">
                  <label className="px-3 flex flex-row items-center space-x-2">
                      <input
                          type="radio"
                          name="version"
                          className="form-radio h-3 w-3"
                          id="minor"
                          onClick={() => handleRadioClick("Minor")}
                      />
                      <div
                          className="border p-4 rounded-lg border-2 cursor-pointer px-6 py-2 rounded-full bg-gray-300 text-xl text-white">
                          Minor
                      </div>
                  </label>
              </div>
              <div className="flex flex-col items-center">
                  <label className="px-3 flex flex-row items-center space-x-2">
                      <input
                          type="radio"
                          name="version"
                          className="form-radio h-3 w-3"
                          id="patch"
                          onClick={() => handleRadioClick("Patch")}
                      />
                      <div
                          className="border p-4 rounded-lg border-2 cursor-pointer px-6 py-2 rounded-full bg-gray-300 text-xl text-white">
                          Patch
                      </div>
                  </label>
              </div>
          </div>
          <p className="text-sm mb-2 text-gray-600 float-left">Top Changes Affecting Version Recommendation</p>
          <ul className="text-lg mt-2 space-y-2 clear-both">
              <li className="flex flex-row bg-gray-100 p-2 rounded">
                  <div className="text-black text-left text-3xl px-3 pt-2.5">•</div>
                  <div className="text-black text-left">The color has changed, certain text may no longer be legible on this background</div>
              </li>
              <li className="flex flex-row bg-gray-100 p-2 rounded">
                  <div className="text-black text-left text-3xl px-3 pt-2.5">•</div>
                  <div className="text-black text-left">The border radius has changed, this may do something that
                      looks bad somewhere
                  </div>
              </li>
              <li className="flex flex-row bg-gray-100 p-2 rounded">
                  <div className="text-black text-left text-3xl px-3 pt-2.5">•</div>
                  <div className="text-black text-left">The drop shadow was added, this may produce strange effects on
                      some designs
                  </div>
              </li>
          </ul>
          <div className="float-right flex flex-row my-4 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 122.88 122.88" className="w-5 h-5 mb-2">
              <path
                  d="M60.54,34.07A7.65,7.65,0,0,1,49.72,23.25l13-12.95a35.38,35.38,0,0,1,49.91,0l.07.08a35.37,35.37,0,0,1-.07,49.83l-13,12.95A7.65,7.65,0,0,1,88.81,62.34l13-13a20.08,20.08,0,0,0,0-28.23l-.11-.11a20.08,20.08,0,0,0-28.2.07l-12.95,13Zm14,3.16A7.65,7.65,0,0,1,85.31,48.05L48.05,85.31A7.65,7.65,0,0,1,37.23,74.5L74.5,37.23ZM62.1,89.05A7.65,7.65,0,0,1,72.91,99.87l-12.7,12.71a35.37,35.37,0,0,1-49.76.14l-.28-.27a35.38,35.38,0,0,1,.13-49.78L23,50A7.65,7.65,0,1,1,33.83,60.78L21.12,73.49a20.09,20.09,0,0,0,0,28.25l0,0a20.07,20.07,0,0,0,28.27,0L62.1,89.05Z"/>
          </svg>
          <a href="#"
             className="ml-2 text-blue-600 font-bold text-lg block focus:outline-none focus:ring-2 focus:ring-blue-400"
                 onClick={(e) => {
                     e.preventDefault(); // Prevent default anchor behavior
                     console.log("See full report Link clicked!"); // Replace with actual navigation logic
                 }}
                 aria-label="View detailed report"
              >
                  See full report
              </a>
          </div>
          <p className="clear-both text-sm text-gray-500 mt-2">Uses AI analysis, and may have some inaccuracies.</p>
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

    const {name, icon, status, componentSignals} = componentInfo;

    return (
        <div className="bg-white w-full">

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