import { useMemo } from "react";
import { Path, UseFormRegister } from "react-hook-form";

type PersKmFieldProps<T> = {
  label: string;
  name: Path<string>;
  register: UseFormRegister<T>;
}
export function PersKmField<T>({ label, name, register }: PersKmFieldProps<T>) {
  const nameNr = useMemo(() => `${name}Number`, [name])
  const nameKm = useMemo(() => `${name}Km`, [name])
  return (
    <div>
      <header>{label}</header>
      <div>
        <label htmlFor={nameNr}>Number of people</label>
        <input id={nameNr} {...register(nameNr)} />
      </div>
      <div>
        <label htmlFor={nameKm}>Km sum</label>
        <input id={nameKm} {...register(nameKm)} />
      </div>
    </div>
  )
}
