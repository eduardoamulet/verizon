import React from "react";

interface VDSComponentChangeRecommendationProps  {
  text: string;
}

const VDSComponentChangeRecommendation: React.FC<VDSComponentChangeRecommendationProps> = ({ text }) => (
  <li className="flex flex-row bg-gray-100 p-2 rounded">
    <div className="text-black text-left text-3xl px-3 pt-2.5">•</div>
    <div className="text-black text-left">{text}</div>
  </li>
);

export default VDSComponentChangeRecommendation