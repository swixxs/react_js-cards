import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<div>main component ❤️</div>} />
          <Route path="/forbidder" element={<div>forbidder 😎</div>} />
          <Route path="/addquestion" element={<div>addquestion 🙋🏼‍♀️</div>} />
          <Route path="/question/:id" element={<div>question ❓</div>} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
