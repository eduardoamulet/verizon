// Component for the "To Version" section

import { VDSComponentInfo } from "../../../models/breakingChangesModels";

interface VDSComponentToVersionProps {
    toVersions: VDSComponentInfo[];
    onSelectVersion: (version: VDSComponentInfo) => void
}

// Component for the "Versioned Changes" section
const VDSComponentToVersion: React.FC<VDSComponentToVersionProps> = ({ toVersions, onSelectVersion }) => (
    <div>
      <h3 className="text-gray-500 font-semibold text-lg mb-2 flex justify-left">To Version</h3>
      {toVersions.map((version) => (
        <div key={version.id} className="flex items-center justify-between pb-2 mb-2">
          <div className={`flex items-center space-x-2 ${version.icon?.color || "text-gray-900"}`}>
            <div className="flex flex-col justify-items-start">
              <span className="text-xl text-black font-bold mb-2">{version.name}</span>
              <span className="text-sm text-gray-500 text-start">{version.versionNumber}</span>
            </div>
          </div>
          <div className="flex flex-row justify-items-end items-center text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="mb-2 ml-4 h-10 w-10"
            >
              <path d={version.icon?.path} />
            </svg>
            <span className={`ml-2 px-1 text-lg ${version.icon?.color}`}>{version.status}</span>
            <span className="ml-2 text-lg text-red-600 font-semibold">{version.recomendedChange}?</span>
          </div>
          <button
            className="px-3 py-1 bg-black text-white rounded-lg text-base"
            onClick={() => onSelectVersion(version)}
          >
            Set Version
          </button>
        </div>
      ))}
    </div>
  );
  
  export default VDSComponentToVersion;