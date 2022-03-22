import React from "react";
import "./form-input.styles.scss";

type FormInputProps = {
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  label: string;
  type: "email" | "password" | "text" | "confirmPassword";
  name: string;
  value: string;
  required: boolean;
};

const FormInput = ({ handleChange, label, ...otherProps }: FormInputProps) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
