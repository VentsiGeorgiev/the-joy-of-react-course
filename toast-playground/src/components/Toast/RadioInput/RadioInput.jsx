import style from "./RadioInput.module.css";

const VARIANTS = ["notice", "warning", "success", "error"];

function InputRadio() {
  return (
    <>
      {VARIANTS.map((variant, index) => (
        <label className={style.inputLabel} key={index}>
          <input
            type="radio"
            name="message-variant"
            id={`${variant}${index}`}
            className={style.input}
          />
          {variant}
        </label>
      ))}
    </>
  );
}
export default InputRadio;
