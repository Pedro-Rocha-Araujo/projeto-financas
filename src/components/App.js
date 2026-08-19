import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import AppRouter from "./routes";
import "./global.css"

function App() {
  return (
    <BrowserRouter>   
      <ToastContainer autoClose={1000} />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;