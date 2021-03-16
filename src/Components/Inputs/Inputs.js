import "./Inputs.css";

const CustomformInput = (props) => {
  return (
    <div className="inputs">
      <label className="label_field_indicator">{props.label}</label>

      <input
        type={props.type}
        className="form-control "
        value={props.value}
        placeholder={props.placeholder}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      ></input>
    </div>
  );
};
export default CustomformInput;
