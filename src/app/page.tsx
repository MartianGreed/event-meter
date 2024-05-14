"use client";

import { SubmitHandler, useForm } from "react-hook-form"
import { submitForm } from "./actions/submit-form";
import { Inputs } from "../types/form";

export default function Home() {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    console.log('submit');
    const res = await submitForm(data);
    console.log(res);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">EventMeter</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} className="border border-gray-300 rounded p-2 text-black" placeholder="Name" />
        <input {...register('email')} className="border border-gray-300 rounded p-2 text-black" placeholder="Email" />
        <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
      </form>
    </main>
  );
}
