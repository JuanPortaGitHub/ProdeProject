import { useContext } from "react";
import ToastContext from "../context/toastContext";

export default function useToastContext() {
  return useContext(ToastContext);
}
