import { SubmitHandler, useForm } from "react-hook-form";
import { LogisticsFormInputs } from "../../types/form";
import { Field } from "./field";
import { Select } from "./select";

type LogisticsProps = {
  submitCb: (data: LogisticsFormInputs) => void;
}

export function Logistics({ submitCb }: LogisticsProps) {
  const { register, handleSubmit } = useForm<LogisticsFormInputs>();

  const onSubmit: SubmitHandler<LogisticsFormInputs> = async (data: LogisticsFormInputs) => {
    submitCb(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <Select label="Vehicule" name="vehicule" register={register}>
        <option value="van">Van</option>
        <option value="semi-trailer">Semi Trailer</option>
      </Select >
      <Field label="Transport of fittings and decoration" name="decoration" register={register} />
      <Field label="Transport of cattering products" name="cattering" register={register} />
      <Field label="Transport of communication media" name="communication" register={register} />
      <Field label="Transport of other goods" name="other" register={register} />
      <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
    </form>
  )
}
