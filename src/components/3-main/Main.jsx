import { useState } from 'react';
import './Main.css';
import  { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";


const Main = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const zzz = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return zzz === buttonCategory;
    });

    setArr(newArr);

  }

  return (
    <main id='mes-projets'  className='flex'>
      <section className=' flex left-section'>
        <button onClick={() => {setCurrentActive("all");
        setArr(myProjects)
        }}
        className={currentActive === "all" ? "active" : null}>
          Tous les projets
        </button>


        <button onClick={() => {
         handleClick("css");
        }} 
        className={currentActive === "css" ? "active" : null}>
          HTML & CSS & SASS
        </button>

        <button onClick={() => {
         handleClick("javascript");
        }} 
        className={currentActive === "javascript" ? "active" : null}>
          Javascript
        </button>

        <button onClick={() => {
         handleClick("agile");
        }} 
        className={currentActive === "agile" ? "active" : null}>
          Gestion de Projet
        </button>

        <button onClick={() => {
         handleClick("react");
        }} 
        className={currentActive === "react" ? "active" : null}>
          React & Redux 
        </button>
      
        <button onClick={() => {
         handleClick("SEO");
        }} 
        className={currentActive === "SEO" ? "active" : null}>
          SEO 
        </button>
        <button onClick={() => {
         handleClick("tests");
        }} 
        className={currentActive === "tests" ? "active" : null}>
          Débogage 
        </button>
      </section>

      <section className='right-section flex '>
        <AnimatePresence>
        {arr.map((item) => (
          <motion.article
          layout 
          initial={{transform: "scale(0)"}}
          animate={{transform: "scale(1)"}}
          transition={{type: "spring", damping:8, stiffness:50}}
           key={item.imgPath} className='card'>
            <img width={266} src={item.imgPath} alt="" />
            <div style={{ width: "266px" }} className="box">
              <h1 className='title'>{item.projectTitle}</h1>
              <p className='subtitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium delectus fugit ad, excepturi quae ducimus. Commodi placeat saepe odio maxime officia minus praesentium sint tempore, at culpa, dolor impedit similique?
              </p>
              <div className="flex icons">
                <div style={{ gap: "11px" }} className='flex'>
                  <div><i className="fa-solid fa-link"></i></div>
                  <div><i className="fa-brands fa-github"></i></div>
                </div>
                <a className="link flex" href="">
                  more
                  <span style={{ alignSelf: "end" }}><i className="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;