import React, { useEffect, useState } from 'react';
import fetchCardsData from '../services/cardService'; // Import the service function

const Card = ({ title, data, icon }) => {
  return (
    <div className="flex flex-col items-center border p-4 rounded-lg border-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 16 16"
        className="w-6 h-6 text-red-600 mb-2"
      >
        {icon}
      </svg>
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-lg font-bold text-gray-500">{data}</span>
    </div>
  );
};

const VDSComponent = () => {
    const [cards, setCards] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchCardsData(); // Fetch data from the service
        setCards(data);
      };
      fetchData();
    }, []);
  
    return (
      <div className="bg-white border rounded-lg shadow-md p-4 w-full max-w-md">
        <div className="flex justify-between items-center">
            <span className="text-2xl text-gray-500 font-semibold flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-5 h-5 mr-1"
                >
                <path d="M0 0h4v16H0V0zm6 4h4v12H6V4zm6 8h4v4h-4v-4z" />
                </svg>
            </span>
            <h2 className="text-xl text-gray-900 font-semibold">Signal • Breaking Changes</h2>
            
        </div>
        <hr class="pt-2"/>

       
            <div className="py-2 flex justify-between items-center">
          
            <h2 className="text-xl text-gray-900 font-semibold">[VDS] Tag</h2>
            <span className="text-xl text-red-600 font-semibold flex items-center">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-5 h-5 mr-1"
                >
                <path d="M0 0h4v16H0V0zm6 4h4v12H6V4zm6 8h4v4h-4v-4z" />
                </svg>
                Critical
            </span>
            </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} data={card.data} icon={<path d={card.icon} />} />
          ))}
        </div>
        <hr class="py-2"/>


        <div className="flex justify-around mt-6 space-x-4"> 

            
         <span className=" text-2xl text-gray-500 font-semibold flex items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 hover:text-blue-500 hover:shadow-lg transition-all duration-400">
            <path d="M10 14L4 20M4 20H10M4 20V14M14 10L20 4M20 4H14M20 4V10"></path>
        </svg>
        </span>

        <span className=" text-2xl text-gray-500 font-semibold flex items-center">

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 hover:text-blue-500 hover:shadow-lg transition-all duration-400">
        <path d="M12 8v4l3 3"></path>
        <circle cx="12" cy="12" r="10"></circle>
        </svg>

</span>

<span className=" text-2xl text-gray-500 font-semibold flex items-center">

<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 hover:text-blue-500 hover:shadow-lg transition-all duration-400">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"></path>
<path d="M16.5 9.4L7.55 4.24"></path>
</svg>
</span>

<span className=" text-2xl text-gray-500 font-semibold flex items-center">


<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6 hover:text-blue-500 hover:shadow-lg transition-all duration-400">
<rect x="3" y="4" width="18" height="18" rx="2"></rect>
<line x1="16" y1="2" x2="16" y2="6"></line>
<line x1="8" y1="2" x2="8" y2="6"></line>
<line x1="3" y1="10" x2="21" y2="10"></line>
</svg>

</span>
            
            
        </div>
      </div>
    );
  };
  
  export default VDSComponent;
  