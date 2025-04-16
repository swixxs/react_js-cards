import { Button } from "../Button";
import Reactlogo from "../../assets/react.svg";
import cls from "./Header.module.css";

export const Header = () => {
  return (
    <header className={cls.header}>
      <p>
        <img src={Reactlogo} alt="react logo" />
        <span>ReactCards</span>
      </p>

      <div className={cls.headerButtons}>
        <Button isActive>Add</Button>
        <Button>Login</Button>
      </div>
    </header>
  );
};
