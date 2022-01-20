import "../styles/App.scss";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Header from "./Header";
import LetrasFalladas from "./LetrasFalladas";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import Form from "./Form";

function App() {
  // ESTADO
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [word, setWord] = useState("");
  const [wordLetters, setWordLetters] = useState([]);

  // API
  useEffect(() => {
    callToApi().then((responseData) => {
      setWord(responseData);
      setWordLetters(responseData.split(""));
    });
  }, []);

  // MANEJADORAS
  const changeLastLetter = (value) => {
    const valueInput = value.toLowerCase(); // Recogemos el valor de la letra pulsada
    if (valueInput.match("^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$")) {
      setLastLetter(valueInput); // La validamos y la guardamos en la variable estado lastLetter

      if (!word.includes(valueInput)) {
        // Si nuestra palabra no contiene la letra pulsada, aumentamos el numero de errores
        renderError();
      }
      if (valueInput !== "") {
        //guardamos la letra introducida en el array userLetters
        setUserLetters([...userLetters, valueInput]);
      }
      // setLastLetter("");
    }
  };

  // RENDER
  const renderError = () => {
    // Incrementamos el numero de errores al fallar letra
    // Interpolamos la variable estado numberOfErrors en la clase css que pinta el ahorcado
    if (numberOfErrors <= 14) {
      setNumberOfErrors(numberOfErrors + 1);
    }
  };

  // REACT RENDER HTML
  return (
    <div className="page">
      <Header />
      {/* <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header> */}
      <main className="main">
        <section>
          <SolutionLetters
            userLetters={userLetters}
            wordLetters={wordLetters}
          />
          {/* <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">{renderSolutionLetters()}</ul>
          </div> */}
          <LetrasFalladas userLetters={userLetters} wordLetters={wordLetters} />

          <Form lastLetter={lastLetter} changeLastLetter={changeLastLetter} />
        </section>
        <Dummy numberOfErrors={numberOfErrors} />
      </main>
    </div>
  );
}

export default App;
