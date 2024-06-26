import { Path, UseFormRegister } from "react-hook-form";
import styles from './field.module.css';

type SelectProps<T> = {
  name: Path<string>;
  label: string;
  // @ts-ignore
  register: UseFormRegister<T>;
}
export function Select<T>({ label, name, register, children }: React.PropsWithChildren<SelectProps<T>>) {
  return (
    <div className={styles.container}>
      {/*@ts-ignore*/}
      <label className={styles.label} htmlFor={name}>{label}</label>
      {/*@ts-ignore*/}
      <select className={styles.input} name={name} id={name} {...register(name)}>{children}</select>
    </div>
  );
}
