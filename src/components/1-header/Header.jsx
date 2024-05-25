import { useEffect, useState } from 'react';

import './Header.css';

export default function Header() {
  const [ showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark"
);

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");

    }
  }, [theme]);

  return (
    <header className='flex'>
      <button onClick={() => {
        setshowModal(true)
      }}className='menu'>
      <i className="fa-solid fa-bars flex"></i>  
      </button>
      <div/>  
      <nav>
        <ul className='flex'>
        <li><a href="#accueil">Accueil</a></li>
          <li><a href="#about">A propos de moi</a></li>
          <li><a href="#mes-projets">Mes projets</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>

      </nav>
      <button onClick={()=> {
        // send value to LS
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark")
        // get value
        setTheme(localStorage.getItem("currentMode"));
       


      }} className='mode flex'>
         {theme === "dark" ? (<span><i className="fa-regular fa-moon"></i></span>) : (<span><i className="fa-regular fa-sun " style={{ color: '#FFA500' }}></i></span>)} 
        
      </button>
{showModal && (
      <div className='fixed'>
          <ul className='modal'>
            <li>
            <button className='close close-button' onClick={() => setshowModal(false)} aria-label='Fermer'>
            <span className='icon-close'><i className="fa-solid fa-x flex"></i></span>
            </button>
            </li>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#about">A propos de moi</a></li>
            <li><a href="#mes-projets">Mes projets</a></li>
            <li><a href="#contacts">Contacts</a></li>
          </ul> 
      </div>
)}
    </header>
  )
}




