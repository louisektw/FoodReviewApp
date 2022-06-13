import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./App/components/Layout/MainLayout";
import AddReview from "./App/pages/AddReview";
import HomePage from "./App/pages/Home";
import LoginPage from "./App/pages/Login";

export interface IAppProps {}
const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="add-review" element={<AddReview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
