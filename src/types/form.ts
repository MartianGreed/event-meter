export type EnergyFormInputs = {
  electricity: number;
  gas: number;
  oil: number;
  generatorPower: number;
  generatorDuration: number;
};
export const defaultEnergyFormInputs = {
  gas: 0,
  electricity: 0,
  oil: 0,
  generatorPower: 0,
  generatorDuration: 0,
}

export type TravelFormInputs = {
  carNumber: number;
  carKm: number;
  electricCarNumber: number;
  electricCarKm: number;
  hybridCarNumber: number;
  hybridCarKm: number;
  twoWheelersNumber: number;
  twoWheelersKm: number;
  shortAirTravelNumber: number;
  shortAirTravelKm: number;
  mediumAirTravelNumber: number;
  mediumAirTravelKm: number;
  longAirTravelNumber: number;
  longAirTravelKm: number;
  metroNumber: number;
  metroKm: number;
  busNumber: number;
  busKm: number;
  trainEuropeNumber: number;
  trainEuropeKm: number;
  trainFranceNumber: number;
  trainFranceKm: number;
}

export const defaultTravelFormInputs = {
  carNumber: 0,
  carKm: 0,
  electricCarNumber: 0,
  electricCarKm: 0,
  hybridCarNumber: 0,
  hybridCarKm: 0,
  twoWheelersNumber: 0,
  twoWheelersKm: 0,
  shortAirTravelNumber: 0,
  shortAirTravelKm: 0,
  mediumAirTravelNumber: 0,
  mediumAirTravelKm: 0,
  longAirTravelNumber: 0,
  longAirTravelKm: 0,
  metroNumber: 0,
  metroKm: 0,
  busNumber: 0,
  busKm: 0,
  trainEuropeNumber: 0,
  trainEuropeKm: 0,
  trainFranceNumber: 0,
  trainFranceKm: 0,
};

export type CateringFormInputs = {
  meals: number;
  drinks: number;
};
export const defaultCateringFormInputs = {
  meals: 0,
  drinks: 0,
};

export type AccomodationFormInputs = {
  nights: number;
};
export const defaultAccomodationFormInputs = {
  nights: 0,
};

export type ServicesAndMaterialsFormInputs = {
  cardboard: number; iron: number; steel: number; glass: number; plastic: number; paper: number;
}
export const defaultServicesAndMaterialsFormInputs = {
  cardboard: 0, iron: 0, steel: 0, glass: 0, plastic: 0, paper: 0,
};

export type LogisticsFormInputs = {
  vehicule: string;
  decoration: number;
  cattering: number;
  communication: number;
  other: number;
}
export const defaultLogisticsFormInputs = {
  vehicule: 'van',
  decoration: 0,
  cattering: 0,
  communication: 0,
  other: 0,
};


export type AggregatedTypes = {
  energy: EnergyFormInputs;
  travel: TravelFormInputs;
  catering: CateringFormInputs;
  accomodation: AccomodationFormInputs;
  servicesAndMaterials: ServicesAndMaterialsFormInputs;
  logistics: LogisticsFormInputs;
}

export type CompensationEstimation = {
  value: number;
}
