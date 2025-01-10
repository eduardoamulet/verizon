import React from "react";

import { VDSComponentInfo } from "../../../models/breakingChangesModels";
import VDSComponentSignalCard from "./VDSComponentSignalCard";
import VDSComponentVersionSelector from "./VDSComponentVersionSelector";
import VDSComponentLinkIconAndText from "./VDSComponentLinkIconAndText";

interface VDSComponentDetailProps {
  componentInfo: VDSComponentInfo;
  onGoBack: () => void;
}

const VDSComponentDetail: React.FC<VDSComponentDetailProps> = ({
                                                                   componentInfo,
                                                                   onGoBack,
                                                               }) => {
    if (!componentInfo) {
        throw new Error("componentInfo is undefined");
    }

    const {name, icon, status, componentSignals, recomendedChange, changesVertionRecommendation} = componentInfo;

    return (
      <div className="bg-white w-full">

      {/* link to go back to VDSComponentMain*/}
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
        <VDSComponentSignalCard componentInfo={componentSignal} />
       ))}
      </div>
      <VDSComponentVersionSelector recommendedChange={recomendedChange || "Major"} changesVertionRecommendation = {changesVertionRecommendation}/>
      <VDSComponentLinkIconAndText
        href="#"
        text="See full report"
        onClick={(e) => {
          e.preventDefault();
          console.log("See full report Link clicked!");
        }}
      />
      <p className="clear-both text-sm text-gray-500 mt-2">
        Uses AI analysis, and may have some inaccuracies.
      </p>
    </div>
  );
};

export default VDSComponentDetail;