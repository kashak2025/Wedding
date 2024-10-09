import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Logo from './Pages/Logo';
import Category from './Pages/Category';
import Review from './Pages/Review';
import Login from './Pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CategoryMain from './Pages/CategoryMain';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Buynow from './Pages/WomenMain';

function App() {
  return (
    <>
    <Router>
      <Header />
      <div>
      <Switch>
          <Route exact path="/">
            <Home />
            <Logo />
            <Category/>
            <Review />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/category">
            <CategoryMain />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    
    {/* <Buynow/> */}
    </>
  );
}

export default App;
