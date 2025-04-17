import { useState, useEffect } from "react";
import { QuestionCard } from "../../components/QuestionCard/QuestionCard";
import { API_URL } from "../../constants";
// import cls from "./HomePage.module.css";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await fetch(`${API_URL}/react`);
      if (!response.ok) throw new Error(Error);

      const questions = await response.json();

      setQuestions(questions);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
      {questions.map((card, index) => {
        return <QuestionCard card={card} key={index} />;
      })}
    </>
  );
};
