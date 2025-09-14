import { useState } from 'react';
import '../App.css';

function FiltroDeFrutas() {
  const [frutas] = useState([
    "Manzana",
    "Banana",
    "Naranja",
    "Pera",
    "Sandía",
    "Uva",
    "Kiwi",
    "Mango",
    "Frutilla",
    "Limón"
  ]);
  const [filtro, setFiltro] = useState("");

  const frutasFiltradas = frutas.filter(f =>
    f.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="section">
      <h2>Filtrar Frutas</h2>
      <input
        type="text"
        className="input"
        placeholder="Filtra frutas..."
        value={filtro}
        onChange={e => setFiltro(e.target.value)}
      />
      <ul className="list">
        {frutasFiltradas.map((fruta, i) => (
          <li key={i} className="list-item">{fruta}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltroDeFrutas;
