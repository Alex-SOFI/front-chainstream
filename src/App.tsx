import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlaiseLanding from './BlaiseLanding';
import BlaiseLandingRetail from './BlaiseLandingRetail';
import BlaiseLandingRetailLight from './BlaiseLandingRetailLight';
import BlaiseLandingRetail3 from './BlaiseLandingRetail3';
import BlaiseLandingRetail4 from './BlaiseLandingRetail4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlaiseLandingRetail />} />
        <Route path="/instit" element={<BlaiseLanding />} />
        <Route path="/retail2" element={<BlaiseLandingRetailLight />} />
        <Route path="/retail3" element={<BlaiseLandingRetail3 />} />
        <Route path="/retail4" element={<BlaiseLandingRetail4 />} />
      </Routes>
    </Router>
  );
}

export default App;
