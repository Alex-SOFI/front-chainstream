import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FinnLanding from './FinnLanding';
import FinnLandingRetail from './FinnLandingRetail';
import FinnLandingRetailLight from './FinnLandingRetailLight';
import FinnLandingRetail3 from './FinnLandingRetail3';
import FinnLandingRetail4 from './FinnLandingRetail4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FinnLandingRetail />} />
        <Route path="/instit" element={<FinnLanding />} />
        <Route path="/retail2" element={<FinnLandingRetailLight />} />
        <Route path="/retail3" element={<FinnLandingRetail3 />} />
        <Route path="/retail4" element={<FinnLandingRetail4 />} />
      </Routes>
    </Router>
  );
}

export default App;
