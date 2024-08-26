//import logo from './logo.svg';
import Navbar  from './components/Navbar';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About'
import Product from './components/Product'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Service />
      <About />
      <Product />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
