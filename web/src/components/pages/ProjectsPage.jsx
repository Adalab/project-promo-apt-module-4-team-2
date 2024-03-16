import { Link } from "react-router-dom";
import avatar from "../../images/avatar.webp";

import "../../scss/ProjectPage.scss";

function ProjectPage( data ) {
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
      <Link clasName="Detail__project" to="/Detail">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>
          <div className="card__author">
            <div
              className="card__authorPhoto"
              style={{ backgroundImage: `${avatar}` }}
            ></div>
            <p className="card__job"> {data.job}  || Full stack Developer </p>
            <h3 className="card__name"> {data.autor} || Emmelie Bjôrklund</h3>
          </div>
          <div className="card__project">
            <h3 className="card__name"> {data.name} ||  Elegant Workspace</h3>
            <p className="card__slogan"> {data.slogan} ||  Diseños Exclusivos</p>
            {/* <h3 className="card__descriptionTitle"> {data.desc}   Product description</h3> */}
            <p className="card__description">
            {data.desc} || Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quos? Itaque, molestias eveniet laudantium adipisci vitae ratione
            </p>
            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>
              <Link
                className="icon icon__www"
                to="/"
                title="Haz click para ver el proyecto online"
                target="_blank"
              >
                Web link
              </Link>
              <Link
                className="icon icon__github"
                to="/"
                title="Haz click para ver el código del proyecto"
                target="_blank"
              >
                GitHub link
              </Link>
            </div>
          </div>
        </article>
      </Link>

      <Link clasName="Detail__project" to="/Detail">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>
          <div className="card__author">
            <div
              className="card__authorPhoto"
              style={{ backgroundImage: `${avatar}` }}
            ></div>
            <p className="card__job"> Full stack Developer</p>
            <h3 className="card__name">Emmelie Bjôrklund</h3>
          </div>
          <div className="card__project">
            <h3 className="card__name">Elegant Workspace</h3>
            <p className="card__slogan">Diseños Exclusivos</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quos? Itaque, molestias eveniet laudantium adipisci vitae ratione
            </p>
            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>
              <Link
                className="icon icon__www"
                to="/"
                title="Haz click para ver el proyecto online"
                target="_blank"
              >
                Web link
              </Link>
              <Link
                className="icon icon__github"
                to="/"
                title="Haz click para ver el código del proyecto"
                target="_blank"
              >
                GitHub link
              </Link>
            </div>
          </div>
        </article>
      </Link>

      <Link clasName="Detail__project" to="/Detail">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>
          <div className="card__author">
            <div
              className="card__authorPhoto"
              style={{ backgroundImage: `${avatar}` }}
            ></div>
            <p className="card__job"> Full stack Developer</p>
            <h3 className="card__name">Emmelie Bjôrklund</h3>
          </div>
          <div className="card__project">
            <h3 className="card__name">Elegant Workspace</h3>
            <p className="card__slogan">Diseños Exclusivos</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quos? Itaque, molestias eveniet laudantium adipisci vitae ratione
            </p>
            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>
              <Link
                className="icon icon__www"
                to="/"
                title="Haz click para ver el proyecto online"
                target="_blank"
              >
                Web link
              </Link>
              <Link
                className="icon icon__github"
                to="/"
                title="Haz click para ver el código del proyecto"
                target="_blank"
              >
                GitHub link
              </Link>
            </div>
          </div>
        </article>
      </Link>

      <Link clasName="Detail__project" to="/Detail">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>
          <div className="card__author">
            <div
              className="card__authorPhoto"
              style={{ backgroundImage: `${avatar}` }}
            ></div>
            <p className="card__job"> Full stack Developer</p>
            <h3 className="card__name">Emmelie Bjôrklund</h3>
          </div>
          <div className="card__project">
            <h3 className="card__name">Elegant Workspace</h3>
            <p className="card__slogan">Diseños Exclusivos</p>
            <h3 className="card__descriptionTitle">Product description</h3>
            <p className="card__description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla,
              quos? Itaque, molestias eveniet laudantium adipisci vitae ratione
            </p>
            <div className="card__technicalInfo">
              <p className="card__technologies">React JS - HTML - CSS</p>
              <Link
                className="icon icon__www"
                to="/"
                title="Haz click para ver el proyecto online"
                target="_blank"
              >
                Web link
              </Link>
              <Link
                className="icon icon__github"
                to="/"
                title="Haz click para ver el código del proyecto"
                target="_blank"
              >
                GitHub link
              </Link>
            </div>
          </div>
        </article>
      </Link>
      </div>
    </>
  );
}



export default ProjectPage;
