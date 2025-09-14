import '../App.css';

function Saludo({ nombre }) {
  return <p className="list-item">Hola, {nombre}</p>;
}

function SaludosMultiples() {
  return (
    <div className="section">
      <h2>Saludos</h2>
      <Saludo nombre="Tomi" />
      <Saludo nombre="María" />
      <Saludo nombre="Carlos" />
      <Saludo nombre="Ada Lovelace" />
    </div>
  );
}

export default SaludosMultiples;
