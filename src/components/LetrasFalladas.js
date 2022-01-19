const LetrasFalladas = (props) => {
  const renderErrorLetters = () => {
    // Filtro las letter de userLetters que NO esten incluidas en wordLetters
    const errorLetters = props.userLetters.filter(
      (letter) => !props.wordLetters.includes(letter)
    );
    // Mapeo el array errorLetters y renderizo la letra fallada
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className="letter">
          {letter}
        </li>
      );
    });
  };
  return (
    <div className="error">
      <h2 className="title">Letras falladas:</h2>
      <ul className="letters">{renderErrorLetters()}</ul>
    </div>
  );
};
export default LetrasFalladas;
