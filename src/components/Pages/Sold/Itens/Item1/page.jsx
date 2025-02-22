import Image1 from "../../Image/image1.png";
import Image2 from "../../Image/image2.png";
import Image3 from "../../Image/image3.png";
import Image4 from "../../Image/image4.png";

function BestSelling() {
  return (
    <>
      <div className="col">
        <div className="col-img">
          <img src={Image1} alt="Kit Bolsa" />
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
          <img src={Image2} alt="Bateria Infantil" />
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
          <img src={Image3} alt="Kit Pratos Zildjian" />
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
          <img src={Image4} alt="Bateria Infantil" />
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
