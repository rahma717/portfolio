
import  './Footer.css';

const Footer = () => {
  return ( 
  <footer className='flex'>
   <div className='all-icons flex'>
   <div><a href='https://twitter.com/home' aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a></div>
   <div><a href='https://github.com/rahma717' aria-label="GitHub"><i className="fa-brands fa-github"></i></a></div>
  <div><a href='https://www.linkedin.com/feed/?trk=sem-ga_campid.21228777300_asid.161774284317_crid.698137525090_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9056563' aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a></div>
  </div>


    {/* <ul className='flex'>
      <li><a href="">Accueil</a></li>
      <li><a href="">A propos de moi</a></li>
      <li><a href="">Mes projets</a></li>
      <li><a href="#contacts">Contacts</a></li>
    </ul> */}

  <p>© 2024 All rights reserved by Rahma BOUABID</p>
  </footer>

  );
};
export default Footer
