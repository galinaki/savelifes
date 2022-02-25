import { Routes, Route } from 'react-router';
import './App.css';
import AnimalsContainer from './containers/AnimalsContainer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<h1>Hello</h1>} />
        <Route path='/animals/*' element={<AnimalsContainer />} />
      </Routes>
    </div>
  );
}

export default App;
