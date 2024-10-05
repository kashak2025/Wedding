import './App.css';
import Buynow from './Pages/Buynow-Card'
// import { Box } from '@mui/material';
import Header from './Components/Header';
import Home from './Pages/Home';
import Coustmization from './Pages/Coustmization'
import Logo from './Pages/Logo';
import Category from './Pages/Category';
import Review from './Pages/Review';
import Login from './Pages/Login';
import Signup from './Pages/Signup'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Logo/>
      <Category/>
      <Review/>
      <Login/>
      <Signup />
      <Buynow/>
    </>
  );
}

export default App;
