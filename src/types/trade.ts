export interface TradeDivision {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  keyProducts: string[];
  specifications: string;
  packagingTypes: string[];
  annualVolume: string;
  primaryExportMarkets: string[];
  hsCodePrefix: string;
  image: string;
  incoterms: string[];
  qualityCertification: string;
}

export interface TradeCorridor {
  id: string;
  region: string;
  ports: string[];
  averageTransitDays: string;
  sailingFrequency: string;
  vesselTypes: string;
  keyCommodities: string;
}

export interface TradeFinanceInstrument {
  name: string;
  type: string;
  description: string;
  acceptedInstitutions: string[];
  settlementTerms: string;
}

export interface RFQData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  destinationPort: string;
  country: string;
  merchandiseCategory: string;
  productDescription: string;
  volumeTonnage: string;
  packagingPreference: string;
  preferredIncoterm: string;
  paymentInstrument: string;
  targetShipmentMonth: string;
  additionalRequirements?: string;
}
