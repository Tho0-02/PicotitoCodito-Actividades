import { useState } from 'react';
import '../App.css';

function ListaDeProductos() {
  const [item, setItem] = useState("");
  const [precio, setPrecio] = useState("");
  const [productos, setProductos] = useState([]);

  const agregarProducto = () => {
    if (item.trim() !== "" && precio.trim() !== "" && !isNaN(precio)) {
      const nuevoProducto = { item, precio: parseFloat(precio) };
      setProductos([...productos, nuevoProducto]);
      setItem("");
      setPrecio("");
    } else {
      alert("Completa ambos campos (precio debe ser un número)");
    }
  };

  const total = productos.reduce((acc, p) => acc + p.precio, 0);

  return (
    <div className="section">
      <h2>Lista de Productos</h2>
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Nombre del producto"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="number"
          className="input"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <button className="btn" onClick={agregarProducto}>Agregar</button>
      </div>
      <ul className="list">
        {productos.map((p, i) => (
          <li key={i} className="list-item">
            {p.item} — <strong>${p.precio}</strong>
          </li>
        ))}
      </ul>
      {productos.length > 0 && (
        <p className="preview">
          Total: <strong>${total}</strong>
        </p>
      )}
    </div>
  );
}

export default ListaDeProductos;
