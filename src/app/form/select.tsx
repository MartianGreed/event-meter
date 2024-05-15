import { Path, UseFormRegister } from "react-hook-form";

type SelectProps<T> = {
  name: Path<string>;
  label: string;
  register: UseFormRegister<T>;
}
export function Select<T>({ label, name, register, children }: React.PropsWithChildren<SelectProps<T>>) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...register(name)}>{children}</select>
    </div>
  );
}
