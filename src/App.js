
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Reservation from "./pages/reservation/Reservation"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Reservation />} />
            <Route element={<user />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
