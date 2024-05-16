import { SubmitHandler, useForm } from "react-hook-form";
import { CateringFormInputs } from "../../types/form";
import { Field } from "./field";
import { useMultistep } from "../components/multi-step";

type CateringProps = {
  submitCb: (data: CateringFormInputs) => void;
}

export function Catering({ submitCb }: CateringProps) {
  const { register, handleSubmit } = useForm<CateringFormInputs>();
  const { previous, next } = useMultistep();

  const onSubmit: SubmitHandler<CateringFormInputs> = async (data: CateringFormInputs) => {
    submitCb(data)
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Meals" name="meals" placeholder="Units" register={register} />
      <Field label="Drinks" name="drinks" placeholder="Units" register={register} />

      <div className="flex justify-between">
        <button type="button" className="bg-blue-500 text-white rounded p-2" onClick={() => previous()}>Previous</button>
        <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
      </div>
    </form>
  )
}

