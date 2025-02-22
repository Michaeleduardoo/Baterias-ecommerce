import { useState } from "react";
import Bateria1 from "./Image/1Bateria.png";
import Bateria2 from "./Image/2Bateria.png";
import Bateria3 from "./Image/3Bateria.png";
import Bateria4 from "./Image/4Bateria.png";
import Bateria5 from "./Image/5Bateria.png";
import Bateria6 from "./Image/6Bateria.png";
import Bateria7 from "./Image/7Bateria.png";
import Bateria8 from "./Image/8Bateria.png";
import Bateria9 from "./Image/9Bateria.png";
import Bateria10 from "./Image/10Bateria.png";
import Bateria11 from "./Image/11Bateria.png";
import Bateria12 from "./Image/12Bateria.png";
import Bateria13 from "./Image/13Bateria.png";
import Bateria14 from "./Image/14Bateria.png";
import Bateria15 from "./Image/15Bateria.png";
import Bateria16 from "./Image/16Bateria.png";
import Bateria17 from "./Image/17Bateria.png";
import Bateria18 from "./Image/18Bateria.png";
import Bateria19 from "./Image/19Bateria.png";
import Bateria20 from "./Image/20Bateria.png";
import Bateria21 from "./Image/21Bateria.png";
import Bateria22 from "./Image/22Bateria.png";
import Bateria23 from "./Image/23Bateria.png";
import Bateria24 from "./Image/24Bateria.png";
import Bateria25 from "./Image/25Bateria.png";
import Bateria26 from "./Image/26Bateria.png";
import Bateria27 from "./Image/27Bateria.png";
import Bateria28 from "./Image/28Bateria.png";
import Bateria29 from "./Image/29Bateria.png";
import Bateria30 from "./Image/30Bateria.png";
import Bateria31 from "./Image/31Bateria.png";
import Bateria32 from "./Image/32Bateria.png";
import Bateria33 from "./Image/33Bateria.png";
import Bateria34 from "./Image/34Bateria.png";
import Bateria35 from "./Image/35Bateria.png";
import Bateria36 from "./Image/36Bateria.png";
import Bateria37 from "./Image/37Bateria.png";
import Bateria38 from "./Image/38Bateria.png";
import Bateria39 from "./Image/39Bateria.png";
import Bateria40 from "./Image/40Bateria.png";
import Bateria41 from "./Image/41Bateria.png";
import Bateria42 from "./Image/42Bateria.png";
import Bateria43 from "./Image/43Bateria.png";
import Bateria44 from "./Image/44Bateria.png";
import Bateria45 from "./Image/45Bateria.png";
import Bateria46 from "./Image/46Bateria.png";
import Bateria47 from "./Image/47Bateria.png";
import Bateria48 from "./Image/48Bateria.png";
import Bateria49 from "./Image/49Bateria.png";
import Bateria50 from "./Image/50Bateria.png";
import Bateria51 from "./Image/51Bateria.png";
import Bateria52 from "./Image/52Bateria.png";
import Bateria53 from "./Image/53Bateria.png";
import Bateria54 from "./Image/54Bateria.png";
import Bateria55 from "./Image/55Bateria.png";
import Bateria56 from "./Image/56Bateria.png";
import Bateria57 from "./Image/57Bateria.png";
import Bateria58 from "./Image/58Bateria.png";
import Bateria59 from "./Image/59Bateria.png";
import Bateria60 from "./Image/60Bateria.png";
import Paginate from "../Paginate/page";
import "../../style.css";

