import { useEffect, useState } from 'react';
import './ScrollToTopButton.css';



function ScrollToTopButton() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const [showScrollBTN, setshowScrollBTN] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 300) {
          setshowScrollBTN(true)
        } else { setshowScrollBTN(false)}
        
      });
    }, []);
    return (
      <>
      
      <a style={{opacity: showScrollBTN? 1 : 0,transition:"1s"}} href='#up'> <button aria-label='scroll en haut de la page' className='scroll2Top' onClick={scrollToTop}>
      <span><i className="fa-solid fa-circle-up"></i></span>
      </button>
      </a>
    
    </>
    );

  }

  
  export default ScrollToTopButton;