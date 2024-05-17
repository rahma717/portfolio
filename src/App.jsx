
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';

import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';
import ScrollToTopButton from './components/6-ScrollToTopButton/ScrollToTopButton';
import './App.css';


function App() {
  return (
   
    <div className='container'>
    <Header/>

    <Hero/>
    <div className='line'/>
    <Main/>
    <div className='line'/>
    <Contact/>
    <div className='line'/>
    <Footer/>
    <ScrollToTopButton />
    </div>
  )
}
export default App
