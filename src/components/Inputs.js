import React, {useState} from "react"

function Inputs(props) {
    const [dados, setDados] = useState({
        descricao: "",
        valor: "",
        tipo: ""
    })
    function capturarMudanca(e) {
        let nameInput = e.target.name
        let valueInput = e.target.value
        setDados((prevValue)=>{
            return {
                ...prevValue,
                [nameInput]: valueInput
            }
        })
    }
    function enviarDados(e) {
        e.preventDefault()
        props.onAdd(dados)
        setDados({
            descricao: "",
            valor: "",
            tipo: ""
        })
    }
    return (    
        <article className="inputs">
            <form onSubmit={enviarDados}>
                <div className="campo_input">
                    <label className="inputs-maiores">Descrição </label>
                    <input 
                        name="descricao" 
                        value={dados.descricao} 
                        type="text" required
                        onChange={capturarMudanca} />
                </div>
                <div className="campo_input">
                    <label className="inputs-maiores">Valor </label>
                    <input 
                        name="valor" 
                        value={dados.valor} 
                        type="number" required
                        onChange={capturarMudanca} />
                </div>
                <div className="campo_input">
                    <label> Entrada </label>
                    <input name="tipo" value="entrada" type="radio" required onChange={capturarMudanca} />
                    <label> Saída </label>
                    <input name="tipo" value="saida" type="radio" required onChange={capturarMudanca} />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </article>
    )
}

export default Inputs