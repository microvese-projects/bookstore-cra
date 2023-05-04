import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
