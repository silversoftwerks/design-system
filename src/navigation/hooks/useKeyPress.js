import { useState, useEffect } from "react";
export const useKeyPress = pressedKey => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const handleKeyDown = ({ key }) => {
    if (key == pressedKey)
      setIsKeyPressed(true);
  };
  const handleKeyUp = ({ key }) => {
    if (key == pressedKey)
      setIsKeyPressed(false);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return isKeyPressed;
};
