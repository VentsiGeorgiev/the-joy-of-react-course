import { useToaster } from "../context/useToaster";
import style from "./ToastMessage.module.css";

const COLOR_BY_VARIANT = {
  notice: style.notice,
  warning: style.warning,
  success: style.success,
  error: style.error,
};

function ToastMessage() {
  const { toasts, removeToast } = useToaster();

  if (toasts.length === 0) {
    return null;
  }

  return (
    <section
      className={style.wrapper}
      aria-live="polite"
      aria-label="Toast messages"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${style.toast} ${COLOR_BY_VARIANT[toast.variant]}`}
          style={{ "--duration": `${toast.duration}ms` }}
        >
          <div>
            <p className={style.message}>{toast.message}</p>
          </div>
          <button
            type="button"
            className={style.dismissButton}
            onClick={() => removeToast(toast.id)}
            aria-label={`Dismiss ${toast.variant} toast`}
          >
            Dismiss
            <span className={style.timerBar} aria-hidden="true" />
          </button>
        </div>
      ))}
    </section>
  );
}

export default ToastMessage;
