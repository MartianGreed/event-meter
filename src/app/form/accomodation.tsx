import { SubmitHandler, useForm } from "react-hook-form";
import { AccomodationFormInputs } from "../../types/form";
import { Field } from "./field";
import { useMultistep } from "../components/multi-step";

type AccomodationProps = {
  submitCb: (data: AccomodationFormInputs) => void;
}

export function Accomodation({ submitCb }: AccomodationProps) {
  const { register, handleSubmit } = useForm<AccomodationFormInputs>();
  const { previous, next } = useMultistep();

  const onSubmit: SubmitHandler<AccomodationFormInputs> = async (data: AccomodationFormInputs) => {
    submitCb(data);
    next();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Total reservations" name="totalReservations" placeholder="Units" register={register} />

      <div className="flex justify-between">
        <button type="button" className="bg-blue-500 text-white rounded p-2" onClick={() => previous()}>Previous</button>
        <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
      </div>
    </form>
  )
}

