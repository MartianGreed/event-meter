import { Path, UseFormRegister } from "react-hook-form";
import styles from "./field.module.css";

type FieldProps<T> = {
  label: string;
  name: Path<string>;
  placeholder?: string;
  register: UseFormRegister<T>;
}
export function Field<T>({ label, name, placeholder, register }: FieldProps<T>) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name as string}>{label}</label>
      <input className={styles.input} id={name as string} {...register(name)} placeholder={placeholder} />
    </div>
  );
}
