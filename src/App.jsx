import './App.css'
import Accordion from './components/Accordion/accordion';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import GetStarted from './components/Get Started/GetStarted';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Residencies from './components/Residencies/Residencies';

function App() {
  return (
    <>
    <Header />
    <Hero />
    <Banner />
    <Residencies />
    <Accordion />
    <Contact />
    <GetStarted />
    <Footer />
    </>
  )
}

export default App;