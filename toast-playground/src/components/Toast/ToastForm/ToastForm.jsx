import { RadioInput } from "../RadioInput";
import style from "./ToastForm.module.css";

function ToastForm() {
  return (
    <section className={style.formContainer}>
      <form className={style.form}>
        <div className={style.inputWrapper}>
          <h3>Message:</h3>
          <label className={style.inputRow}>
            Text:
            <textarea
              name="message-text"
              id="message-text"
              className={style.textAreaInput}
            ></textarea>
          </label>
        </div>
        <div className={style.inputWrapper}>
          <h3>Variants:</h3>
          <div className={style.inputRow}>
            <RadioInput />
          </div>
        </div>
        <button type="button" className={style.submitButton}>
          Pop message!
        </button>
      </form>
    </section>
  );
}
export default ToastForm;
