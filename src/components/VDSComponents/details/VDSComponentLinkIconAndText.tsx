import React from "react";

interface VDSComponentLinkIconAndTextProps {
  href: string;
  onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  text: string;
}

const VDSComponentLinkIconAndText: React.FC<VDSComponentLinkIconAndTextProps> = ({ href, onClick, text }) => (
  <div className="float-right flex flex-row my-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 122.88 122.88"
      className="w-5 h-5 mb-2"
    >
      <path d="M60.54,34.07A7.65,7.65,0,0,1,49.72,23.25l13-12.95a35.38,35.38,0,0,1,49.91,0l.07.08a35.37,35.37,0,0,1-.07,49.83l-13,12.95A7.65,7.65,0,0,1,88.81,62.34l13-13a20.08,20.08,0,0,0,0-28.23l-.11-.11a20.08,20.08,0,0,0-28.2.07l-12.95,13Zm14,3.16A7.65,7.65,0,0,1,85.31,48.05L48.05,85.31A7.65,7.65,0,0,1,37.23,74.5L74.5,37.23ZM62.1,89.05A7.65,7.65,0,0,1,72.91,99.87l-12.7,12.71a35.37,35.37,0,0,1-49.76.14l-.28-.27a35.38,35.38,0,0,1,.13-49.78L23,50A7.65,7.65,0,1,1,33.83,60.78L21.12,73.49a20.09,20.09,0,0,0,0,28.25l0,0a20.07,20.07,0,0,0,28.27,0L62.1,89.05Z" />
    </svg>
    <a
      href={href}
      className="ml-2 text-blue-600 font-bold text-lg block"
      onClick={onClick}
    >
      {text}
    </a>
  </div>
);

export default VDSComponentLinkIconAndText;
