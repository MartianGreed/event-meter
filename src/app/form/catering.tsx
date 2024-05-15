import { SubmitHandler, useForm } from "react-hook-form";
import { CateringFormInputs } from "../../types/form";
import { Field } from "./field";

type CateringProps = {
  submitCb: (data: CateringFormInputs) => void;
}

export function Catering({ submitCb }: CateringProps) {
  const { register, handleSubmit } = useForm<CateringFormInputs>();

  const onSubmit: SubmitHandler<CateringFormInputs> = async (data: CateringFormInputs) => {
    submitCb(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Meals" name="meals" register={register} />
      <Field label="Drinks" name="drinks" register={register} />
      <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
    </form>
  )
}

