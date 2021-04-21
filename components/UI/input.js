import React from "react";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className="text-xl">
      <label htmlFor={props.input.id}>{props.label}</label>
      <input className=" ml-4 border text-center " ref={ref} {...props.input} />
    </div>
  );
});
export default Input;
