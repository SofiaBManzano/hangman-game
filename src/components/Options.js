const Options = (props) => {
  const handleNewWordChange = (ev) => {
    props.updateWord(ev.currentTarget.value);
  };
  return (
    <form onSubmit={(ev) => ev.preventDefault()}>
      <label className="title" htmlFor="word">
        Escribe aquí la palabra que hay que adivinar:
      </label>
      <input
        autoFocus
        autoComplete="off"
        className="form__input"
        maxLength="15"
        type="text"
        id="word"
        name="word"
        value={props.word}
        onChange={handleNewWordChange}
      />
    </form>
  );
};

export default Options;
