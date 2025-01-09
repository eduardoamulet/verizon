
import { VDSCorePackage, VDSComponentInfo } from "../models/breadthSignals";
import mockData from "../services/VDSCorePackageMockData1.json"; // Path to your JSON file

// const getRandomNumber = (maxValue: number): number => Math.floor(Math.random() * maxValue);

// Fetch VDSCorePackage mock data to simulate the real data provided by a web service call
export const  fetchVDSCorePackageData = async (): Promise<VDSCorePackage> => {
  try {
    // Simulating a delay to mimic a web service call
    const result: VDSCorePackage = await new Promise((resolve) => 
    {
      var mockData: VDSCorePackage = 
      {
        "versionNumber": "v2.5.0",
        "toVersions": [
          {
            "id": 1,
            "name": "[VDS] Tag 1",
            "status": "Critical",
            "versionNumber": "v1.2.3",
            "recomendedChange": "Major",
            "componentSignals": [
              {
                "title": "Figma Files1",
                "partialRatio1": "15",
                "totalRatio1": "16",
                "unitRatio1": "k",
                "partialRatio2": "20",
                "totalRatio2": "50",
                "unitRatio2": "Teams",
                "status": "Critical",
                "icon": {
                  "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
                  "color": "text-red-600"
                }
              },
              {
                "title": "Unique Uses1",
                "partialRatio1": "4",
                "totalRatio1": "15",
                "unitRatio1": "M",
                "partialRatio2": "20",
                "totalRatio2": "50",
                "unitRatio2": "Teams",
                "status": "Critical",
                "icon": {
                  "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
                  "color": "text-red-600"
                }
              },
              {
                "title": "Gitlab Project1",
                "partialRatio1": "50",
                "totalRatio1": "80",
                "unitRatio1": "k",
                "partialRatio2": "20",
                "totalRatio2": "50",
                "unitRatio2": "Teams",
                "status": "Moderate",
                "icon": {
                  "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM8 7V15H9V7zM12 2M14 3V3H13V15H14V3zM15 2v14h-3V2z",
                  "color": "text-gray-600"
                }
              }
            ],
            "icon": {
              "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
              "color": "text-red-600"
            }
          },
          {
            "id": 2,
            "name": "[VDS] Tag 2",
            "status": "Critical",
            "versionNumber": "v3.2.1",
            "recomendedChange": "Minor",
            "componentSignals": [
              {
                "title": "Figma Files2",
                "partialRatio1": "6",
                "totalRatio1": "16",
                "unitRatio1": "k",
                "partialRatio2": "20",
                "totalRatio2": "50",
                "unitRatio2": "Teams",
                "status": "Moderate",
                "icon": {
                  "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
                  "color": "text-red-600"
                }
              },
              {
                "title": "Unique Uses2",
                "partialRatio1": "4",
                "totalRatio1": "15",
                "unitRatio1": "M",
                "partialRatio2": "20",
                "totalRatio2": "50",
                "unitRatio2": "Teams",
                "status": "Minimal",
                "icon": {
                  "path": "M2 10h3v6H2V10zM4 11H3V15H4zM7 6h3v10H7V6zM8 7V15H9V7zM12 2M14 3V3H13V15H14V3zM15 2v14h-3V2z",
                  "color": "text-red-600"
                }
              },
              {
                "title": "Gitlab Project2",
                "partialRatio1": "2",
                "totalRatio1": "15",
                "unitRatio1": "k",
                "partialRatio2": "17",
                "totalRatio2": "80",
                "unitRatio2": "Teams",
                "status": "Minimal",
                "icon": {
                  "path": "M2 10h3v6H2V10zM4 11H3V15H4zM7 6h3v10H7V6zM8 7V15H9V7zM12 2M14 3V3H13V15H14V3zM15 2v14h-3V2z",
                  "color": "text-gray-400"
                }
              }
            ],
            "icon": {
              "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
              "color": "text-red-600"
            }
          }
        ],
        "versionedChanges": [
            {
              "id": 3,
              "name": "[VDS] Tag 3",
              "status": "Critical",
              "versionNumber": "v1.2.3",
              "recomendedChange": "Major",
              "componentSignals": [
                {
                  "title": "Figma Files3",
                  "partialRatio1": "15",
                  "totalRatio1": "16",
                  "unitRatio1": "k",
                  "partialRatio2": "20",
                  "totalRatio2": "50",
                  "unitRatio2": "Teams",
                  "status": "Critical",
                  "icon": {
                    "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
                    "color": "text-red-600"
                  }
                },
                {
                  "title": "Unique Uses3",
                  "partialRatio1": "4",
                  "totalRatio1": "15",
                  "unitRatio1": "M",
                  "partialRatio2": "20",
                  "totalRatio2": "50",
                  "unitRatio2": "Teams",
                  "status": "Critical",
                  "icon": {
                    "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
                    "color": "text-red-600"
                  }
                },
                {
                  "title": "Gitlab Project3",
                  "partialRatio1": "50",
                  "totalRatio1": "80",
                  "unitRatio1": "k",
                  "partialRatio2": "20",
                  "totalRatio2": "50",
                  "unitRatio2": "Teams",
                  "status": "Moderate",
                  "icon": {
                    "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM8 7V15H9V7zM12 2M14 3V3H13V15H14V3zM15 2v14h-3V2z",
                    "color": "text-gray-600"
                  }
                }
              ],
              "icon": {
                "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
                "color": "text-red-600"
              }
            },
            {
              "id": 4,
              "name": "[VDS] Tag 4",
              "status": "Critical",
              "versionNumber": "v3.2.1",
              "recomendedChange": "Minor",
              "componentSignals": [
                {
                  "title": "Figma Files4",
                  "partialRatio1": "6",
                  "totalRatio1": "16",
                  "unitRatio1": "k",
                  "partialRatio2": "20",
                  "totalRatio2": "50",
                  "unitRatio2": "Teams",
                  "status": "Moderate",
                  "icon": {
                    "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
                    "color": "text-red-600"
                  }
                },
                {
                  "title": "Unique Uses4",
                  "partialRatio1": "4",
                  "totalRatio1": "15",
                  "unitRatio1": "M",
                  "partialRatio2": "20",
                  "totalRatio2": "50",
                  "unitRatio2": "Teams",
                  "status": "Minimal",
                  "icon": {
                    "path": "M2 10h3v6H2V10zM4 11H3V15H4zM7 6h3v10H7V6zM8 7V15H9V7zM12 2M14 3V3H13V15H14V3zM15 2v14h-3V2z",
                    "color": "text-red-600"
                  }
                },
                {
                  "title": "Gitlab Project4",
                  "partialRatio1": "2",
                  "totalRatio1": "15",
                  "unitRatio1": "k",
                  "partialRatio2": "17",
                  "totalRatio2": "80",
                  "unitRatio2": "Teams",
                  "status": "Minimal",
                  "icon": {
                    "path": "M2 10h3v6H2V10zM4 11H3V15H4zM7 6h3v10H7V6zM8 7V15H9V7zM12 2M14 3V3H13V15H14V3zM15 2v14h-3V2z",
                    "color": "text-gray-400"
                  }
                }
              ],
              "icon": {
                "path": "M2 10h3v6H2V10zM7 6h3v10H7V6zM12 2h3v14h-3V2z",
                "color": "text-red-600"
              }
            }
          ],
        "signalChange": "Major",
        "signalVersion": "v3.0.0"
      };

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

