import { useState, useEffect } from 'react';
import './Skills.css';

const Skills = ({ activeTab, setActiveTab}) => {
  
  const [animationStopped, setAnimationStopped] = useState(false);

  useEffect(() => {
    // Mettre à jour l'état de l'animation après le chargement initial de la page
    setAnimationStopped(true);
    // Arrêter l'animation après un certain délai
  const timeout = setTimeout(() => {
    setAnimationStopped(false);
  }, 2000);

  // Nettoyer le timeout pour éviter les fuites de mémoire
  return () => clearTimeout(timeout);
  }, []);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const skillsData = [
    { name: 'HTML', iconClass: 'fa-brands fa-html5', percentage: 90 },
    { name: 'CSS & SASS', iconClass: 'fa-brands fa-css3-alt', percentage: 85 },
    { name: 'JavaScript (Vanilla)', iconClass: 'fa-brands fa-js', percentage: 80 },
    { name: 'React.js, Redux', iconClass: 'fa-brands fa-react', percentage: 75 }
  ];

  return (
  
      <div id='skills' className="block">
           <div className="tab-titles">
              <p
                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('skills')}
              >
                Compétences
              </p>
              <p
                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('experience')}
              >
                Expériences
              </p>
              <p
                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                onClick={() => handleTabClick('education')}
              >
                Formations
              </p>
            </div>
            <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
              {skillsData.map((skill, index) => (
                <div key={index} className="skill-item">
                  <i className={`fa ${skill.iconClass}`}></i>
                  <p>{skill.name}</p>
                  <div className="progress">
                    <div className={`progress-bar ${animationStopped ? 'stop-animation' : ''}`} style={{ width: `${skill.percentage}%` }}>
                      {skill.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

           <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
              <ul>
                <li><span>- Site BOOKI </span><br />Création de la page d’accueil d’une agence de voyage</li>
                <li><span>- Site OH MYFOOD</span><br />Intégration de l’interface d’un site mobile et amélioration avec des animation CSS</li>
                <li><span>- Site Architecte d’intérieur Sophie Bluel</span><br />Création d’une page Web dynamique avec JAVASCRIPT</li>
                <li><span>- Site MENU MAKER by QWENTA</span><br />Planification du développement du Site MENU MAKER by QWENTA</li>
                <li><span>- Site KASA</span><br />Création d’une application Web de location immobilière avec React.js</li>
                <li><span>- Site de la photographe Nina CARDUCCI</span><br />Optimisation du référencement du site de la photographe Nina CARDUCCI</li>
                <li><span>- Site de l&#39;agence 724EVENTS</span><br />Débogage du site en React.js d’une agence d’événementielle</li>
                <li><span>- Site Argent Bank</span><br />Implémentation front-end d’une application bancaire avec React.js et Redux</li>
              </ul>
            </div>
            <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
              <ul>
                <li><span>2022-2024<br /></span>Intégrateur Web- React<br/>OpenClassrooms</li>
                <li><span>30 octobre 2023<br /></span>Certificat formation développement web<br />CIFOP-IMS</li>
                <li><span>13 juin 2023<br /></span>Certificat SASS & SCSS<br/>Udemy</li>
                <li><span>2014-2017<br /></span>Licence Appliquée en sciences infirmières</li>
                <li><span>2013-2014<br /></span>Diplôme du baccalauréat scientifique</li>
              </ul>
            </div>
          </div>
  
  );
}

export default Skills;
