import { SubmitHandler, useForm } from "react-hook-form";
import { ServicesAndMaterialsFormInputs } from "../../types/form";
import { Field } from "./field";
import { useMultistep } from "../components/multi-step";

type ServicesAndMaterialsProps = {
  submitCb: (data: ServicesAndMaterialsFormInputs) => void;
}

export function ServicesAndMaterials({ submitCb }: ServicesAndMaterialsProps) {
  const { register, handleSubmit } = useForm<ServicesAndMaterialsFormInputs>();
  const { previous, next } = useMultistep();

  const onSubmit: SubmitHandler<ServicesAndMaterialsFormInputs> = async (data: ServicesAndMaterialsFormInputs) => {
    submitCb(data);
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Cardboard" name="cardboard" placeholder="Quantity in kg" register={register} />
      <Field label="Iron" name="iron" placeholder="Quantity in kg" register={register} />
      <Field label="Steel" name="steel" placeholder="Quantity in kg" register={register} />
      <Field label="Glass" name="glass" placeholder="Quantity in kg" register={register} />
      <Field label="Plastic" name="plastic" placeholder="Quantity in kg" register={register} />
      <Field label="Paper" name="paper" placeholder="Quantity in kg" register={register} />

      <div className="flex justify-between">
        <button type="button" className="bg-blue-500 text-white rounded p-2" onClick={() => previous()}>Previous</button>
        <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
      </div>
    </form>
  )
}


