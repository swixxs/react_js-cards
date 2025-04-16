import { Button } from "../Button";
import Reactlogo from "../../assets/react.svg";
import cls from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={cls.header}>
      <p onClick={() => navigate("/")}>
        <img src={Reactlogo} alt="react logo" />
        <span>ReactCards</span>
      </p>

      <div className={cls.headerButtons}>
        <Button onClick={() => navigate("addquestion")} isActive>
          Add
        </Button>
        <Button>Login</Button>
      </div>
    </header>
  );
};
