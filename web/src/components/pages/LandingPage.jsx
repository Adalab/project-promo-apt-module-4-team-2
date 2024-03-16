import { Link } from "react-router-dom";

import "../../scss/LandingPage.scss";

function LandingPage() {
    return (
    <div className="landing__page">
      <div className="landing__header">
        <h1 className="landing__title">Proyectos Molones</h1>
        <p className="landing__subtitle">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <Link className="button__link" to="/form">
          Nuevo proyecto{" "}
        </Link>
        <Link className="button__link" to="/projects">
          Catálogo de proyectos {" "}
        </Link>
      </div>
    </div>
    )
}

export default LandingPage;