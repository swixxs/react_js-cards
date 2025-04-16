import {} from "react";

const items = [
  {
    task: "learn react",
    icon: "📖",
    isCompleted: false,
  },
  {
    task: "learn javascript",
    icon: "📒",
    isCompleted: true,
  },
  {
    task: "learn typescript",
    icon: "📘",
    isCompleted: false,
  },
];

export const List = () => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <section key={index} className={item.isCompleted ? "completed" : ""}>
            <span>{item.task}</span>
            <span>{item.icon}</span>
          </section>
        );
      })}
    </div>
  );
};
