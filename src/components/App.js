import "../styles/App.scss";
import { useState } from "react";

function App() {
  // Variables estado
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState("");
  //const [correctLetters, setCorrectLetters] = useState([]); // Tiene que ser una variable estado porque luego voy a pintarla?
  const [userLetters, setUserLetters] = useState([]); // Tiene que ser una variable estado porque luego voy a pintarla?

  // Variables normales
  const word = "pepino";
  //const [wordArray, setWordArray] = useState("word.split('')");
  // Incrementamos el numero de errores al fallar letra
  // Interpolamos la variable estado numberOfErrors en la clase css que pinta el ahorcado
  const renderError = () => {
    if (numberOfErrors <= 14) {
      setNumberOfErrors(numberOfErrors + 1);
    }
  };

  const handleLastLetter = (ev) => {
    // Recogemos el valor de la letra pulsada
    const valueInput = ev.target.value.toLowerCase();
    if (valueInput.match("^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$")) {
      // la guardamos en la variable estado lastLetter
      setLastLetter(valueInput);
      if (word.includes(valueInput)) {
        // Solo si la letra valida esta contenida en nuestra palabra
        // La guardamos en el array de letras correctas?
        //setCorrectLetters([...correctLetters, valueInput]);
      } else {
        // Si nuestra palabra no contiene la letra pulsada
        // Aumentamos el numero de errores
        renderError();
      }
      //guardamos cada letra q se mete en el input en un nuevo array
      setUserLetters([...userLetters, valueInput]);
    }
  };
  const renderErrorLetters = () => {
    userLetters.filter((letter) => letter === word.split(""));
  };
  const renderSolutionLetters = () => {
    //transformo word en un array y lo meto en una constante
    const wordLetters = word.split("");
    //recorro el array y me devuelve los li con cada letra del array

    return wordLetters.map((letter, index) => {
      if (userLetters.includes(letter)) {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  // React renderiza/re-renderiza...
  return (
    <div className="page">
      <header>
        <h1 className="header__title">Juego del ahorcado</h1>
      </header>
      <main className="main">
        <section>
          <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
              {/*               <li className="letter">k</li>
              <li className="letter">a</li>
              <li className="letter"></li>
              <li className="letter">a</li>
              <li className="letter">k</li>
              <li className="letter">r</li>
              <li className="letter"></li>
              <li className="letter">k</li>
              <li className="letter">e</li>
              <li className="letter">r</li> */}
            </ul>
          </div>
          <div className="error">
            <h2 className="title">Letras falladas:</h2>
            <ul className="letters">
              {renderErrorLetters()}
              {/*   <li className="letter">f</li>
              <li className="letter">q</li>
              <li className="letter">h</li>
              <li className="letter">p</li>
              <li className="letter">x</li>*/}
            </ul>
          </div>
          <form className="form">
            <label className="title" htmlFor="last-letter">
              Escribe una letra:
            </label>
            <input
              autoComplete="off"
              className="form__input"
              maxLength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              value={lastLetter}
              onChange={handleLastLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className="error-13 eye"></span>
          <span className="error-12 eye"></span>
          <span className="error-11 line"></span>
          <span className="error-10 line"></span>
          <span className="error-9 line"></span>
          <span className="error-8 line"></span>
          <span className="error-7 line"></span>
          <span className="error-6 head"></span>
          <span className="error-5 line"></span>
          <span className="error-4 line"></span>
          <span className="error-3 line"></span>
          <span className="error-2 line"></span>
          <span className="error-1 line"></span>
        </section>
      </main>
    </div>
  );
}

export default App;
