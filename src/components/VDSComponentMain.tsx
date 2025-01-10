import React, {useEffect, useState} from "react";
import {fetchVDSCorePackageData} from "../services/breadthSignalsService";
import {VDSComponentInfo, VDSCorePackage} from "../models/breadthSignals";
import VDSComponentDetail from "./VDSComponentDetail.";

interface VDSComponentMainProps {
    onSetDetail: (version: VDSComponentInfo) => void;
}

const VDSComponentMain: React.FC<VDSComponentMainProps> = ({onSetDetail}) => {
    const [VDSCorePackageData, setVDSCorePackageData] = useState<VDSCorePackage>();
    const [selectedVersion, setSelectedVersion] = useState<VDSComponentInfo | null>(null);

    useEffect(() => {
        const fetchAndProcessData = async () => {
            try {
                const data = await fetchVDSCorePackageData();

                if (!data) {
                    throw new Error("No VDS Core Package Data found");
                }

                setVDSCorePackageData(data);
            } catch (error) {
                console.error("Error fetching breadth signals data:", error);
            }
        };

        fetchAndProcessData();
    }, []);

    const handleGoBack = () => {
        setSelectedVersion(null); // Reset selected version to go back
    };

    if (!VDSCorePackageData) {
        return <div>No data to be shown</div>;
    }

    return (
        <div className="bg-white">
            {selectedVersion ? (
                // Render the detail view if a version is selected
                <VDSComponentDetail componentInfo={selectedVersion} onGoBack={handleGoBack}/>
            ) : (
                // Render the main view with available versions
                <>
                    <div className="bg-white">
                        {/* VDS Core Package version */}
                        <div>
                            <h3 className="text-2xl text-black font-bold mb-2">VDS Core Package</h3>
                            <h4 className="text-2xl text-black mb-2">{VDSCorePackageData.versionNumber}</h4>
                        </div>
                        <hr className="pt-2 mt-4 border-gray-400"/>

                        {/* To Version Section */}
                        <div>
                            <h3 className="text-gray-500 font-semibold text-lg mb-2 flex justify-left">To Version</h3>
                            {VDSCorePackageData.toVersions.map((version) => (
                                <div key={version.id} className="flex items-center justify-between pb-2 mb-2">
                                    <div
                                        className={`flex items-center space-x-2 ${version.icon?.color || "text-gray-900"}`}>
                                        <div className="flex flex-col justify-items-start">
                                            <span className="text-xl text-black font-bold mb-2">{version.name}</span>
                                            <span
                                                className="text-sm text-gray-500 text-start">{version.versionNumber}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-items-end items-center text-red-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16"
                                             className="mb-2 ml-4 h-10 w-10">
                                            <path d={version.icon?.path}/>
                                        </svg>
                                        <span className={`ml-2 px-1 text-lg ${version.icon?.color}`}>
                                                {version.status}
                                        </span>
                                        <span className="ml-2 text-lg text-red-600 font-semibold">
                                                {version.recomendedChange}?
                                        </span>
                                    </div>
                                    <button
                                        className="px-3 py-1 bg-black text-white rounded-lg text-base"
                                        onClick={() => setSelectedVersion(version)} // Set the selected version on button click
                                    >
                                        Set Version
                                    </button>
                                </div>
                            ))}
                        </div>

                        {/* Versioned Changes Section */}
                        <div className="border-t border-gray-400 pt-3.5">
                            <h3 className="text-gray-500 font-semibold text-lg mb-2 flex justify-left">Versioned
                                Changes</h3>
                            {VDSCorePackageData.versionedChanges.map((change) => (
                                <div
                                    key={change.id}
                                    className="flex justify-between pb-2 mb-2 text-red-600"
                                >
                                    <div className="flex flex-col justify-items-start">
                                        <span className="text-xl text-black font-bold mb-2">{change.name}</span>
                                        <span className="text-sm text-gray-500 text-start">{change.versionNumber}</span>
                                    </div>
                                    <div className="flex flex-row items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            className="mb-2 h-10 w-10"
                                        >
                                            <path d={change.icon?.path}/>
                                        </svg>
                                        <span className={`px-3 align-middle text-lg ${change.icon?.color}`}>
                                            {change.status}
                                        </span>
                                        <span className="align-middle text-lg text-red-600 font-semibold">{change.recomendedChange}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Finalization Section */}
                        <div className="mt-8 text-xl pt-4 border-t border-gray-400">
                            <p className="text-center text-black mb-2"> Published Changes </p>
                            <p className="text-center text-black mb-2"> Finalize Version Number </p>
                            <p className="text-center text-black mb-2">
                                Major Change:{" "}
                                <span className="font-semibold ">{VDSCorePackageData.signalVersion}</span>
                            </p>
                            <p className="text-center text-black mb-2">
                                One-liner description of the package changes.
                            </p>
                            <div className="flex justify-center space-x-4 my-4 mt-4">
                                <button className="px-4 py-2 text-black bg-white border border-gray-400 rounded-lg text-sm">Update</button>
                                <button className="px-4 py-2 bg-black text-white rounded-lg text-sm">Publish</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default VDSComponentMain;
