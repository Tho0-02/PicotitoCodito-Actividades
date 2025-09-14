import { useState } from 'react';
import { ChromePicker } from 'react-color';
import '../App.css';

function ColorChanger() {
  const [color, setColor] = useState("#ffffff"); 

  const cambiarFondo = () => {
    document.body.style.backgroundColor = color;
  }

  return (
    <div className="section">
      <h2>Cambiador de Fondo </h2>
      <p>Elegí un color con la rueda:</p>
      <div className="picker">
        <ChromePicker
          color={color}
          onChange={(c) => setColor(c.hex)}
        />
      </div>
      <button className="btn" onClick={cambiarFondo}>
        Aplicar Fondo
      </button>
    </div>
  );
}

export default ColorChanger;
