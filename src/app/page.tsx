"use client";

import { useCallback, useState } from "react";
import { MultiStep } from "./components/multi-step";
import { Step } from "./components/step";
import { Energy } from "./form/energy";
import { Travel } from "./form/travel";
import { Catering } from "./form/catering";
import { Accomodation } from "./form/accomodation";
import { ServicesAndMaterials } from "./form/services-and-materials";
import { Logistics } from "./form/logistics";
import { handleFormValues } from "./actions/submit-form"
import { AggregatedTypes, CompensationEstimation, defaultEnergyFormInputs, defaultTravelFormInputs, defaultCateringFormInputs, defaultLogisticsFormInputs, defaultAccomodationFormInputs, defaultServicesAndMaterialsFormInputs } from "../types/form";
import Confetti from 'react-confetti';


const defaultAggregatedTypes: AggregatedTypes = {
  energy: defaultEnergyFormInputs,
  travel: defaultTravelFormInputs,
  catering: defaultCateringFormInputs,
  accomodation: defaultAccomodationFormInputs,
  servicesAndMaterials: defaultServicesAndMaterialsFormInputs,
  logistics: defaultLogisticsFormInputs,
};
const confettis = {
  force: 0.8,
  duration: 3000,
  width: 1600,
  colors: ['#041E43', '#1471BF', '#5BB4DC', '#FC027B', '#66D805'],
};
export default function Home() {
  const [formValues, setFormValues] = useState<AggregatedTypes>(defaultAggregatedTypes);
  const [compensation, setCompensation] = useState<CompensationEstimation>({ value: 0 });
  const [displayResult, setDisplayResult] = useState<boolean>(false);
  const [isExploding, setIsExploding] = useState<boolean>(false);

  const handleSubmit = useCallback((category: string) => {
    return async function(data: any) {
      setFormValues((prev) => ({ ...prev, [category]: data }));
      if (category === 'logistics') {
        const res = await handleFormValues(formValues);
        setCompensation(res);
        setDisplayResult(true);
      }
    }
  }, [formValues, setFormValues]);

  if (!displayResult) {
    return (
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="text-4xl font-bold">EventMeter</h1>
        <MultiStep>
          <Step title="Energy">
            <Energy submitCb={handleSubmit('energy')} />
          </Step>
          <Step title="Travel">
            <Travel submitCb={handleSubmit('travel')} />
          </Step>
          <Step title="Cattering">
            <Catering submitCb={handleSubmit('catering')} />
          </Step>
          <Step title="Accomodation">
            <Accomodation submitCb={handleSubmit('accomodation')} />
          </Step>
          <Step title="Services and Materials">
            <ServicesAndMaterials submitCb={handleSubmit('services-and-materials')} />
          </Step>
          <Step title="Logistics">
            <Logistics submitCb={handleSubmit('logistics')} />
          </Step>
        </MultiStep>
      </main>
    );
  }
  return (

    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold">EventMeter</h1>
      <h3 className="text-2xl font-bold my-12">You have to compensate {compensation.value} cc&apos;s</h3>
      <button onClick={() => setIsExploding(true)} className="border border-white p-4 rounded-md">Buy on carbonAzon</button>
      {isExploding && <Confetti {...confettis} />}
    </main>
  );
}
