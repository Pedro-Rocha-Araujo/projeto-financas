import React, {useState} from "react"
import './App.css';
import Header from "./pagina/Header"
import Footer from "./pagina/Footer"
import Preview from "./Preview"
import Inputs from "./Inputs"
import Tabela from "./Tabela"

function App() {
  const [listaFinancas, setListaFinancas] = useState([])

  function adcionar(novaFinanca) {
    setListaFinancas((prevValue)=>{
      return [...prevValue, novaFinanca]
    })
  }

  let entradas = 0
  let saidas = 0
  for(let c = 0; c < listaFinancas.length; c++){
    if(listaFinancas[c].tipo === "entrada"){
      entradas = entradas + Number(listaFinancas[c].valor)
    }else{
      saidas = saidas + Number(listaFinancas[c].valor)
    }
  }

  const total = entradas - saidas

  return (
    <div className='main'>
      <Header />
      <main>
        <section>
          <Preview entradas={entradas} saidas={saidas} total={total} />
          <Inputs onAdd={adcionar} />
          <Tabela />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
