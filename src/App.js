import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import Country from "./pages/Country";
import { ModeContextProvider } from "./components/context/ModeContext";

function App() {
  return (
    <>
      <ModeContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Pages />} />
            <Route path="/:region" element={<Pages />} />
            <Route path="/country/:countryName" element={<Country />} />
          </Routes>
        </Router>
      </ModeContextProvider>
    </>
  );
}

export default App;
