import { useState } from 'react';
import Header from './components/1-header/Header';
import Hero from './components/2-hero/Hero';
import Skills from './components/3-skills/Skills';
import Main from './components/4-main/Main';
import Contact from './components/5-contact/Contact';
import Footer from './components/6-footer/Footer';
import ScrollToTopButton from './components/7-ScrollToTopButton/ScrollToTopButton';
import './App.css';


function App() {
  const [activeTab, setActiveTab] = useState('skills');
    // État pour suivre la catégorie actuellement active
  const [currentActive, setCurrentActive] = useState("all");
  return (
   
    <div className='container'>
    <Header setActiveTab={setActiveTab} setCurrentActive={setCurrentActive} />
    <Hero/>
    <div className='line'/>
    <Skills activeTab={activeTab} setActiveTab={setActiveTab}/>
    <div className='line'/>
    <Main currentActive={currentActive} setCurrentActive={setCurrentActive}  />
    <div className='line'/>
    <Contact/>
    <div className='line'/>
    <Footer/>
    <ScrollToTopButton />
    </div>
  )
}
export default App
