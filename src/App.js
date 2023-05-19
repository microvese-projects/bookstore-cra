import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Nav from './components/Nav';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
