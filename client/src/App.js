import { Routes, Route } from 'react-router';
import { useEffect, useState } from 'react';
import { verifyUser } from './services/userConfig';
import './App.css';
import AnimalsContainer from './containers/AnimalsContainer';
import Subscribe from './screens/Subscribe/Subscribe';
import Login from './screens/Login/Login';
import Navbar from './components/Navbar/Navbar';

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }

  return (
    <div className="App">
      <Navbar currentUser={currentUser} logout={logout} />
      <Routes>
        <Route path='/users' element={<Subscribe />} setCurrentUser={setCurrentUser}  />
        <Route path='/login' element={<Login setCurrentUser={setCurrentUser} />} />
        <Route path='/' element={<h1>Hello</h1>} />
        <Route path='/animals/*' element={<AnimalsContainer setCurrentUser={setCurrentUser} />} />
      </Routes>
    </div>
  );
}

export default App;
