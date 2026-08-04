import {useState} from "react"
import './app.css';
import Header from "./elements/Header"
import Footer from "./elements/Footer"
import Preview from "./preview/Preview"
import Inputs from "./inputs/Inputs"
import Tabela from "./listagem/Listagem"

function App() {
  const [listaFinancas, setListaFinancas] = useState([])

  function adcionar(novaFinanca) {
    setListaFinancas((prevValue)=>{
      return [...prevValue, novaFinanca]
    })
  }

  function deletar(id) {
    setListaFinancas((prevValue)=>{
      return prevValue.filter((_,i)=>{
        return i !== id
      })
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
          <Preview entradas={entradas} saidas={saidas} total={total} />
          <Inputs onAdd={adcionar} />
          <Tabela onDelete={deletar} lista={listaFinancas} />
      </main>
      <Footer />
    </div>
  );
}

export default App;