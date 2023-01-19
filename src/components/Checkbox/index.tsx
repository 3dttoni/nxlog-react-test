import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Checkbox.module.scss";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({
  id,
  label,
  ...props
}: CheckboxProps) {
  return (
    <div className={styles.container}>
      <input type="checkbox" id={id} {...props} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
}