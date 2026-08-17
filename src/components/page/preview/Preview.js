import "./preview.css"

function Preview() {
    return (
      <section className='preview'>
        <div className='item-preview'>
          <h2>Entradas <i class="fa-solid fa-arrow-turn-up"></i></h2>
          <p>R$ entradas</p>
        </div>
        <div className='item-preview'>
          <h2>Saídas <i class="fa-solid fa-arrow-turn-down"></i> </h2>
          <p>R$ saidas</p>
        </div>
        <div className='item-preview'>
          <h2>Situação <i class="fa-solid fa-arrow-trend-up"></i></h2>
          <p>R$ total</p>
        </div>
      </section>
    )
}

export default Preview