import React from 'react';
import '../styles.css'; 

function Formulario() {
  return (
    <form className="formulario">
      <label>
        Nome:
        <input type="text" name="nome" className="input" />
      </label>
      <label>
        Email:
        <input type="email" name="email" className="input" />
      </label>
      <button type="submit" className="botao">Enviar</button>
    </form>
  );
}

export default Formulario;