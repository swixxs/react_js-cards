import { useState, useEffect, useMemo, useRef } from "react";
import { QuestionCardList } from "../../components/QuestionCardList";
import { Loader } from "../../components/Loader";
import { API_URL } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
import cls from "./HomePage.module.css";
import { SearchInput } from "../../components/SearchInput";
import { Button } from "../../components/Button";

const DEFAULT_PER_PAGE = 10;

export const HomePage = () => {
  const [questions, setQuestions] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [sortSelectValue, setSortSelectValue] = useState("");
  const [countSelectValue, setCountSelectValue] = useState("");

  const controlsContainerRef = useRef();

  const [searchParams, setSearchParams] = useState(`?_page=1&_per_page=${DEFAULT_PER_PAGE}`);

  const getActivePageNumber = () => (questions.next === null ? questions.last : questions.next - 1);

  const [getQuestions, isLoading, error] = useFetch(async (url) => {
    const response = await fetch(`${API_URL}/${url}`);
    const questions = await response.json();

    setQuestions(questions);
    return questions;
  });

  const cards = useMemo(() => {
    if (questions?.data) {
      if (searchValue.trim()) {
        return questions.data.filter((d) => d.question.toLowerCase().includes(searchValue.trim().toLocaleLowerCase()));
      } else {
        return questions.data;
      }
    }
    return [];
  }, [questions, searchValue]);

  const pagination = useMemo(() => {
    const totalCardCount = questions?.pages || 0;

    return Array(totalCardCount)
      .fill(0)
      .map((_, i) => i + 1);
  }, [questions]);

  useEffect(() => {
    getQuestions(`react${searchParams}`);
  }, [searchParams]);

  const onSearchValueHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const onSortSelectChagneHandler = (e) => {
    setSortSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${countSelectValue}&${e.target.value}`);
  };

  const paginationHandler = (e) => {
    if (e.target.tagName === "BUTTON") {
      setSearchParams(`?_page=${e.target.textContent}&_per_page=${countSelectValue}&${sortSelectValue}`);
      controlsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onCountSelectChagneHandler = (e) => {
    setCountSelectValue(e.target.value);
    setSearchParams(`?_page=1&_per_page=${e.target.value}&${sortSelectValue}`);
  };

  return (
    <>
      <div className={cls.controlsContainer} ref={controlsContainerRef}>
        <SearchInput value={searchValue} onChange={onSearchValueHandler} />

        <select value={sortSelectValue} onChange={onSortSelectChagneHandler} className={cls.select}>
          <option value="">Sort by:</option>
          <hr />
          <option value="_sort=level">Level ASC</option>
          <option value="_sort=-level">Level DESC</option>
          <option value="_sort=completed">Completed ASC</option>
          <option value="_sort=-completed">Completed DESC</option>
        </select>
        <select value={countSelectValue} onChange={onCountSelectChagneHandler} className={cls.select}>
          <option disabled>count:</option>
          <hr />
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>

      {isLoading && <Loader />}
      {error && <p>{error}</p>}

      <QuestionCardList cards={cards} />

      {cards.length === 0 ? (
        <p className={cls.noCardsInfo}>No cards...</p>
      ) : (
        pagination.length > 1 && (
          <div className={cls.paginationWrapper} onClick={paginationHandler}>
            {pagination.map((value) => {
              return (
                <Button key={value} isActive={value === getActivePageNumber()}>
                  {value}
                </Button>
              );
            })}
          </div>
        )
      )}
    </>
  );
};
