import Image5 from "../../Image/image5.png";
import Image6 from "../../Image/image6.png";
import Image7 from "../../Image/image7.png";
import Image8 from "../../Image/image8.png";
function BestSelling() {
  return (
    <>
      <div className="col">
        <div className="col-img">
          <img src={Image5} alt="Kit Bolsa" />
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
          <img src={Image6} alt="Bateria Infantil" />
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
          <img src={Image7} alt="Kit Pratos Zildjian" />
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
          <img src={Image8} alt="Bateria Infantil" />
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
