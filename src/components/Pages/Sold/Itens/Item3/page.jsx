import Image9 from "../../Image/image9.png";
import Image10 from "../../Image/image10.png";
import Image11 from "../../Image/image11.png";
import Image12 from "../../Image/image12.png";

import "../../style.css";

function BestSelling() {
  return (
    <>
      <div className="col">
        <div className="col-img">
          <img src={Image9} alt="Kit Bolsa" />
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
          <img src={Image10} alt="Bateria Infantil" />
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
          <img src={Image11} alt="Kit Pratos Zildjian" />
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
          <img src={Image12} alt="Bateria Infantil" />
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
    </>
  );
}

export default BestSelling;
