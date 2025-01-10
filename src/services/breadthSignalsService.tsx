
import { VDSCorePackage, VDSComponentInfo } from "../models/breadthSignals";
import mockData from "../services/VDSCorePackageMockData1.json"; // Path to your JSON file

// Fetch VDSCorePackage mock data to simulate the real data provided by a web service call
export const  fetchVDSCorePackageData = async (): Promise<VDSCorePackage> => {
  try {

    // Simulating a delay to mimic a web service call
    const result: VDSCorePackage = await new Promise((resolve) => 
    {
      setTimeout(() => resolve(mockData as VDSCorePackage), 500);
    });

    return result;
  } catch (error) {
    console.error("Error fetching VDSCorePackage data:", error);
    throw new Error("Failed to fetch VDSCorePackage data");
  }
};

export const  fetchVDSComponentInfoById = async (VDSComponentInfoVersionId: number): Promise<VDSComponentInfo> => {
  try {
    console.log(`Fetching data for VDS Component Info Version Id: ${VDSComponentInfoVersionId}`);

    // Simulating a delay to mimic a web service call
    const resultMockData: VDSCorePackage = await new Promise((resolve) =>
      setTimeout(() => resolve(mockData as VDSCorePackage), 500)
    );

    // Find the matching VDSComponentInfo by id
    const result = resultMockData.toVersions.find(
      (componentInfo) => componentInfo.id === VDSComponentInfoVersionId
    );

    if (!result) {
      throw new Error(`No VDS Component Info found for ID: ${VDSComponentInfoVersionId}`);
    }

    return result;
  } catch (error) {
    console.error("Error fetching VDSCorePackage data:", error);
    throw new Error("Failed to fetch VDSCorePackage data");
  }
};

