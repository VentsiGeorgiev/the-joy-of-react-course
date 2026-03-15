import { ToastForm } from "../ToastForm";
import { ToasterProvider } from "../context/ToasterContext";
import { ToastMessage } from "../ToastMessage";

function ToastPlayground() {
  return (
    <ToasterProvider>
      <ToastMessage />
      <ToastForm />
    </ToasterProvider>
  );
}
export default ToastPlayground;
