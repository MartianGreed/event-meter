'use server';

import { AggregatedTypes } from "../../types/form";

export async function handleFormValues(data: AggregatedTypes) {
  console.log('submitForm', data);
  return {
    type: 'SUBMIT_FORM'
  };
}

