import './App.css';
import React, {  useState } from "react";
import VDSComponentDetail from './components/VDSComponentDetail.';
import VDSComponentMain from './components/VDSComponentMain';
import VDSComponentContainer from './components/VDSComponentContainer'; 
import { VDSComponentInfo} from "./models/breadthSignals";

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<"main" | "detail">("main");
  const [selectedDetail, setSelectedDetail] = useState<VDSComponentInfo | null>(null);

  const handleSetDetail = (version: VDSComponentInfo) => {
    setSelectedDetail(version);
    setActiveComponent("detail");
  };

  const handleGoBack = () => {
    setActiveComponent("main");
    setSelectedDetail(null);
  };

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
