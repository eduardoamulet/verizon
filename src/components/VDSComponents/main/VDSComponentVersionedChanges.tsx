import { VDSComponentInfo } from "../../../models/breakingChangesModels";

interface VDSComponentVersionedChangesProps {
  versionedChanges: VDSComponentInfo[]
}

// Component for the "Versioned Changes" section
const VDSComponentVersionedChanges: React.FC<VDSComponentVersionedChangesProps> = ({ versionedChanges }) => (
    <div className="border-t border-gray-400 pt-3.5">
      <h3 className="text-gray-500 font-semibold text-lg mb-2 flex justify-left">Versioned Changes</h3>
      {versionedChanges.map((change) => (
        <div key={change.id} className="flex justify-between pb-2 mb-2 text-red-600">
          <div className="flex flex-col justify-items-start">
            <span className="text-xl text-black font-bold mb-2">{change.name}</span>
            <span className="text-sm text-gray-500 text-start">{change.versionNumber}</span>
          </div>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="mb-2 h-10 w-10"
            >
              <path d={change.icon?.path} />
            </svg>
            <span className={`px-3 align-middle text-lg ${change.icon?.color}`}>{change.status}</span>
            <span className="align-middle text-lg text-red-600 font-semibold">{change.recomendedChange}</span>
          </div>
        </div>
      ))}
    </div>
  );
  
  export default VDSComponentVersionedChanges;