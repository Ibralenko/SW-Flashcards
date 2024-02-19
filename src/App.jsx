import "./assets/style/App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/HomePage/Home";
import TablePage from './Pages/TablePage/TablePage'
import Error from "./Pages/ErrorPage/Error";
import CardsPage from "./Pages/CardsPage/CardsPage";
import LearnedPage from './Pages/LearnedPage/Learned'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/game" element={<CardsPage />} />
        <Route path="/learned" element={<LearnedPage/>} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
