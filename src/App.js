import React from "react";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";
import './assets/index.css';

function App() {
  return (
    <section>
      <FormularioCadastro/>
      <ListaDeNotas/>
    </section>
    );
}
export default App;
