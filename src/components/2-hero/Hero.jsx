import  './Hero.css';
import Lottie from "lottie-react";
import computerAnimation from "../../animation/computer.json";
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
        <motion.h1 
        initial={{scale: 0}}
        animate={{scale: 1}} 
        transition={{duration: 2}}
        className='title'> 
        Bienvenue ! Je suis RAHMA,<br/> développeuse Front-End. 
       </motion.h1>
       <p className='subtitle'>
            Je suis innovante et proactive, dotée de compétences solides en développement de sites web dynamiques. Je maîtrise efficacement les outils de développement et je suis constamment à la recherche d&#39;une nouvelle opportunité pour mon premier emploi dans le domaine de l&#39;informatique.
            Pour télécharger mon CV au format PDF, c&apos;est par <a href="./CV.pdf" target="_blank" className='cv-link'>ici</a>.
       </p>

      </div>
      <div className='right-section animation'>
      <Lottie animationData={computerAnimation} />
      </div>
    </section>
  );
};
export default  Hero;