import { useState, useEffect} from "react"
import Header from "../elements/Header"
import Footer from "../elements/Footer"
import Preview from "./preview/Preview"
import Inputs from "./inputs/Inputs"
import Tabela from "./listagem/Listagem"

import { db } from "../../firebaseConnection"
import { onSnapshot, collection } from "firebase/firestore"

function Home() {
  const [entradas, setEntradas] = useState([])
  const [saidas, setSaidas] = useState([])

  useEffect(()=> {
    async function getFinancas() {
      try {
        const token = localStorage.getItem("token")
        if(!token) {
          return null
        }
        const referencia = collection(db, "financas")
        await onSnapshot(referencia, (snapshot)=>{
          const array = snapshot.docs.map((snap)=>{
            return {
              id: snap.id,
              descricao: snap.data().descricao,
              valor: snap.data().valor,
              tipo: snap.data().tipo,
              id_usuario: snap.data().id_usuario
            }
          })
          const ent = array.filter((i)=> i.tipo === "entrada" && i.id_usuario === token)
          const sai = array.filter((i)=> i.tipo === "saida" && i.id_usuario === token)
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
        <Preview entradas={entradas} saidas={saidas} />
        <Inputs />
        <Tabela entradas={entradas} saidas={saidas} />
      </main>
      <Footer />
    </div>
  )
}

export default Home