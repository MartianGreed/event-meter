import { SubmitHandler, useForm } from "react-hook-form";
import { ServicesAndMaterialsFormInputs } from "../../types/form";
import { Field } from "./field";

type ServicesAndMaterialsProps = {
  submitCb: (data: ServicesAndMaterialsFormInputs) => void;
}

export function ServicesAndMaterials({ submitCb }: ServicesAndMaterialsProps) {
  const { register, handleSubmit } = useForm<ServicesAndMaterialsFormInputs>();

  const onSubmit: SubmitHandler<ServicesAndMaterialsFormInputs> = async (data: ServicesAndMaterialsFormInputs) => {
    submitCb(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Cardboard" name="cardboard" register={register} />
      <Field label="Iron" name="iron" register={register} />
      <Field label="Steel" name="steel" register={register} />
      <Field label="Glass" name="glass" register={register} />
      <Field label="Plastic" name="plastic" register={register} />
      <Field label="Paper" name="paper" register={register} />
      <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
    </form>
  )
}


