import { Link } from "react-router-dom";

import '../scss/Header.scss';
import laptopCodeLogo from '../images/laptop-code-solid.svg';
import adalabLogo from '../images/adalab.png';

function Header() {
    return (
      <header className="header">
        <Link className="header__brand" to="/" title="Haz click para volver a la página inicial">
          <img className="header__companyLogo" src={laptopCodeLogo} alt="Logo proyectos molones" />
          <h1 className="header__title">Proyectos molones</h1>
        </Link>
        <img className="logoSponsor" src={adalabLogo} alt="Logo Adalab" />       
      </header>
    )
}

export default Header;