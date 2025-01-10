import React, { useEffect, useState } from "react";
import VDSComponentDetail from "../details/VDSComponentDetail.";
import VDSComponentFinalizationSection from "../main/VDSComponentFinalizationSection";
import VDSComponentVersionedChanges from "../main/VDSComponentVersionedChanges";
import VDSComponentToVersion from "../main/VDSComponentToVersion";
import { fetchVDSCorePackageData } from "../../../services/breadthSignalsService";
import { VDSComponentInfo, VDSCorePackage } from "../../../models/breakingChangesModels";

// Component for displaying the VDS Core Package version
const VDSComponentCorePackageVersion: React.FC<{ versionNumber: string }> = ({ versionNumber }) => (
  <div>
    <h3 className="text-2xl text-black font-bold mb-2">VDS Core Package</h3>
    <h4 className="text-2xl text-black mb-2">{versionNumber}</h4>
  </div>
);

const VDSComponentMain: React.FC = () => {
  const [VDSCorePackageData, setVDSCorePackageData] = useState<VDSCorePackage>();
  const [selectedVersion, setSelectedVersion] = useState<VDSComponentInfo | null>(null);

  useEffect(() => {
    const fetchAndProcessData = async () => {
      try {
        const data = await fetchVDSCorePackageData();
        if (!data) throw new Error("No VDS Core Package Data found");
        setVDSCorePackageData(data);
      } catch (error) {
        console.error("Error fetching breadth signals data:", error);
      }
    };

    fetchAndProcessData();
  }, []);

  const handleGoBack = () => setSelectedVersion(null);

  if (!VDSCorePackageData) return <div>No data to be shown</div>;

  return (
    <div className="bg-white">
      {selectedVersion ? (
        <VDSComponentDetail componentInfo={selectedVersion} onGoBack={handleGoBack} />
      ) : (
        <>
          <VDSComponentCorePackageVersion versionNumber={VDSCorePackageData.versionNumber} />
          <hr className="pt-2 mt-4 border-gray-400" />
          <VDSComponentToVersion
            toVersions={VDSCorePackageData.toVersions}
            onSelectVersion={setSelectedVersion}
          />
          <VDSComponentVersionedChanges versionedChanges={VDSCorePackageData.versionedChanges} />
          <VDSComponentFinalizationSection signalVersion={VDSCorePackageData.signalVersion} />
        </>
      )}
    </div>
  );
};

export default VDSComponentMain;
