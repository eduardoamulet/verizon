
// Fetch breadth signals mock data ramdonly 
// to simulate the real data provided by a web service call
const fetchBreadthSignalsData = async () => {

    // Determines the signal status based on the ratio.

    const signalStatuses = [
        "Minimal",    // 0% to 25%
        "Moderate",   // 51% to 75%
        "Widespread", // 51% to 75% 
        "Critical",   // 76% to 100%
        "Unknown",    // Outside valid range
    ];

    const getSignalStatus = (partial, total) => {
  
      const PERCENTILE = 25;
      const percentage = (partial / total) * 100;

      const index = Math.floor(percentage / PERCENTILE);
  
      const result =  index >= 0 && index < signalStatuses.length - 1
        ? signalStatuses[index]
        : signalStatuses[signalStatuses.length - 1];

        return result;
    };
  
    // Generates a random integer up to a maximum value
    const getRandomNumber = (maxValue) => Math.floor(Math.random() * maxValue);
  
    // Total values per signal (hardcoded)

    const TOTAL_FIGMA_FILES = 16;
    const TOTAL_UNIQUE_USES = 15;
    const TOTAL_GITLAB_PROJECTS = 80;

    // Define breadth signals data
    const signalsData = [
      { title: "Figma Files",     partial: getRandomNumber(TOTAL_FIGMA_FILES),     total: TOTAL_FIGMA_FILES,     unit: "k" },
      { title: "Unique Uses",     partial: getRandomNumber(TOTAL_UNIQUE_USES),     total: TOTAL_UNIQUE_USES,     unit: "M" },
      { title: "Gitlab Projects", partial: getRandomNumber(TOTAL_GITLAB_PROJECTS), total: TOTAL_GITLAB_PROJECTS, unit: "k" },
    ];
  
    // Map signals data to include status
    const signals = signalsData.map((signal) => ({
      ...signal,
      status: getSignalStatus(signal.partial, signal.total), // Update or add a property
    }));
  
    const COMPONENT_NAME = "[VDS] Tag";

     // Calculate general signal status based on all signal statuses
     const statusesIndexSum = signals.reduce((total, item) => total + signalStatuses.indexOf(item.status), 0);
     const generalStatusIndex  = Math.round(statusesIndexSum / signals.length);
        
    // Create result object
    const result = {
      signals: signals,
      generalSignal: signalStatuses[generalStatusIndex],
      componentName: COMPONENT_NAME,
    };

    return result;
  };
  
  export default fetchBreadthSignalsData;