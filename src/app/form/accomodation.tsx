import { SubmitHandler, useForm } from "react-hook-form";
import { AccomodationFormInputs } from "../../types/form";
import { Field } from "./field";

type AccomodationProps = {
  submitCb: (data: AccomodationFormInputs) => void;
}

export function Accomodation({ submitCb }: AccomodationProps) {
  const { register, handleSubmit } = useForm<AccomodationFormInputs>();

  const onSubmit: SubmitHandler<AccomodationFormInputs> = async (data: AccomodationFormInputs) => {
    submitCb(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field label="Total reservations" name="totalReservations" register={register} />
      <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
    </form>
  )
}

