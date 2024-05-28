import { useState, useEffect } from 'react';
import './Main.css';
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = ({ currentActive, setCurrentActive}) => {

  // État pour stocker les projets filtrés
  const [arr, setArr] = useState(myProjects);
  // État pour le projet sélectionné pour la popup
  const [selectedProject, setSelectedProject] = useState(null);
  // État pour contrôler l'affichage de la popup
  const [showPopup, setShowPopup] = useState(false);

// Fonction de gestion des clics sur les boutons de catégorie
  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

  };
// Fonction pour ouvrir la popup avec les détails du projet
  const openPopup = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
  };
 // Fonction pour fermer la popup et réinitialiser l'état
  const closePopup = () => {
    setShowPopup(false);
    setArr(myProjects);
    setCurrentActive("all");
  };
  // Fonction pour gérer le clic sur les flèches et ouvrir la popup
const handleArrowClick = (project) => {
  openPopup(project);
};

useEffect(() => {
// Filtrer les projets selon la catégorie sélectionnée
    if (currentActive === "all") {
      setArr(myProjects);
    } else {
      const newArr = myProjects.filter((item) =>
        item.category.includes(currentActive)
      );
      setArr(newArr);
    }
}, [currentActive])
  return (
    <main id='mes-projets' className='flex'>
      <section className='flex left-section'>
        <button
          onClick={() => handleClick("all")}
          className={currentActive === "all" ? "active" : null}
        >
          Tous les projets
        </button>
        <button
          onClick={() => handleClick("css")}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS & SASS
        </button>
        <button
          onClick={() => handleClick("javascript")}
          className={currentActive === "javascript" ? "active" : null}
        >
          Javascript
        </button>
        <button
          onClick={() => handleClick("agile")}
          className={currentActive === "agile" ? "active" : null}
        >
          Gestion de Projet
        </button>
        <button
          onClick={() => handleClick("react")}
          className={currentActive === "react" ? "active" : null}
        >
          React & Redux
        </button>
        <button
          onClick={() => handleClick("SEO")}
          className={currentActive === "SEO" ? "active" : null}
        >
          SEO
        </button>
        <button
          onClick={() => handleClick("tests")}
          className={currentActive === "tests" ? "active" : null}
        >
          Débogage
        </button>
      </section>

      <section className='right-section flex'>
        <AnimatePresence>
          {arr.map((item) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={item.imgPath}
              className='card'
            >
              <img src={item.imgPath} alt="" />
              <div style={{ width: "266px" }} className="box">
                <h1 className='title'>{item.projectTitle}</h1>
                <div className="flex icons">
                  <div style={{ gap: "11px" }} className='flex'>
                    {/* <div>
                      <a href={item.websiteUrl}><i className="fa-solid fa-link"></i></a>
                    </div> */}
                    <div>
                      <a href={item.githubUrl} className="github-link"> 
                      <span>Lien Github</span><i className="fa-brands fa-github"></i></a>
                    </div>
                  </div>
                  <div className="link flex">
                    <button onClick={() => openPopup(item)} className="more-button">more</button>
                    <span onClick={() => handleArrowClick(item)} style={{ alignSelf: "end" }}>
                      <i style={{ color: "var(--blue)", marginTop: "0.2rem" }} className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>

      {showPopup && selectedProject && (
        <div className="popup active">
          <div className="popup-content">
            <button className="close-btn" onClick={closePopup}>
              <i className="fa-solid fa-x style={{ position: 'absolute', top: '10px', right: '10px' }}>"></i>
            </button>
            <h2>{selectedProject.projectTitle}</h2>
            <p><strong>Contexte de la mission:</strong> {selectedProject.missionContext}</p>
            <p><strong>Défis techniques:</strong> {selectedProject.technicalChallenges}</p>

          </div>
        </div>
      )}
    </main>
  );
};

export default Main;