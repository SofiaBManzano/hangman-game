const Instructions = () => {
  return (
    <section className="instructions">
      <p>
        Usando una fila de guiones, se representa la palabra a adivinar, dando
        el número de letras, números y categoría. Si le jugadorx adivinadorx
        sugiere una letra o número que aparece en la palabra, le otrx jugadorx
        la escribe en todas sus posiciones correctas. Si la letra o el número
        sugerido no ocurre en la palabra, le otrx jugadorx saca un elemento de
        la figura de hombre palo ahorcado como una marca de conteo.
      </p>
      <p>
        En la pestaña "más opciones" de abajo, le usuarix podrá proponer una
        palabra propia con la jugar contra el rival. ¡A jugar!
      </p>
    </section>
  );
};
export default Instructions;
