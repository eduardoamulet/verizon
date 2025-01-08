import React, { useEffect, useState } from 'react';
import fetchBreadthSignalsData from '../services/breadthSignalsService';

// Utility to get card icon SVG path and color based on signal status
const getCardIconInfo = (signalStatus) => {
  const iconsInfo = {
    critical:   { path: "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z", color: "text-red-600" },
    widespread: { path: "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2zM14 3V3H13V15H14V3zM15 2v14h-3V2z", color: "text-red-900" },
    moderate:   { path: "M2 10h3v6H2V10zM7 6h3v10H7V6zM8 7V15H9V7zM12 2M14 3V3H13V15H14V3zM15 2v14h-3V2z", color: "text-gray-600" },
    minimal:    { path: "M2 10h3v6H2V10zM4 11H3V15H4zM7 6h3v10H7V6zM8 7V15H9V7zM12 2M14 3V3H13V15H14V3zM15 2v14h-3V2z", color: "text-gray-400" },
    unknown:    { path: "", color: "text-gray-500" },
  };

  signalStatus = signalStatus?.toLowerCase()?.trim();

  const result = iconsInfo[signalStatus] || iconsInfo.unknown;

  return result;
};

const Card = ({ card }) => {
  const { title, partial, total, unit, icon } = card;
  const ratioText = `${partial}${unit}/${total}${unit}`;

  return (
    <div className={`flex flex-col items-center border p-4 rounded-lg border-2 ${icon?.color || 'text-gray-900'}`}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 mb-2">
        <path d={icon?.path} />
      </svg>
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-lg font-bold text-gray-500">{ratioText}</span>
    </div>
  );
};

const BottonIconBar = ({ paths }) => {
  return (
    <div className="flex justify-center mt-3 space-x-6">
      {paths.map((path, index) => (
        <span key={index} className="text-2xl text-gray-500 font-semibold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-5 h-5 hover:text-blue-500 hover:shadow-4xl transition-all duration-300"
          >
            <path d={path} />
          </svg>
        </span>
      ))}
    </div>
  );
};

const VersionSelector = () => (
  <div className="p-4 text-gray-500">
    <h3 className="text-lg font-semibold">Select Version Change</h3>
    <div className="text-3xl text-gray-900 font-semibold flex justify-center space-x-4 my-4">
     <label className="flex flex-col items-center space-x-2">
        <input type="radio" name="version" className="form-radio  h-3 w-3" id="major" />
        <div className="border p-4 rounded-lg border-2 cursor-pointer px-3 py-1 rounded-full bg-black text-xl text-white" htmlFor="major">Major</div>
        <span className="text-xs text-gray-600">recommended</span>
      </label>
      <label className="flex flex-col items-center space-x-2">
        <input type="radio" name="version" className="form-radio  h-3 w-3" id="minor" />
        <div className="border p-4 rounded-lg border-2 cursor-pointer px-3 py-1 rounded-full bg-gray-300 text-xl text-white" htmlFor="major">Minor</div>
        <span className="text-xs text-gray-600"></span>
      </label>
      <label className="flex flex-col items-center space-x-2">
        <input type="radio" name="version" className="form-radio  h-3 w-3" id="patch" />
        <div className="border p-4 rounded-lg border-2 cursor-pointer px-3 py-1 rounded-full bg-gray-300 text-xl text-white" htmlFor="major">Patch</div>
        <span className="text-xs text-gray-600"></span>
      </label>
    </div>
    <p className="text-sm text-gray-600">Top Changes Affecting Version Recommendation</p>
    <ul className="text-lg mt-2 space-y-2">
      <li className="bg-gray-100 p-2 rounded">
        <span className="text-black">•</span> The color has changed, certain text may no longer be legible on this background
      </li>
      <li className="bg-gray-100 p-2 rounded">
        <span className="text-black">•</span> The border radius has changed, this may do something that looks bad somewhere
      </li>
      <li className="bg-gray-100 p-2 rounded">
        <span className="text-black">•</span> The drop shadow was added, this may produce strange effects on some designs
      </li>
    </ul>
    <a href="#" className="text-blue-600 underline text-sm mt-4 block">See full report</a>
    <p className="text-xs text-gray-500 mt-2">Uses AI analysis, and may have some inaccuracies.</p>
  </div>
);

const VDSComponent = () => {
  const [breadthSignalsData, setBreadthSignalsData] = useState({});

  useEffect( () => {

    // Fetch and process the breadth signals data
    const fetchAndProcessData = async () => {
      try {
        // Fetch raw data from the service
        const data = await fetchBreadthSignalsData();
  
        console.log('fetchAndProcessData data');
        console.log(data);
        // Map the signals to include icon information
        const updatedSignals = data.signals.map((signal) => ({
          ...signal,
          icon: getCardIconInfo(signal.status),
        }));
  
        // Update the state with processed data
        setBreadthSignalsData({
          ...data,
          signals: updatedSignals,
          generalSignalIcon: getCardIconInfo(data.generalSignal),
        });
      } catch (error) {
        console.error("Error fetching breadth signals data:", error);
      }
    };

      fetchAndProcessData();
  }, []);

  const { componentName, generalSignalIcon, generalSignal, signals } = breadthSignalsData;

  const bottonIconSvgPaths = [
    // Expand Icon
    "M10 14L4 20M4 20H10M4 20V14M14 10L20 4M20 4H14M20 4V10",
    // Clock Icon
    "M12 12L15 12M12 12L12 9M12 1C6.48 1 2 5.48 2 11C2 16.52 6.48 21 12 21C17.52 21 22 16.52 22 11C22 5.48 17.52 1 12 1Z",
    // Cube Icon
    "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73zM16.5 9.4L7.55 4.24",
    // Calendar Icon
    "M3 4h18v18H3V4zM16 2v4M8 2v4M3 10h18",
  ];

  const SIGNAL_SVG_ICON_PATH = "M2 9h4v7H2V9zM7 5h4v11H7V5zM12 1h4v15h-4V1z";

  return (
    <div className="bg-white border rounded-lg shadow-md p-4 w-full max-w-md">

      <div className="flex justify-between items-center">
        <span className="text-2xl text-gray-500 font-semibold flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 mr-1">
            <path d={SIGNAL_SVG_ICON_PATH} />
          </svg>
        </span>
        <h2 className="text-xl text-gray-900 font-semibold">Signal • Breaking Changes</h2>
      </div>

      <hr className="pt-2 mt-4"/>

      <div className="text-gray-900 flex items-center px-4 py-2">
      <span className="text-xl  mr-2 cursor-pointer">
         &lt;
      </span>
      <h1 className="text-xl font-semibold m-0">VDSCore Changes</h1>
      </div>

      <div className="py-2 flex justify-between items-center">
        <h2 className="text-xl text-gray-900 font-semibold">{componentName}</h2>
        <span className={`text-xl ${generalSignalIcon?.color || 'text-gray-900'} font-semibold flex items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5 mr-1">
            <path d={generalSignalIcon?.path || ''} />
          </svg>
          {generalSignal}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4">
        {signals?.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
      <VersionSelector />
      <hr className="pt-2 mt-4"/>
      <BottonIconBar paths={bottonIconSvgPaths} />
    </div>
  );
};

export default VDSComponent;
