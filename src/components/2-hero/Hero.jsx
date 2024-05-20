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
        <motion.p 
        initial={{scale: 0}}
        animate={{scale: 1}} 
        transition={{duration: 2}}
        className='title'> 
        Bienvenue ! Je m&apos;appelle RAHMA, développeuse Front-end passionnée par le développement de sites web dynamiques.<br/> Pour télécharger mon CV au format PDF, c&apos;est par <a href="./CV.pdf" target="_blank" className='cv-link'>ici</a>.
       </motion.p>
        

      </div>
      <div className='right-section animation'>
      <Lottie animationData={computerAnimation} />
      </div>
    </section>
  );
};
export default  Hero;