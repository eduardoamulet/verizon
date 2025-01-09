import './App.css';
import React, { useEffect, useState } from "react";
import VDSComponentDetail from './components/VDSComponentDetail.';
import VDSComponentMain from './components/VDSComponentMain';         
import VDSComponentContainer from './components/VDSComponentContainer'; 

import { VDSComponentInfo, VDSCorePackage } from "./models/breadthSignals";
import { fetchVDSCorePackageData } from "../src/services/breadthSignalsService";


const App: React.FC = () => {
  const [VDSCorePackageData, setVDSCorePackageData] = useState<VDSCorePackage>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchVDSCorePackageData(); // Use the imported function
        setVDSCorePackageData(data); // Properly set the fetched data in state
      } catch (error) {
        console.error("Error fetching breadth signals data:", error);
      }
    };

    fetchData(); // Call the correctly named function
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">

        {/* Render the VDSComponentContainer alone with no  child component}
        <VDSComponentContainer childComponent={undefined} />*/}


        {/* Render the VDSComponentContainer alone with a VDSComponentMain as a child />*/}
        <VDSComponentContainer childComponent={<VDSComponentMain />} /> 

        {/* Render the VDSComponentContainer alone with a VDSComponentDetail as a child */}
        <VDSComponentContainer childComponent={<VDSComponentDetail {...VDSCorePackageData?.toVersions[1]} />} /> 
        
        {/* Render the VDSComponentDetail */}
       {/*<VDSComponentDetail {...mockComponentInfo} />*/}
        {/* Pass the VDSComponentDetail component to VDSComponentContainer */}
      </header>
    </div>
  );
};

export default App;