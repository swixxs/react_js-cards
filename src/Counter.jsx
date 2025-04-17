import { useState, useEffect } from "react";
import { Button } from "./components/Button/Button";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const setCounterHandler = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    //компонент смонтирован/отрендерен
    console.log(`[Монтировние] компонент смонтирован`);

    return () => {
      //функция очистки
      console.log(`[Размонтирован] компонент размонтируется`);
    };
  }, []);

  useEffect(() => {
    //компонент смонтирован/отрендерен
    count !== 0 && console.log(`[Обновление] компонент обновлен`);

    return () => {
      //функция очистки
      console.log(`[Размонтирован] компонент размонтируется`);
    };
  }, [count]);

  return (
    <div>
      <Button onClick={setCounterHandler}>count is {count}</Button>
    </div>
  );
};
