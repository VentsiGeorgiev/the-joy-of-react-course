import style from "./RadioInput.module.css";

const VARIANTS = ["notice", "warning", "success", "error"];

function InputRadio({ value, onChange }) {
  return (
    <>
      {VARIANTS.map((variant) => (
        <label className={style.inputLabel} key={variant}>
          <input
            type="radio"
            name="message-variant"
            id={variant}
            className={style.input}
            value={variant}
            checked={value === variant}
            onChange={onChange}
          />
          {variant[0].toUpperCase() + variant.slice(1)}
        </label>
      ))}
    </>
  );
}
export default InputRadio;
