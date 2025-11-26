import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlaiseLanding from './BlaiseLanding';
import BlaiseLandingRetail from './BlaiseLandingRetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlaiseLandingRetail />} />
        <Route path="/instit" element={<BlaiseLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
