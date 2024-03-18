import { Link } from "react-router-dom";
import avatar from "../../images/avatar.webp";
import Card from "../Card";

import "../../scss/ProjectPage.scss";

function ProjectPage({ data, projectsList }) {
  return (
    <>
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <Link className="button--link--newproyect" to="/form">
          NUEVO PROYECTO{" "}
        </Link>
      </section>

      <div className="projects__container">
        {projectsList.map((project) => (
          <div>
            <Link className="Detail__project" to="/Detail">
              <Card key={project.id} data={project} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProjectPage;
