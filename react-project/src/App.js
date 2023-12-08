import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Table from "./components/Table/Table";
import Card from "./components/Card/Card";
import AddWord from "./components/AddWord/AddWord";
import classnames from "classnames";
import "./App.css";

const App = () => {
  const [tema, setTema] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  function handleClosePopup() {
    navigate("/");
  }
  const clickPopup = () => setIsOpen(!isOpen);
  const toggleTema = () => {
    setTema(tema === "light" ? "dark" : "light");
  };
  const ChangeThemeStyle = classnames("app", tema);
  return (
    <div className={ChangeThemeStyle}>
      <Header tema={tema} toggleTema={toggleTema} clickPopup={clickPopup} />
      <Routes>
        <Route exact path="/" element={<Table />} />
        <Route
          exact
          path="/game"
          element={<Card clickPopup={handleClosePopup} />}
        />
        <Route
          exact
          path="/new"
          element={<AddWord clickPopup={handleClosePopup} />}
        />
        <Route exact path="/" />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

function NotFound() {
  const navigate = useNavigate();
  function callBack() {
    navigate("/");
  }
  return (
    <>
      <h2>Страница не найдена</h2>
      <button onClick={callBack}>Вернуться на главную станицу</button>
    </>
  );
}

export default App;
