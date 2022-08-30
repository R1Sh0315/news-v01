import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
