const SolutionLetters = (props) => {
  const renderSolutionLetters = () => {
    // Mapeo ee array wordLetters
    return props.wordLetters.map((letter, index) => {
      if (props.userLetters.includes(letter)) {
        // Si encuentro la letra la pinto
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        // Si no la encuentra solo se pinta el guión bajo
        return <li key={index} className="letter"></li>;
      }
    });
  };

  return (
    <div className="solution">
      <h2 className="title">Solución:</h2>
      <ul className="letters">{renderSolutionLetters()}</ul>
    </div>
  );
};
export default SolutionLetters;
