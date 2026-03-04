import React from 'react'
import { projectsCard } from '../../utils/bd';

// recibe una categoría y muestra únicamente los proyectos de la misma
const CardPorfolio = ({ category }) => {
  if (!category || !projectsCard[category]) {
    return <p>No hay proyectos disponibles.</p>;
  }

  const projects = projectsCard[category];

  return (
    <div className="portfolio-container">
      <div className="category-section">
        <h2 className="category-title">{category}</h2>
        <div className="projects-list">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <a href={proj.enlace} target="_blank" rel="noopener noreferrer" className="project-link">
                <img
                  src={proj.imagen}
                  alt={proj.titulo}
                  className="project-image"
                />
              </a>
              <h3 className="project-title">{proj.titulo}</h3>
              <p className="project-description">{proj.descripcion}</p>
              <a
                href={proj.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                Ver proyecto
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardPorfolio