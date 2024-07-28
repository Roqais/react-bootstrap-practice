import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavbarComp from './components/NavbarComp';
import Home from './components/home/Home';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <NavbarComp />
      <Home />
      <Footer />
    </>
  )
}

export default App