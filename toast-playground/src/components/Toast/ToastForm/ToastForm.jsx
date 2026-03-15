import { useState } from "react";
import { RadioInput } from "../RadioInput";
import { useToaster } from "../context/useToaster";
import style from "./ToastForm.module.css";

function ToastForm() {
  const { addToast } = useToaster();
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("notice");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    addToast({
      message: trimmedMessage,
      variant,
    });

    setMessage("");
    setVariant("notice");
  }

  return (
    <section className={style.formContainer}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.inputWrapper}>
          <h3>Message:</h3>
          <label className={style.inputRow}>
            <textarea
              name="message-text"
              id="message-text"
              className={style.textAreaInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
        </div>
        <div className={style.inputWrapper}>
          <h3>Variants:</h3>
          <div className={style.inputRow}>
            <RadioInput
              value={variant}
              onChange={(event) => setVariant(event.target.value)}
            />
          </div>
        </div>
        <button type="submit" className={style.submitButton}>
          Pop message!
        </button>
      </form>
    </section>
  );
}
export default ToastForm;
