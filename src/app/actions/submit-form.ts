'use server';

import { AggregatedTypes, CompensationEstimation } from "../../types/form";

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export async function handleFormValues(data: AggregatedTypes): Promise<CompensationEstimation> {
  console.log('submitForm', data);
  return {
    value: getRandomInt(1000, 10000)
  };
}

