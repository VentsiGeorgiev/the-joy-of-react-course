import { createContext, useEffect, useRef, useState } from "react";

const ToasterContext = createContext(null);
const TOAST_DURATION = 10000;

export function ToasterProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const timeoutIdsRef = useRef(new Map());

  function removeToast(toastId) {
    const timeoutId = timeoutIdsRef.current.get(toastId);

    if (timeoutId) {
      window.clearTimeout(timeoutId);
      timeoutIdsRef.current.delete(toastId);
    }

    setToasts((currentToasts) =>
      currentToasts.filter(({ id }) => id !== toastId),
    );
  }

  function addToast({ message, variant }) {
    const nextToast = {
      id: crypto.randomUUID(),
      message,
      variant,
      duration: TOAST_DURATION,
    };

    setToasts((currentToasts) => [nextToast, ...currentToasts]);

    const timeoutId = window.setTimeout(() => {
      removeToast(nextToast.id);
    }, TOAST_DURATION);

    timeoutIdsRef.current.set(nextToast.id, timeoutId);

    return nextToast.id;
  }

  function clearToasts() {
    timeoutIdsRef.current.forEach((timeoutId) => {
      window.clearTimeout(timeoutId);
    });

    timeoutIdsRef.current.clear();
    setToasts([]);
  }

  useEffect(() => {
    const timeoutIds = timeoutIdsRef.current;

    return () => {
      timeoutIds.forEach((timeoutId) => {
        window.clearTimeout(timeoutId);
      });

      timeoutIds.clear();
    };
  }, []);

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
