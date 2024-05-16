import { SubmitHandler, useForm } from "react-hook-form";
import { EnergyFormInputs } from "../../types/form";
import { Field } from "./field";
import { useMultistep } from "../components/multi-step";

type EnergyProps = {
  submitCb: (data: EnergyFormInputs) => void;
}

export function Energy({ submitCb }: EnergyProps) {
  const { register, handleSubmit } = useForm<EnergyFormInputs>();
  const { next } = useMultistep();

  const onSubmit: SubmitHandler<EnergyFormInputs> = async (data: EnergyFormInputs) => {
    submitCb(data)
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Electricity" name="electricity" placeholder="Total in kWh" register={register} />
      <Field label="Natural Gas" name="gas" placeholder="Total in kWh" register={register} />
      <Field label="Fuel Oil" name="oil" placeholder="Total in liters" register={register} />
      <Field label="Power" name="generatorPower" placeholder="Kw" register={register} />
      <Field label="Duration of use" name="generatorDuration" placeholder="in hours" register={register} />
      <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
    </form>
  )
}
