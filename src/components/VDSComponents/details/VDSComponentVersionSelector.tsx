import React, { useState } from "react";
import { SignalChange } from "../../../models/breakingChangesModels";
import VDSComponentVersion from "./VDSComponentVersion"

interface VDSComponentVersionSelectorProps {
  recommendedChange: SignalChange;
  changesVertionRecommendation: string[]
}

const VDSComponentVersionSelector: React.FC<VDSComponentVersionSelectorProps> = ({
  recommendedChange, changesVertionRecommendation
}) => {
  const [version, setVersion] = useState<string>(recommendedChange);

  const handleRadioClick = (versionType: string) => {
    setVersion(versionType);
    console.log(`${versionType} button clicked`);
  };

  const versionOptions = ["Major", "Minor", "Patch"];

  return (
    <div className="pt-4 px-0 text-gray-500">
      <hr className="my-4 border-gray-400" />
      <h3 className="text-lg font-semibold float-left">Select Version Change</h3>
      <div className="clear-both pt-4 flex justify-between text-3xl text-gray-900 font-semibold space-x-4 my-4">
        {versionOptions.map((type) => (
          <VDSComponentVersion
            key={type}
            id={type.toLowerCase()}
            label={type}
            isSelected={version === type}
            isRecommended={recommendedChange === type}
            onClick={() => handleRadioClick(type)}
          />
        ))}
      </div>
    </div>
  );
};

export default VDSComponentVersionSelector;
