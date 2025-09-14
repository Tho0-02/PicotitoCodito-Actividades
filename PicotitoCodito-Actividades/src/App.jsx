import { useState } from "react";
import "./App.css";

import Txt from "./components/Txt";
import ColorChanger from "./components/ColorChanger";
import Formulario from "./components/Formulario";
import ListaDeProductos from "./components/ListaDeProductos";
import SaludosMultiples from "./components/SaludosMultiples";
import FiltroDeFrutas from "./components/FiltroDeFrutas";
import TotalDePrecios from "./components/TotalDePrecios";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="title">Repasando React</h1>
      <div className="card">
        <button className="btn" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>

      <Txt />
      <ColorChanger />
      <Formulario />
      <ListaDeProductos />
      <SaludosMultiples />
      <FiltroDeFrutas />
      <TotalDePrecios /> 
    </div>
  );
}

export default App;
