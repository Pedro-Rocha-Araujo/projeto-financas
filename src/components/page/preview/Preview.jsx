import "./preview.css"

function Preview({ entradas, saidas }) {
  const totalEntradas = entradas.reduce((total, atual)=>{
    return total + atual.valor
  }, 0)

  const totalSaidas = saidas.reduce((total, atual)=>{
    return total + atual.valor
  }, 0)

  const situacao = totalEntradas - totalSaidas
  
  return (
    <section className='preview'>
      <div className='item-preview'>
        <h2>Entradas <i className="fa-solid fa-arrow-turn-up"></i></h2>
        <p>R$ {totalEntradas}</p>
      </div>
      <div className='item-preview'>
        <h2>Saídas <i className="fa-solid fa-arrow-turn-down"></i> </h2>
        <p>R$ {totalSaidas}</p>
      </div>
      <div className='item-preview'>
        <h2>Situação <i className="fa-solid fa-arrow-trend-up"></i></h2>
        <p>R$ {situacao}</p>
      </div>
    </section>
  )
}

export default Preview