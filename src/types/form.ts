export type Inputs = {
  name: string;
  email: string;
};

export type EnergyFormInputs = {
  electricity: number;
  gas: number;
  oil: number;
  generatorPower: number;
  generatorDuration: number;
};

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

export type CateringFormInputs = {
  meals: number;
  drinks: number;
};

export type AccomodationFormInputs = {
  nights: number;
};

export type ServicesAndMaterialsFormInputs = {
  cardboard: number; iron: number; steel: number; glass: number; plastic: number; paper: number;
}

export type LogisticsFormInputs = {
  vehicule: string;
  decoration: number;
  cattering: number;
  communication: number;
  other: number;
}
