import React, { useState } from "react";
import Toast from "../components/common/toast";

const ToastContext = React.createContext({
  show: false,
  success: (message: string) => {},
  error: (message: string) => {},
});

export function ToastContextProvider(props) {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    error: false,
  });

  const successToast = (message: string) => {
    setToast({ show: true, message, error: false });
    setTimeout(
      () => setToast({ show: false, message: "", error: false }),
      5000
    );
  };

  const errorToast = (message: string) => {
    setToast({ show: true, message, error: true });
    setTimeout(() => setToast({ show: false, message: "", error: true }), 9000);
  };

  return (
    <ToastContext.Provider
      value={{
        show: toast.show,
        success: successToast,
        error: errorToast,
      }}
    >
      {toast.show && (
        <Toast
          isOpen={toast.show}
          error={toast.error}
          position={{ vertical: "bottom", horizontal: "left" }}
        >
          {toast.message}
        </Toast>
      )}
      {props.children}
    </ToastContext.Provider>
  );
}

export default ToastContext;
