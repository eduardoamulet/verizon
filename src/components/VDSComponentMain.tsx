import React, { useEffect, useState } from "react";
import { fetchVDSCorePackageData } from "../services/breadthSignalsService";
import { VDSCorePackage, VDSComponentInfo } from "../models/breadthSignals";
import VDSComponentDetail from "./VDSComponentDetail.";

const VDSComponentMain: React.FC = () => {
  const [VDSCorePackageData, setVDSCorePackageData] = useState<VDSCorePackage>();
  const [selectedVersion, setSelectedVersion] = useState<VDSComponentInfo | null>(null);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        const data = await fetchVDSCorePackageData();

        if (!data) {
          throw new Error("No VDS Core Package Data found");
        }

        setVDSCorePackageData(data);
      } catch (error) {
        console.error("Error fetching breadth signals data:", error);
      }
    };

    fetchAndProcessData();
  }, []);

  if (!VDSCorePackageData) {
    // Show a loading state while the data is being fetched
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white">
      {/* VDS Core Package version */}
      <div>
        <h3 className="text-gray-500 font-semibold mb-2">VDS Core Package</h3>
        <h4 className="text-gray-500 mb-2">{VDSCorePackageData.versionNumber}</h4>
      </div>

      {/* To Version Section */}
      <div>
        <h3 className="text-gray-500 font-semibold text-lg mb-2 flex justify-left">To Version</h3>
        {VDSCorePackageData.toVersions.map((version) => (
          <div
            key={version.id}
            className="flex items-center justify-between border-b pb-2 mb-2"
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-500">{version.name}</span>
              <span className="text-sm text-gray-500">{version.versionNumber}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-5 h-5 mb-2"
              >
                <path d={version.icon?.path} />
              </svg>
              <span className={`text-lg font-semibold ${version.icon?.color}`}>
                {version.status}
              </span>
              <span className="text-lg text-red-600">{version.recomendedChange}?</span>
            </div>
            <button
              className="px-3 py-1 bg-black text-white rounded-lg text-sm"
              onClick={() => setSelectedVersion(version)} // Set the selected version on button click
            >
              Set Version
            </button>
          </div>
        ))}
      </div>

      {/* Render VDSComponentDetail for the selected version */}
      {selectedVersion && (
        <div className="mt-8">
          <VDSComponentDetail {...selectedVersion} />
        </div>
      )}

      {/* Versioned Changes Section */}
      <div>
        <h3 className="text-gray-500 font-semibold text-lg mb-2 flex justify-left">Versioned Changes</h3>
        {VDSCorePackageData.versionedChanges.map((change) => (
          <div
            key={change.id}
            className="flex items-center justify-between border-b pb-2 mb-2"
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold text-gray-500">{change.name}</span>
              <span className="text-sm text-gray-500">{change.versionNumber}</span>
              <span className={`text-lg font-semibold  ${change.icon?.color}`}>
                {change.status}
              </span>
              <span className="text-lg text-red-600">{change.recomendedChange}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Finalization Section */}
      <div className="mt-4">
        <p className="text-lg text-center text-gray-600 mb-2"> Published Changes </p>
        <p className="text-lg text-center text-gray-600 mb-2"> Finalize Version Number </p>
        <p className="text-lg text-center text-gray-600 mb-2">
          Major Change:{" "}
          <span className="font-semibold ">{VDSCorePackageData.signalVersion}</span>
        </p>
        <p className="text-lg text-center text-gray-600 mb-2">
          One-liner description of the package changes.
        </p>
        <div className="flex justify-center space-x-4 my-4 mt-4">
          <button className="px-4 py-2 bg-gray-300 rounded-lg text-sm">Update</button>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Publish</button>
        </div>
      </div>
    </div>
  );
};

export default VDSComponentMain;
