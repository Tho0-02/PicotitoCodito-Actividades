import { useState } from 'react';
import '../App.css';

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

export default Txt;
