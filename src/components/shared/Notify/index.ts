import { toast } from "react-toastify";

export const success = (message: string) => {
    toast(message, {
        position: "bottom-right",
        autoClose: 3000,
        type: "default", // "info", "success", "warning", "error"
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", // "ligth", "colored"
    });
  }

  export const error = (message: string) => {
    toast(message, {
        position: "bottom-right",
        autoClose: 3000,
        type: "error", // "info", "success", "warning", "error"
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark", // "ligth", "colored"
    });
  }