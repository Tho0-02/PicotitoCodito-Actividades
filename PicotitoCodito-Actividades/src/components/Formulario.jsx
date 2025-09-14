import { useState } from 'react';
import '../App.css';

function Formulario() {
  const [texto, setTexto] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() !== "") {
      alert(`Ingresaste: ${texto}`);
      setTexto(""); 
    } else {
      alert("Por favor ingresá un texto antes de enviar.");
    }
  };

  return (
    <div className="section">
      <h2>Formulario </h2>
      <form onSubmit={manejarSubmit} className="form">
        <label htmlFor="formText" className="label">Escribe algo:</label>
        <input
          type="text"
          id="formText"
          className="input"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Escribe algo bonito..."
        />
        <button type="submit" className="btn">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
