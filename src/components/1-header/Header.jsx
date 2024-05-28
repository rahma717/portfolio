import { useEffect, useState } from 'react'; 
import './Header.css'; 
export default function Header({ setActiveTab, setCurrentActive }) { // Définition de la fonction de composant Header
  const [showModal, setshowModal] = useState(false); // Déclaration de l'état showModal pour contrôler l'affichage du menu modal
  const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark"); // Déclaration de l'état theme pour gérer le thème de l'application, récupéré du stockage local ou sombre par défaut

  useEffect(() => { // Utilisation du hook useEffect pour effectuer des effets de bord
    if (theme === "light") { // Si le thème est "clair"
      document.body.classList.remove("dark"); // Retire la classe "dark" du corps du document
      document.body.classList.add("light"); // Ajoute la classe "light" au corps du document
    } else { // Sinon (si le thème est "sombre")
      document.body.classList.remove("light"); // Retire la classe "light" du corps du document
      document.body.classList.add("dark"); // Ajoute la classe "dark" au corps du document
    }
  }, [theme]); // Le hook s'exécute à chaque changement du thème

  const handleLinkClik = () => { // Fonction pour gérer le clic sur un lien du menu modal
    setshowModal(false); // Ferme le menu modal en mettant showModal à false
  };

  const handleResetTabs = () => {
    setActiveTab('skills');
    setCurrentActive('all');
  }
  return (
    <header className='flex'> {/* En-tête avec une classe flex pour la mise en forme */}
      <button aria-label='ouvrir menu' onClick={() => { // Bouton de menu
        setshowModal(true); // Active l'affichage du menu modal au clic
      }} className='menu'>
        <i className="fa-solid fa-bars flex"></i> {/* Icône de menu (bars) */}
      </button>
      <div/>
      <nav> {/* Navigation principale */}
        <ul className='flex'> {/* Liste des liens de navigation avec une classe flex */}
          <li><a href="#hero" onClick={() => handleResetTabs()}>Accueil</a></li> {/* Lien vers la section Accueil */}
          <li><a href="#skills" onClick={() => handleResetTabs()}>À propos de moi</a></li> {/* Lien vers la section À propos de moi */}
          <li><a href="#mes-projets" onClick={() => handleResetTabs()}>Mes projets</a></li> {/* Lien vers la section Mes projets */}
          <li><a href="#contacts" onClick={() => handleResetTabs()}>Contacts</a></li> {/* Lien vers la section Contacts */}
        </ul>
      </nav>
      <button aria-label='dark mode' onClick={() => { // Bouton pour basculer entre les thèmes sombre et clair
        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark"); // Enregistre le thème actuel dans le stockage local
        setTheme(localStorage.getItem("currentMode")); // Met à jour le thème avec la valeur enregistrée dans le stockage local
      }} className='mode flex'>
        {theme === "dark" ? ( // Condition pour afficher l'icône de thème en fonction du thème actuel
          <span><i className="fa-regular fa-moon"></i></span> // Icône de lune pour le thème sombre
        ) : (
          <span><i className="fa-regular fa-sun" style={{ color: '#FFA500' }}></i></span> // Icône de soleil pour le thème clair
        )}
      </button>
      {showModal && ( // Affichage conditionnel du menu modal
        <div className='fixed'> {/* Div pour le positionnement fixe du menu modal */}
          <ul className='modal'> {/* Liste des liens du menu modal */}
            <li>
              <button className='close close-button' onClick={() => setshowModal(false)} aria-label='Fermer'> {/* Bouton pour fermer le menu modal */}
                <span className='icon-close'><i className="fa-solid fa-x flex"></i></span> {/* Icône de fermeture (croix) */}
              </button>
            </li>
            <li><a href="#hero" onClick={handleLinkClik}>Accueil</a></li> {/* Lien vers la section Accueil */}
            <li><a href="#skills" onClick={handleLinkClik}>À propos de moi</a></li> {/* Lien vers la section À propos de moi */}
            <li><a href="#mes-projets" onClick={handleLinkClik}>Mes projets</a></li> {/* Lien vers la section Mes projets */}
            <li><a href="#contacts" onClick={handleLinkClik}>Contacts</a></li> {/* Lien vers la section Contacts */}
          </ul>
        </div>
      )}
    </header>
  );
}



