import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="/main" element={<div>main component ❤️</div>} />
          <Route path="/forbidder" element={<div>forbidder 😎</div>} />
          <Route path="/addquestion" element={<div>addquestion 🙋🏼‍♀️</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
