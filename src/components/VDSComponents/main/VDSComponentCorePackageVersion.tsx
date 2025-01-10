import React from "react";

interface VDSComponentCorePackageVersionProps {
    versionNumber: string
}

// Component for displaying the VDS Core Package version
const VDSComponentCorePackageVersion: React.FC<VDSComponentCorePackageVersionProps> = ({ versionNumber }) => (
  <div>
    <h3 className="text-2xl text-black font-bold mb-2">VDS Core Package</h3>
    <h4 className="text-2xl text-black mb-2">{versionNumber}</h4>
  </div>
);

export default VDSComponentCorePackageVersion;
