"use client";

import { MultiStep } from "./components/multi-step";
import { Step } from "./components/step";
import { Energy } from "./form/energy";
import { Travel } from "./form/travel";
import { Catering } from "./form/catering";
import { Accomodation } from "./form/accomodation";
import { ServicesAndMaterials } from "./form/services-and-materials";
import { Logistics } from "./form/logistics";

export default function Home() {

  const handleSubmit = (category: string) => {
    return function(data: any) {
      console.log(data, category);
    }
  };

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
          <Catering submitCb={handleSubmit('cattering')} />
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
