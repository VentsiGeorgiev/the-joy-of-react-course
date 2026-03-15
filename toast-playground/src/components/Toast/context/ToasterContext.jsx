import { createContext, useState } from "react";

const ToasterContext = createContext(null);

export function ToasterProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  function addToast({ message, variant }) {
    const nextToast = {
      id: crypto.randomUUID(),
      message,
      variant,
    };

    setToasts((currentToasts) => [...currentToasts, nextToast]);

    return nextToast.id;
  }

  function removeToast(toastId) {
    setToasts((currentToasts) =>
      currentToasts.filter(({ id }) => id !== toastId)
    );
  }

  function clearToasts() {
    setToasts([]);
  }

  return (
    <ToasterContext.Provider
      value={{
        toasts,
        addToast,
        removeToast,
        clearToasts,
      }}
    >
      {children}
    </ToasterContext.Provider>
  );
}

export default ToasterContext;
