import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <header>
      <Link to="/" className="logo">
        Baterias
      </Link>

      <ul className={`nav-list ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/maisvendidos">Mais Vendidos</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/termos">Termos de Privacidade</Link>
        </li>
      </ul>

      <div className="nav-right">
        <div className={`search-container ${searchActive ? "active" : ""}`}>
          <input
            type="text"
            className="search-box"
            maxLength={10}
            placeholder="Buscar..."
            onFocus={() => setSearchActive(true)}
          />
          <button className="search-icon" onClick={toggleSearch}>
            <a>
              <i className="ri-search-line"></i>
            </a>
          </button>
        </div>

        <a href="https://web.whatsapp.com/" target="_blak">
          <i className="ri-whatsapp-line"></i>
        </a>
        <Link to="/users">
          <i className="ri-user-line"></i>
        </Link>

        <div
          className={menuActive ? "bx bx-x" : "bx bx-menu"}
          id="menu-icon"
          onClick={toggleMenu}
        ></div>
      </div>
    </header>
  );
}

export default Header;
