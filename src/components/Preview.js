import React from "react"

function Preview(props) {
    return (
        <article className='preview'>
            <div className='item-preview'>
              <h2>Entradas</h2>
              <p>R$ {props.entrada}</p>
            </div>
            <div className='item-preview'>
              <h2>Saídas</h2>
              <p>R$ {props.saida}</p>
            </div>
            <div className='item-preview'>
              <h2>Situação</h2>
              <p>R$ {props.total}</p>
            </div>
        </article>
    )
}

export default Preview