import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Badge } from "../../components/Badge/Badge";
import { useEffect, useId, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants";
import cls from "./QuestionPage.module.css";
import { Loader, LoaderUpdCard } from "../../components/Loader";

export const QuestionPage = () => {
  const checkboxId = useId();
  const navigate = useNavigate();
  const params = useParams();
  const [card, setCard] = useState(null);
  const [isChecked, setIsChecked] = useState(true);

  const levelVariant = () => (card.level === 1 ? "primary" : card.level === 2 ? "warning" : "alert");
  const completedVariant = () => (card.completed ? "success" : "alert");

  const [fetchCard, isCardLoading] = useFetch(async () => {
    const response = await fetch(`${API_URL}/react/${params.id}`);
    const data = await response.json();

    setCard(data);
  });

  useEffect(() => {
    fetchCard();
  }, []);

  const [updateCard, isCardUpdating] = useFetch(async (isChecked) => {
    const response = await fetch(`${API_URL}/react/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: isChecked }),
    });
    const data = await response.json();

    setCard(data);
  });

  useEffect(() => {
    card !== null && setIsChecked(card.completed);
  }, [card]);

  const onCheckboxChangeHandler = () => {
    setIsChecked(!isChecked);
    updateCard(!isChecked);
  };

  return (
    <>
      {isCardLoading && <Loader />}

      {card !== null && (
        <div className={cls.cardConteiner}>
          <div className={cls.cardLabels}>
            <Badge variant={levelVariant()}>Level: {card.level}</Badge>
            <Badge variant={completedVariant()}>{card.completed ? "Completed" : "Not completed"}</Badge>
            {card?.editDate && <p className={cls.editDateCard}>Edited: {card.editDate}</p>}
          </div>

          <h5 className={cls.cardTitle}>{card.question}</h5>
          <p className={cls.cardDescription}>{card.description}</p>

          <div className={cls.cardAnswers}>
            <label>short answer:</label>
            <p className={cls.cardAnswer}>{card.answer}</p>
          </div>

          <ul className={cls.cardLinks}>
            Resources:
            {card.resources.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.trim()} target="_black" rel="noreferrer">
                    {link.trim()}
                  </a>
                </li>
              );
            })}
          </ul>

          <label htmlFor={checkboxId} className={cls.cardCheckbox}>
            <input
              type="checkbox"
              id={checkboxId}
              className={cls.checkbox}
              checked={isChecked}
              onChange={onCheckboxChangeHandler}
              disabled={isCardUpdating}
            />
            <span>mark question as completed</span>

            {isCardUpdating && <LoaderUpdCard />}
          </label>

          <div className={cls.cardButton}>
            <Button onClick={() => navigate(`/editquestion/${card.id}`)} isDisabled={isCardUpdating}>
              Edit questions
            </Button>
            <Button onClick={() => navigate(`/`)} isDisabled={isCardUpdating}>
              Back
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
