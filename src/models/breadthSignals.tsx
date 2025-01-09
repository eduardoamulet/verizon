
export type SignalStatus = "Minimal" | "Moderate" | "Widespread" | "Critical";

export type SignalChange = "Major" | "Minor" | "Patch";

export interface VDSCorePackage{
  versionNumber: string;
  toVersions: VDSComponentInfo[];
  versionedChanges: VDSComponentInfo[];
  signalChange: SignalChange;
  signalVersion: string;
}

export interface VDSComponentInfo {
  id?: number;
  name?: string; 
  status?: SignalStatus;
  versionNumber?: string;
  recomendedChange?: SignalChange;
  componentSignals?: VDSComponentSignal[],
  icon?: IconInfo
}

export interface VDSComponentSignal {
  title: string;
  partialRatio1: string;
  totalRatio1: string;
  unitRatio1: string;
  partialRatio2: string;
  totalRatio2: string;
  unitRatio2: string;
  status: SignalStatus;
  icon?: IconInfo;
}

export interface IconInfo {
  path: string;
  color: string;
}


