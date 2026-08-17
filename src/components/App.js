import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes";
import "./global.css"

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;