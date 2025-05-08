import './App.css';
import logo from './images/logo.jpg';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
