import KitBolsa from "./Image/kitBolsa.png";
import Bateria from "./Image/bateria.png";
import Pratos from "./Image/pratos.png";
import BateriAzul from "./Image/bateraAzul.png";
import { Link } from "react-router-dom";
import "./style.css";

function BestSelling() {
  return (
    <>
      <section className="selling">
        <div className="center-text" data-aos="fade-up">
          <h2>Mais Vendidos</h2>
        </div>

        <div className="selling-content" data-aos="zoom-in-up">
          <div className="col">
            <div className="col-img">
              <img src={KitBolsa} alt="Kit Bolsa" />
            </div>

            <div className="col-icon">
              <a aria-label="Adicionar aos favoritos">
                <i className="ri-heart-line"></i>
              </a>
              <a aria-label="Visualizar produto">
                <i className="ri-eye-line"></i>
              </a>
              <a aria-label="Adicionar ao carrinho">
                <i className="ri-shopping-cart-line"></i>
              </a>
            </div>
          </div>

          <div className="col">
            <div className="col-img">
              <img src={Bateria} alt="Bateria Infantil" />
            </div>

            <div className="col-icon">
              <a aria-label="Adicionar aos favoritos">
                <i className="ri-heart-line"></i>
              </a>
              <a aria-label="Visualizar produto">
                <i className="ri-eye-line"></i>
              </a>
              <a aria-label="Adicionar ao carrinho">
                <i className="ri-shopping-cart-line"></i>
              </a>
            </div>
          </div>

          <div className="col">
            <div className="col-img">
              <img src={Pratos} alt="Kit Pratos Zildjian" />
            </div>

            <div className="col-icon">
              <a aria-label="Adicionar aos favoritos">
                <i className="ri-heart-line"></i>
              </a>
              <a aria-label="Visualizar produto">
                <i className="ri-eye-line"></i>
              </a>
              <a aria-label="Adicionar ao carrinho">
                <i className="ri-shopping-cart-line"></i>
              </a>
            </div>
          </div>

          <div className="col">
            <div className="col-img">
              <img src={BateriAzul} alt="Bateria Infantil" />
            </div>

            <div className="col-icon">
              <a aria-label="Adicionar aos favoritos">
                <i className="ri-heart-line"></i>
              </a>
              <a aria-label="Visualizar produto">
                <i className="ri-eye-line"></i>
              </a>
              <a aria-label="Adicionar ao carrinho">
                <i className="ri-shopping-cart-line"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="n-btn" data-aos="zoom-in">
          <Link to="/maisvendidos" className="btn2">
            Ver Todos
          </Link>
        </div>
      </section>
    </>
  );
}

export default BestSelling;
