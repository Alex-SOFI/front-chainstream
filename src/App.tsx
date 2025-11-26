import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlaiseLanding from './BlaiseLanding';
import BlaiseLandingRetail from './BlaiseLandingRetail';
import BlaiseLandingRetailLight from './BlaiseLandingRetailLight';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlaiseLandingRetail />} />
        <Route path="/instit" element={<BlaiseLanding />} />
        <Route path="/retail2" element={<BlaiseLandingRetailLight />} />
      </Routes>
    </Router>
  );
}

export default App;
