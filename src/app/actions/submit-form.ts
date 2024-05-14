'use server';

import { Inputs } from "../../types/form";

export async function submitForm(data: Inputs) {
  console.log('submitForm', data);
  return {
    type: 'SUBMIT_FORM'
  };
}

