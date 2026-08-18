import { useState, useEffect} from "react"
import Header from "../elements/Header"
import Footer from "../elements/Footer"
import Preview from "./preview/Preview"
import Inputs from "./inputs/Inputs"
import Tabela from "./listagem/Listagem"

import { db } from "../../firebaseConnection"
import { getDocs, onSnapshot, collection } from "firebase/firestore"

function Home() {
  const [entradas, setEntradas] = useState([])
  const [saidas, setSaidas] = useState([])

  useEffect(()=> {
    async function getFinancas() {
      try {
        const referencia = collection(db, "financas")
        const response = await onSnapshot(referencia, (snapshot)=>{
          const array = snapshot.docs.map((snap)=>{
            return {
              id: snap.id,
              descricao: snap.data().descricao,
              valor: snap.data().valor,
              tipo: snap.data().tipo
            }
          })
          const ent = array.filter((i)=> i.tipo === "entrada")
          const sai = array.filter((i)=> i.tipo === "saida")
          setEntradas(ent)
          setSaidas(sai)
        })     
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