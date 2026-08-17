import { useState, useEffect} from "react"
import Header from "../elements/Header"
import Footer from "../elements/Footer"
import Preview from "./preview/Preview"
import Inputs from "./inputs/Inputs"
import Tabela from "./listagem/Listagem"

import db from "../../firebaseConnection"
import { getDocs, collection } from "firebase/firestore"

function Home() {
  const [entradas, setEntradas] = useState([])
  const [saidas, setSaidas] = useState([])

  useEffect(()=> {
    async function getFinancas() {
      try {
        const referencia = collection(db, "financas")
        const response = await getDocs(referencia)
        console.log(response)
        const array = response.docs.map((i)=> {
          const dados = i.data()
          return {
            id: i.id,
            descricao: dados.descricao,
            valor: dados.valor,
            tipo: dados.tipo
          }          
        })
        const ent = []
        const sai = []
        array.map((i)=>{
          if(i.tipo === "entrada") {
            ent.push(i)
          } else {
            sai.push(i)
          }
        })
        setEntradas(ent)
        setSaidas(sai)
      } catch(erro) {
        console.log(erro)
      }
    }
    getFinancas()
  }, [])

  return (
    <div className='main'>
      <Header />
      <main>
        <Preview />
        <Inputs />
        <Tabela />
      </main>
      <Footer />
    </div>
  )
}

export default Home