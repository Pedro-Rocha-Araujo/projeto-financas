import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import { ToastContainer } from "react-toastify";
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