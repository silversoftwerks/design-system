import { useEffect } from "react";
export const useKeyHandler = keyHandler => {
  useEffect(() => {
    window.addEventListener("keypress", keyHandler);
    return () => {
      window.removeEventListener("keypress", keyHandler);
    };
  }, []);
};
