import reactLogo from "./assets/react.svg";
import { Counter } from "./Counter";
import { List } from "./List";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <hr />
      <Counter />
      <hr />
      <List />
    </>
  );
}

export default App;
