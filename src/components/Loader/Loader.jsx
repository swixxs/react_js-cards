import cls from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={cls.packdrop}>
      <span className={cls.loader}></span>
    </div>
  );
};

export const LoaderUpdCard = () => {
  return <span className={cls.loaderUpdCard}></span>;
};
