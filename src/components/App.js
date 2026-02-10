import './App.css';
import Header from "./pagina/Header"
import Footer from "./pagina/Footer"

function App() {
  return (
    <div className='main'>
      <Header />
      <main>
        <section>
          <article className='preview'>
            <div className='item-preview'>
              <h2>Entradas</h2>
              <p>R$ 0.000,00</p>
            </div>
            <div className='item-preview'>
              <h2>Saídas</h2>
              <p>R$ 0.000,00</p>
            </div>
            <div className='item-preview'>
              <h2>Situação</h2>
              <p>R$ 0.000,00</p>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
