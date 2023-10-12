import './App.css'
import Accordion from './components/Accordion/accordion';
import Banner from './components/Banner/Banner';
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
    </>
  )
}

export default App;