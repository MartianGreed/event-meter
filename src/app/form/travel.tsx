import { SubmitHandler, useForm } from "react-hook-form";
import { TravelFormInputs } from "../../types/form";
import { Field } from "./field";
import { PersKmField } from "./pers-km-field";

type TravelProps = {
  submitCb: (data: TravelFormInputs) => void;
}
export function Travel({ submitCb }: TravelProps) {
  const { register, handleSubmit } = useForm<TravelFormInputs>();

  const onSubmit: SubmitHandler<TravelFormInputs> = async (data: TravelFormInputs) => {
    submitCb(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h4>Land travel</h4>
      <PersKmField label="Car" name="car" register={register} />
      <PersKmField label="Electric car" name="electricCar" register={register} />
      <PersKmField label="Hybrid car" name="hybridCar" register={register} />
      <PersKmField label="Two wheels" name="twoWheelers" register={register} />
      <h4>Air travel</h4>
      <PersKmField label="Short air travel" name="shortAirTravel" register={register} />
      <PersKmField label="Medium air travel" name="mediumAirTravel" register={register} />
      <PersKmField label="Long air travel" name="longAirTravel" register={register} />
      <h4>Public transports travel</h4>
      <PersKmField label="Metro" name="metro" register={register} />
      <PersKmField label="Bus" name="bus" register={register} />
      <PersKmField label="Train in Europe" name="trainEurope" register={register} />
      <PersKmField label="Train in France" name="trainFrance" register={register} />

      <input type="submit" className="bg-blue-500 text-white rounded p-2" value="Submit" />
    </form>
  )
}
