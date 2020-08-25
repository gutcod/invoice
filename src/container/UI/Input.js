import React from "react";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const inputType = props.type || "text";

  const htmlFor = `${inputType}-${Math.random()}`;

  return (
    <div>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        className="form-control"
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите верное значение"}</span>
      ) : null}
    </div>
  );
};

export default Input;
