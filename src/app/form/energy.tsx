import { SubmitHandler, useForm } from "react-hook-form";
import { EnergyFormInputs } from "../../types/form";
import { Field } from "./field";

type EnergyProps = {
  submitCb: (data: EnergyFormInputs) => void;
}

export function Energy({ submitCb }: EnergyProps) {
  const { register, handleSubmit } = useForm<EnergyFormInputs>();

  const onSubmit: SubmitHandler<EnergyFormInputs> = async (data: EnergyFormInputs) => {
    submitCb(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Electricity" name="electricity" register={register} />
      <Field label="Natural Gas" name="gas" register={register} />
      <Field label="Fuel Oil" name="oil" register={register} />
      <Field label="Power" name="generatorPower" register={register} />
      <Field label="Duration of use" name="generatorDuration" register={register} />
      <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
    </form>
  )
}
