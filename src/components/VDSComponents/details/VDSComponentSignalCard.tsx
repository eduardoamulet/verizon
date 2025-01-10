import React from "react";

import { VDSComponentSignal} from "../../../models/breakingChangesModels";

interface VDSComponentSignalCardProps {
  componentInfo: VDSComponentSignal;
}

const  VDSComponentSignalCard: React.FC<VDSComponentSignalCardProps> = ({componentInfo}) => {

  const { title, 
          partialRatio1, 
          totalRatio1, 
          unitRatio1, 
          partialRatio2, 
          totalRatio2, 
          unitRatio2, 
          icon} = componentInfo;

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

export default VDSComponentSignalCard;