import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Rules from "./pages/Rules";
import Prizes from "./pages/Prizes";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

function App() {
  return (
    <Router>
      <div className="bg-darker text-white">
        <Header />
        <main className="pt-16 sm:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/prizes" element={<Prizes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;