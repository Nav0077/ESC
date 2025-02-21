import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { PlayingXI } from './pages/PlayingXI';
import { Matches } from './pages/Matches';
//import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playing-xi" element={<PlayingXI />} />
        <Route path="/matches" element={<Matches />} />
       {/* <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
