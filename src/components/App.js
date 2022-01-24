import "../styles/App.scss";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import Header from "./Header";
import LetrasFalladas from "./LetrasFalladas";
import Dummy from "./Dummy";
import SolutionLetters from "./SolutionLetters";
import Form from "./Form";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import Instructions from "./Instructions";
import Options from "./Options";

function App() {
  // ESTADO
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [word, setWord] = useState("");
  const [wordLetters, setWordLetters] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // API
  useEffect(() => {
    callToApi().then((responseData) => {
      setIsLoading(true);
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

  // UPDATE

  const updateWord = (value) => {
    setWord(value);
    setWordLetters(value.split(""));
    setLastLetter("");
    setUserLetters([]);
    setNumberOfErrors(0);
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
      <main className="main">
        <Switch>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/options">
            <Options word={word} updateWord={updateWord} />
          </Route>
          <Route path="/">
            <section>
              <SolutionLetters
                userLetters={userLetters}
                wordLetters={wordLetters}
                loading={isLoading}
              />
              <LetrasFalladas
                userLetters={userLetters}
                wordLetters={wordLetters}
              />
              <Form
                lastLetter={lastLetter}
                changeLastLetter={changeLastLetter}
              />
            </section>
            <Dummy numberOfErrors={numberOfErrors} />
          </Route>
        </Switch>
      </main>

      <Footer />
    </div>
  );
}

export default App;
