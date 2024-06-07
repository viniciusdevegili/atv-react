import React from 'react';

function Formulario() {
  return (
    <form>
      <label>
        Nome:
        <input type="text" name="nome" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Tema do Aplicativo:
        <input type="text" name="tema" />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default Formulario;