import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Plugins from './pages/PluginsPage';
import Themes from './pages/ThemesPage';
import Navbar from './components/Navbar';
import './index.css';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Plugins />} />
      <Route path="/themes" element={<Themes />} />
    </Routes>
  </BrowserRouter>
);

export default App;
