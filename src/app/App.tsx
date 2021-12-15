import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Books, Home, Navbar } from '../components';

import './App.scss';

function App() {
  return (
    <main className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reads' element={<Books />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
