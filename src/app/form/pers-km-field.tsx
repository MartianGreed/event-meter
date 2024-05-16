import { useMemo } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import styles from "./field.module.css";

type PersKmFieldProps<T> = {
  label: string;
  name: Path<string>;
  // @ts-ignore
  register: UseFormRegister<T>;
}
export function PersKmField<T>({ label, name, register }: PersKmFieldProps<T>) {
  const nameNr = useMemo(() => `${name}Number`, [name])
  const nameKm = useMemo(() => `${name}Km`, [name])
  return (
    <div>
      <header>{label}</header>
      <div className={styles.container}>
        <label className={styles.label} htmlFor={nameNr}>Number of people</label>
        {/*@ts-ignore*/}
        <input className={styles.input} placeholder="Number" id={nameNr} {...register(nameNr)} />
      </div>
      <div className={styles.container}>
        <label className={styles.label} htmlFor={nameKm}>Km sum</label>
        {/*@ts-ignore*/}
        <input className={styles.input} placeholder="Km" id={nameKm} {...register(nameKm)} />
      </div>
    </div>
  )
}
