import './App.css';
import Header from "./pagina/Header"
import Footer from "./pagina/Footer"
import Preview from "./Preview"
import Inputs from "./Inputs"
import Tabela from "./Tabela"

function App() {
  return (
    <div className='main'>
      <Header />
      <main>
        <section>
          <Preview />
          <Inputs />
          <Tabela />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
