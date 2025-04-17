import { useState, useEffect, useMemo } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { API_URL } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
import cls from "./HomePage.module.css";
import { SearchInput } from "../../components/SearchInput";

export const HomePage = () => {
  const [questions, setQuestions] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortSelectValue, setSortSelectValue] = useState("");

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  const cards = useMemo(() => {
    return questions.filter((d) => d.question.toLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
  }, [questions, searchValue]);

  useEffect(() => {
    getQuestions(`react?${sortSelectValue}`);
  }, [sortSelectValue]);

  const onSearchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const onSortSelectChagneHandler = (e) => {
    setSortSelectValue(e.target.value);
  };

  return (
    <>
      <div className={cls.controlsContainer}>
        <SearchInput value={searchValue} onChange={onSearchValueHandler} />

        <select value={sortSelectValue} onChange={onSortSelectChagneHandler} className={cls.select}>
          <option value="">Sort by:</option>
          <hr />
          <option value="_sort=level">Level ASC</option>
          <option value="_sort=-level">Level DESC</option>
          <option value="_sort=completed">Completed ASC</option>
          <option value="_sort=-completed">Completed DESC</option>
        </select>
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {cards.length === 0 && <p className={cls.noCardsInfo}>No cards...</p>}

      <QuestionCardList cards={cards} />
    </>
  );
};
