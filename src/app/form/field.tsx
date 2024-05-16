import { Path, UseFormRegister } from "react-hook-form";

type FieldProps<T> = {
  label: string;
  name: Path<string>;
  placeholder?: string;
  register: UseFormRegister<T>;
}
export function Field<T>({ label, name, placeholder, register }: FieldProps<T>) {
  return (
    <div>
      <label htmlFor={name as string}>{label}</label>
      <input id={name as string} {...register(name)} placeholder={placeholder} />
    </div>
  );
}
