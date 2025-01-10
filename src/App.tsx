import './App.css';
import React, {  useState } from "react";
import VDSComponentDetail from './components/VDSComponents/details/VDSComponentDetail.';
import VDSComponentMain from './components/VDSComponents/main/VDSComponentMain';
import VDSComponentContainer from './components/VDSComponents/container/VDSComponentContainer'; 
import { VDSComponentInfo} from "./models/breakingChangesModels";

const App: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<"main" | "detail">("main");
  const [selectedDetail, setSelectedDetail] = useState<VDSComponentInfo | null>(null);

  const handleGoBack = () => {
    setActiveComponent("main");
    setSelectedDetail(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        {activeComponent === "main" && <VDSComponentContainer childComponent={<VDSComponentMain /> } />  }
        {activeComponent === "detail" && selectedDetail && (
          <VDSComponentContainer childComponent={<VDSComponentDetail componentInfo={selectedDetail} onGoBack={handleGoBack} />} />
        )}
      </header>
    </div>
  );
};

export default App;
