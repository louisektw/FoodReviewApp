import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./App/components/Layout/MainLayout";
import HomePage from "./App/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
