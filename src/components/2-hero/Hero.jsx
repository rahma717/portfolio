import  './Hero.css';
import Lottie from "lottie-react";
import developerAnimation from "../../animation/developer.json";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className='my-photo'>
          <motion.img 
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1.1)"}} 
          transition={{damping: 6, type: "spring", stiffness: 100}}
          src="./myphoto.png" className='photo' alt='ma photo'/>
          <span className='icon-check'><i className="fa-solid fa-circle-check"></i></span>
        </div>
        <motion.p 
        initial={{scale: 0}}
        animate={{scale: 1}} 
        transition={{duration: 2}}
        className='title'>Je suis une développeuse Front-end innovante et proactive, dotée de compétences solides en développement de sites web dynamiques. Je maîtrise efficacement les outils de développement et je suis constamment à la recherche d&apos;une nouvelle opportunité pour mon premier emploi dans le domaine de l&apos;informatique.</motion.p>
        <div className='all-icons flex'>
          <div><a href='https://twitter.com/home'><i className="fa-brands fa-twitter"></i></a></div>
          <div><a href=''><i className="fa-brands fa-instagram"></i></a></div>
          <div><a href='https://github.com/rahma717'><i className="fa-brands fa-github"></i></a></div>
          <div><a href='https://www.linkedin.com/feed/?trk=sem-ga_campid.21228777300_asid.161774284317_crid.698137525090_kw.linkedin_d.c_tid.kwd-148086543_n.g_mt.e_geo.9056563'><i className="fa-brands fa-linkedin"></i></a></div>

        </div>
      </div>
      <div className='right-section animation'>
      <Lottie  animationData={developerAnimation} />
      </div>
    </section>
  );
};
export default  Hero;