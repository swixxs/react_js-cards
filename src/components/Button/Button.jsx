import {} from "react";
import cls from "./Button.module.css";

const isPrimary = true;

export const Button = ({ onClick, children }) => {
  return (
    // <button className={isPrimary ? cls.primary : cls.btn}>Click me!</button>
    <button className={`${cls.btn} ${isPrimary ? cls.primaty : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};