const products = [
  {
    id: 1,
    img: Bateria1,
    name: "Bateria Spanking Lilás",
    rating: 4.9,
    price: "R$3.749",
  },
  {
    id: 2,
    img: Bateria2,
    name: "Bateria Acústica Nagano Onix",
    rating: 5,
    price: "R$2.925",
  },
  {
    id: 3,
    img: Bateria3,
    name: "Bateria Michael Trinity",
    rating: 4.7,
    price: "R$3.750",
  },
  {
    id: 4,
    img: Bateria4,
    name: "Bateria Acústica Infantil ",
    rating: 3.6,
    price: "R$2.069",
  },
  {
    id: 5,
    img: Bateria5,
    name: "Bateria Acústica D One Rocket",
    rating: 5,
    price: "R$3.733",
  },
  {
    id: 6,
    img: Bateria6,
    name: "Bateria Premium Completa",
    rating: 4.8,
    price: "R$2.780",
  },
  {
    id: 7,
    img: Bateria7,
    name: "Kit Bateria Rmv Scorpion",
    rating: 4,
    price: "R$1.900",
  },
  {
    id: 8,
    img: Bateria8,
    name: "Bateria Pearl Road Show",
    rating: 4.4,
    price: "R$6.000",
  },
  {
    id: 9,
    img: Bateria9,
    name: "Kit de Bateria Pro Fire ",
    rating: 4.9,
    price: "R$3.500",
  },
  {
    id: 10,
    img: Bateria10,
    name: "Bateria Mapex Armory Series",
    rating: 5,
    price: "R$11.993",
  },
  {
    id: 11,
    img: Bateria11,
    name: "Bateria Profissional Tama",
    rating: 4.7,
    price: "R$5.244",
  },
  {
    id: 12,
    img: Bateria12,
    name: "Bateria Acústica Premium",
    rating: 4.8,
    price: "R$2.669",
  },
  {
    id: 13,
    img: Bateria13,
    name: "Bateria Eletrônica 6 Drums 5 Metal Silicone Portátil C Pedal",
    rating: 4.6,
    price: "R$269,56",
  },
  {
    id: 14,
    img: Bateria14,
    name: "Bateria Compacta Bumbo 16 Rmv Concept Compass Shell Pack",
    rating: 4.9,
    price: "R$2.399",
  },
  {
    id: 15,
    img: Bateria15,
    name: "Bateria Compacta Acústica - Com As Peles! Drum Compact",
    rating: 3.0,
    price: "R$999,29",
  },
  {
    id: 16,
    img: Bateria16,
    name: "Bateria De Estudo E Treino Vamper Oficial Fênix Pro",
    rating: 4.1,
    price: "R$939,29",
  },
  {
    id: 17,
    img: Bateria17,
    name: "Bateria Eletrônica Waldman Virtual Mesh Vm-9",
    rating: 4.5,
    price: "R$1.909",
  },
  {
    id: 18,
    img: Bateria18,
    name: "Bateria Eletrônica Waldman Virtual Mesh Vm-9",
    rating: 5.0,
    price: "R$44.100",
  },
  {
    id: 19,
    img: Bateria19,
    name: "Bateria Cajón Percussion Bateron BBCX500 Mini Bateria",
    rating: 4.9,
    price: "R$1.499",
  },
  {
    id: 20,
    img: Bateria20,
    name: "Bateria Mapex Armory Studioease Maple Birch AR628S Ultramarine",
    rating: 5,
    price: "R$9.199",
  },
  {
    id: 21,
    img: Bateria21,
    name: "Bateria Eletrônica De Dedo Portátil Fgdp 50 Preta Yamaha",
    rating: 5,
    price: "R$2.090",
  },
  {
    id: 22,
    img: Bateria22,
    name: "Bateria Odery The Tiger Sicilian Lemon Linha Tg",
    rating: 4.3,
    price: "R$4.390",
  },
  {
    id: 23,
    img: Bateria23,
    name: "Bateria Dw acabamento Vinil Oficial Linha Genetica",
    rating: 4.7,
    price: "R$34.198",
  },
  {
    id: 24,
    img: Bateria24,
    name: "Bateria Eletrônica 7pads Silicone Portátil Com Pedal Drum",
    rating: 3.7,
    price: "R$698,10",
  },
  {
    id: 25,
    img: Bateria25,
    name: "kit Eletrônica Drum Liverpool",
    rating: 5,
    price: "R$3.800",
  },
  {
    id: 26,
    img: Bateria26,
    name: "Conjunto De Bateria Eletrônica ",
    rating: 5,
    price: "R$700,82",
  },
  {
    id: 27,
    img: Bateria27,
    name: "Bateria Acustica X Pro ",
    rating: 4.8,
    price: "R$5.700",
  },
  {
    id: 28,
    img: Bateria28,
    name: "Bateria Gretsh Profissional ",
    rating: 4.1,
    price: "R$5.700",
  },
  {
    id: 29,
    img: Bateria29,
    name: "Bateria Gretsh Profissional ",
    rating: 4.9,
    price: "R$6.000",
  },
  {
    id: 30,
    img: Bateria30,
    name: "Bateria Nagano Onix Smart ",
    rating: 4,
    price: "R$3.342",
  },
  {
    id: 31,
    img: Bateria31,
    name: "Bateria Eletrônica Drum Bass",
    rating: 4.3,
    price: "R$13.476",
  },
  {
    id: 32,
    img: Bateria32,
    name: "E-drum Pad Percussão Bateria",
    rating: 5,
    price: "R$2.871",
  },
  {
    id: 33,
    img: Bateria33,
    name: "Bateria Taye Spotlight Graphic",
    rating: 4.4,
    price: "R$7.134",
  },
  {
    id: 34,
    img: Bateria34,
    name: "Bateria Noah Sc Series Poplar",
    rating: 3.4,
    price: "R$2.754",
  },
  {
    id: 35,
    img: Bateria35,
    name: "Bateria Dw Design Series Satin",
    rating: 3.9,
    price: "R$3.987",
  },
  {
    id: 36,
    img: Bateria36,
    name: "Mini Bateria Instrumento Infantil",
    rating: 4.9,
    price: "R$187,00",
  },

  {
    id: 37,
    img: Bateria37,
    name: "Mini Bateria Infantil Rosa",
    rating: 3.8,
    price: "R$249,46",
  },
  {
    id: 38,
    img: Bateria38,
    name: "Bateria Phx Infantil Preta Ds514c Bk",
    rating: 4.3,
    price: "R$2.379",
  },
  {
    id: 39,
    img: Bateria39,
    name: "Bateria Infantil Drum Kids Azul",
    rating: 4,
    price: "R$360,97",
  },
  {
    id: 40,
    img: Bateria40,
    name: "Bateria Praticável em casa ",
    rating: 3.8,
    price: "R$329,99",
  },
  {
    id: 41,
    img: Bateria41,
    name: "Bateria Eletronica Portatil Revas Pb-350 By Roland",
    rating: 4.8,
    price: "R$1.267",
  },
  {
    id: 42,
    img: Bateria42,
    name: "Bateria Rmv Original Fibertech Bumbo Duplo",
    rating: 4.9,
    price: "R$5.987",
  },
  {
    id: 43,
    img: Bateria43,
    name: "Bateria Junior Premium Dx35j 5 Pcs Bumbo 14",
    rating: 3,
    price: "R$1.024",
  },
  {
    id: 44,
    img: Bateria44,
    name: "Bateria Eletrônica Yamaha Dtx10k-mrw Profissional",
    rating: 4.2,
    price: "R$35.100",
  },
  {
    id: 45,
    img: Bateria45,
    name: "Bateria Roland VAD307 Drums",
    rating: 4.1,
    price: "R$23.700",
  },
  {
    id: 46,
    img: Bateria46,
    name: "Bateria de Infantil Bichos",
    rating: 3,
    price: "R$593,42",
  },
  {
    id: 47,
    img: Bateria47,
    name: "Bateria Cajón Percussion",
    rating: 4,
    price: "R$1.744",
  },
  {
    id: 48,
    img: Bateria48,
    name: "Bateria Musical Well",
    rating: 4.6,
    price: "R$1.600",
  },
  {
    id: 49,
    img: Bateria49,
    name: "Bateria Acústica Rmv Cross completa Marron",
    rating: 4,
    price: "R$2.650",
  },
  {
    id: 50,
    img: Bateria50,
    name: "Bateria Mapex Prodigy Completa White Profissional",
    rating: 5,
    price: "R$5.999",
  },
  {
    id: 51,
    img: Bateria51,
    name: "Bateria Pro Fire PR20BH Branca WHITE Original",
    rating: 4.4,
    price: "R$3.972",
  },
  {
    id: 52,
    img: Bateria52,
    name: "Bateria Acustica X-pro Gig Upper Shell Pack",
    rating: 2.5,
    price: "R$2.000",
  },
  {
    id: 53,
    img: Bateria53,
    name: "Bateria Pearl Decade Maple Satin ",
    rating: 5,
    price: "R$5.361",
  },
  {
    id: 54,
    img: Bateria54,
    name: "Bateria Eletronica Mj Audio Sd30m",
    rating: 4.1,
    price: "R$3.000",
  },
  {
    id: 55,
    img: Bateria55,
    name: "Bateria Pearl Decade Maple Yellow",
    rating: 5,
    price: "R$6.199",
  },
  {
    id: 56,
    img: Bateria56,
    name: "Bateria Compacta Drum Compact",
    rating: 3.5,
    price: "R$1.001",
  },
  {
    id: 57,
    img: Bateria57,
    name: "Bateria Eletrônica EFNote",
    rating: 5,
    price: "R$4.730",
  },
  {
    id: 58,
    img: Bateria58,
    name: "Bateria Pearl Shell Pack",
    rating: 4.7,
    price: "R$10.000",
  },
  {
    id: 59,
    img: Bateria59,
    name: "Bateria Nagano com Ferragem ",
    rating: 5,
    price: "R$7.198",
  },
  {
    id: 60,
    img: Bateria60,
    name: "Bateria Profissional Roland VAD706",
    rating: 5,
    price: "R$4.349",
  },
];

const ITEMS_PER_PAGE = 12;

function Produtos() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const lastIndex = currentPage * ITEMS_PER_PAGE;
  const firstIndex = lastIndex - ITEMS_PER_PAGE;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const handlePageChange = (page) => {
    setLoading(true); // Mostra o spinner
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="n-products fade-effect">
      {loading ? (
        <div className="spinner-container">
          <span className="spinnerProdutos"></span>
        </div>
      ) : (
        <div className="n-content">
          {currentProducts.map((product) => (
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
      )}

      <Paginate
        totalItems={products.length}
        itemsPerPage={ITEMS_PER_PAGE}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Produtos;
