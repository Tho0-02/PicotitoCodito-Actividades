import { useState } from 'react';
import '../App.css';

function TotalDePrecios() {
  const [precios] = useState([120, 55.5, 300, 99.99, 45, 210]);
  const total = precios.reduce((acc, precio) => acc + precio, 0);

  return (
    <div className="section">
      <h2>Total de Precios</h2>
      <ul className="list">
        {precios.map((p, i) => (
          <li key={i} className="list-item">${p}</li>
        ))}
      </ul>
      <p className="preview">
        Total acumulado: <strong>${total.toFixed(2)}</strong>
      </p>
    </div>
  );
}

export default TotalDePrecios;
