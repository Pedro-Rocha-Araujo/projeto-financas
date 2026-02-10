import React from "react"

function Inputs() {
    return (
        <article className="inputs">
            <form>
                <div className="campo_input">
                    <label className="inputs-maiores">Descrição </label>
                    <input type="text" />
                </div>
                <div className="campo_input">
                    <label className="inputs-maiores">Valor </label>
                    <input type="number" />
                </div>
                <div className="campo_input">
                    <label> Entrada </label>
                    <input name="tipo" type="radio" />
                    <label> Saída </label>
                    <input name="tipo" type="radio" />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </article>
    )
}

export default Inputs