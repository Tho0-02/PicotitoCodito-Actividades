import { useState } from 'react';
import { ChromePicker } from 'react-color';
import './App.css';

function Txt() {
  const [cont, setCount] = useState("");      
  const [TxtList, setTxt] = useState([]);     

  const addTxt = () => {
    if (cont.trim() !== "") {
      setTxt([...TxtList, cont]);
      setCount(""); 
    }
  }

  return (
    <div className="section">
      <h2>Clonador de Texto</h2>
      <label htmlFor="name" className="label">Ingresar Texto:</label>
      <input
        type="text"
        id="name"
        className="input"
        required
        minLength={2}
        maxLength={15}
        size="10"
        value={cont}
        onChange={(e) => setCount(e.target.value)}
        placeholder='Tu textito acá <3'
      />

      <p className="preview">Tu texto actual: <span>{cont}</span></p>

      <button className="btn" onClick={addTxt}> Texto Clonao</button>

      <div className="list">
        {TxtList.map((t, i) => (
          <p key={i} className="list-item">{t}</p>
        ))}
      </div>
    </div>
  );
}

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

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="title"> Repasando React </h1>
      <div className="card">
        <button className="btn" onClick={() => setCount((count) => count + 1)}> 
           count is {count} 
        </button>
      </div>
      <Txt />
      <ColorChanger />
      <Formulario />
    </div>
  );
}

export default App;
