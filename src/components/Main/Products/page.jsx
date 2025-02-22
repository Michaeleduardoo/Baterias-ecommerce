import Eletronica from "./Image/eletronica.png";
import Premium from "./Image/premium.png";
import Baquetas from "./Image/baquetas.png";
import Peles from "./Image/pele.png";
import Suporte from "./Image/suport.png";
import Bolsa from "./Image/bolsa.png";
import Microfone from "./Image/microfones.png";
import Bateria from "./Image/bateria.png";
import { Link } from "react-router-dom";
import "./style.css";

const products = [
  {
    id: 1,
    img: Eletronica,
    name: "kit Eletrônica Drum Liverpool",
    rating: 5,
    price: "R$3.800",
  },
  {
    id: 2,
    img: Premium,
    name: "Bateria Acústica Premium",
    rating: 4.8,
    price: "R$2.669",
  },
  {
    id: 3,
    img: Baquetas,
    name: "Kit 5 Baquetas Spanking",
    rating: 4.5,
    price: "R$109,99",
  },
  {
    id: 4,
    img: Peles,
    name: "Kit De Peles Turbo Play",
    rating: 4.4,
    price: "R$390,99",
  },
  {
    id: 5,
    img: Suporte,
    name: "Kit De Bateria Cymbal Boom",
    rating: 4.0,
    price: "R$1.468",
  },

  {
    id: 6,
    img: Bolsa,
    name: "Capa Bag Manzi Luxo",
    rating: 5,
    price: "R$1.260",
  },

  {
    id: 7,
    img: Microfone,
    name: "Kit Microfones para Bateria",
    rating: 4.9,
    price: "R$1.000",
  },
  {
    id: 8,
    img: Bateria,
    name: "Bateria Praticável em casa",
    rating: 3.8,
    price: "R$329,99",
  },
];

function Products() {
  return (
    <section className="n-products">
      <div className="center-text" data-aos="fade-down">
        <h2>Alguns Produtos</h2>
      </div>

      <div className="n-content" data-aos="zoom-in">
        {products.map((product) => (
          <div className="row" key={product.id}>
            <div className="row-img">
              <img src={product.img} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <div className="stars">
              {[...Array(5)].map((_, index) => (
                <a key={index}>
                  <i
                    className={
                      index < Math.floor(product.rating)
                        ? "ri-star-fill"
                        : "ri-star-half-line"
                    }
                  ></i>
                </a>
              ))}
              <a>{product.rating}/5</a>
            </div>
            <div className="row-in">
              <div className="row-left">
                <a>
                  Adicionar no
                  <i className="ri-shopping-cart-line"></i>
                </a>
              </div>
              <div className="row-right">
                <h6>{product.price}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="n-btn" data-aos="zoom-in">
        <Link to="/produtos" className="btn2">
          Ver Todos
        </Link>
      </div>
    </section>
  );
}

export default Products;
