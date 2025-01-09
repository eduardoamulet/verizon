import './App.css';
import React, { useEffect, useState } from "react";
import VDSComponentDetail from './components/VDSComponentDetail.';
import VDSComponentMain from './components/VDSComponentMain';
import VDSComponentContainer from './components/VDSComponentContainer'; 
import { VDSComponentInfo, VDSCorePackage } from "./models/breadthSignals";
import { fetchVDSCorePackageData } from "../src/services/breadthSignalsService";

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<"main" | "detail">("main");
  const [selectedDetail, setSelectedDetail] = useState<VDSComponentInfo | null>(null);
  const [VDSCorePackageData, setVDSCorePackageData] = useState<VDSCorePackage>();

  const handleSetDetail = (version: VDSComponentInfo) => {
    setSelectedDetail(version);
    setActiveComponent("detail");
  };

  const handleGoBack = () => {
    setActiveComponent("main");
    setSelectedDetail(null);
  };

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
        {activeComponent === "main" && <VDSComponentContainer childComponent={<VDSComponentMain onSetDetail={handleSetDetail} /> } />  }
        {activeComponent === "detail" && selectedDetail && (
          <VDSComponentContainer childComponent={<VDSComponentDetail componentInfo={selectedDetail} onGoBack={handleGoBack} />} />
        )}
      </header>
    </div>
  );
};

export default App;
