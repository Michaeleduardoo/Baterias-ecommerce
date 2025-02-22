import { useState } from "react";
import Prato1 from "./Image/1Prato.png";
import Prato2 from "./Image/2Prato.png";
import Prato3 from "./Image/3Prato.png";
import Prato4 from "./Image/4Prato.png";
import Prato5 from "./Image/5Prato.png";
import Prato6 from "./Image/6Prato.png";
import Prato7 from "./Image/7Prato.png";
import Prato8 from "./Image/8Prato.png";
import Prato9 from "./Image/9Prato.png";
import Prato10 from "./Image/10Prato.png";
import Prato11 from "./Image/11Prato.png";
import Prato12 from "./Image/12Prato.png";
import Prato13 from "./Image/13Prato.png";
import Prato14 from "./Image/14Prato.png";
import Prato15 from "./Image/15Prato.png";
import Prato16 from "./Image/16Prato.png";
import Prato17 from "./Image/17Prato.png";
import Prato18 from "./Image/18Prato.png";
import Prato19 from "./Image/19Prato.png";
import Prato20 from "./Image/20Prato.png";
import Prato21 from "./Image/21Prato.png";
import Prato22 from "./Image/22Prato.png";
import Prato23 from "./Image/23Prato.png";
import Prato24 from "./Image/24Prato.png";
import Prato25 from "./Image/25Prato.png";
import Prato26 from "./Image/26Prato.png";
import Prato27 from "./Image/27Prato.png";
import Prato28 from "./Image/28Prato.png";
import Prato29 from "./Image/29Prato.png";
import Prato30 from "./Image/30Prato.png";
import Prato31 from "./Image/31Prato.png";
import Prato32 from "./Image/32Prato.png";
import Prato33 from "./Image/33Prato.png";
import Prato34 from "./Image/34Prato.png";
import Prato35 from "./Image/35Prato.png";
import Prato36 from "./Image/36Prato.png";
import Prato37 from "./Image/37Prato.png";
import Prato38 from "./Image/38Prato.png";
import Prato39 from "./Image/39Prato.png";
import Prato40 from "./Image/40Prato.png";
import Prato41 from "./Image/41Prato.png";
import Prato42 from "./Image/42Prato.png";
import Prato43 from "./Image/43Prato.png";
import Prato44 from "./Image/44Prato.png";
import Prato45 from "./Image/45Prato.png";
import Prato46 from "./Image/46Prato.png";
import Prato47 from "./Image/47Prato.png";
import Prato48 from "./Image/48Prato.png";
import Prato49 from "./Image/49Prato.png";
import Prato50 from "./Image/50Prato.png";
import Prato51 from "./Image/51Prato.png";
import Prato52 from "./Image/52Prato.png";
import Prato53 from "./Image/53Prato.png";
import Prato54 from "./Image/54Prato.png";
import Prato55 from "./Image/55Prato.png";
import Prato56 from "./Image/56Prato.png";
import Prato57 from "./Image/57Prato.png";
import Prato58 from "./Image/58Prato.png";
import Prato59 from "./Image/59Prato.png";
import Prato60 from "./Image/60Prato.png";
import Paginate from "../Paginate/page";
import "../../style.css";

const products = [
  {
    id: 1,
    img: Prato1,
    name: "Set De Pratos Sahab Hero Aço Escovado + Bag",
    rating: 4,
    price: "R$692,09",
  },
  {
    id: 2,
    img: Prato2,
    name: "Prato Pad Prato Eletrônica Crash - Choke System",
    rating: 3.8,
    price: "R$424,40",
  },
  {
    id: 3,
    img: Prato3,
    name: "Kit De Pratos Waldman Harmony Har 14 16 18 20",
    rating: 4.9,
    price: "R$546,83",
  },
  {
    id: 4,
    img: Prato4,
    name: "Kit Prato Odery Bronz Focused Series Brass",
    rating: 5,
    price: "R$1.199",
  },
  {
    id: 5,
    img: Prato5,
    name: "Prato De Prato Hi Hat Chimbal",
    rating: 4.8,
    price: "R$258,99",
  },
  {
    id: 6,
    img: Prato6,
    name: "Kit 4 Pratos Prato Liverpool",
    rating: 4.1,
    price: "R$788,80",
  },
  {
    id: 7,
    img: Prato7,
    name: "3 De Pratos Zeus Custom",
    rating: 5,
    price: "R$2.499",
  },
  {
    id: 8,
    img: Prato8,
    name: "Prato Prato Orion Hihat 14",
    rating: 4.9,
    price: "R$985,00",
  },
  {
    id: 9,
    img: Prato9,
    name: "Prato Para Prato Orion Solo Pro China De 16",
    rating: 4.5,
    price: "R$457,78",
  },
  {
    id: 10,
    img: Prato10,
    name: "Prato Orion Splash 12 Twister - Twr12sp Cor Dourado",
    rating: 4,
    price: "R$199,93",
  },
  {
    id: 11,
    img: Prato11,
    name: "Prato De Estudo Gorilla Em Borracha 10¨ Spg10",
    rating: 3.6,
    price: "R$244,09",
  },
  {
    id: 12,
    img: Prato12,
    name: "Pratos Para Prato Set 14/16/20 Premium By Zeus",
    rating: 5,
    price: "R$300,05",
  },
  {
    id: 13,
    img: Prato13,
    name: "Pratos Prato Tennessee Rookie",
    rating: 4.3,
    price: "R$369,48",
  },
  {
    id: 14,
    img: Prato14,
    name: "Prato Orion Groovex Crash New",
    rating: 5,
    price: "R$526,24",
  },
  {
    id: 15,
    img: Prato15,
    name: "Prato Crash 18 Ataque Orion",
    rating: 4.9,
    price: "R$509,79",
  },
  {
    id: 16,
    img: Prato16,
    name: "Prato Eletrônico Hihat De 12 Pç",
    rating: 4.8,
    price: "R$1.634",
  },
  {
    id: 17,
    img: Prato17,
    name: "Prato Prato Zeus Bronze",
    rating: 5,
    price: "R$1.099",
  },
  {
    id: 18,
    img: Prato18,
    name: "Prato Odery Bronz Low Prata",
    rating: 4.5,
    price: "R$800,00",
  },
  {
    id: 19,
    img: Prato19,
    name: "Prato Profissional com Polegadas",
    rating: 4.2,
    price: "R$199,40",
  },
  {
    id: 20,
    img: Prato20,
    name: "Prato De Efeito Clapstack 14",
    rating: 5,
    price: "R$451,33",
  },
  {
    id: 21,
    img: Prato21,
    name: "Kit Set De Pratos Waldman Har-k101214 Clap Stack ",
    rating: 4.5,
    price: "R$225,30",
  },
  {
    id: 22,
    img: Prato22,
    name: "Prato Zeus Evolution Pro Splash 8 Zeps8 Oficial",
    rating: 4.4,
    price: "R$191,22",
  },
  {
    id: 23,
    img: Prato23,
    name: "Chimbal Hi-hat Silent Tennessee 14 Polegadas Par Liverpool",
    rating: 4.9,
    price: "R$398,65",
  },
  {
    id: 24,
    img: Prato24,
    name: "Set De Pratos Silenciosos Hero Mute 14 16 18 20 Black Color",
    rating: 4.7,
    price: "R$619,10",
  },
  {
    id: 25,
    img: Prato25,
    name: "Prato Domene Hi-Hat 15 Série Nova",
    rating: 5,
    price: "R$1.613",
  },
  {
    id: 26,
    img: Prato26,
    name: "Prato Trash Crash De 16 Pol",
    rating: 4.3,
    price: "R$729,82",
  },
  {
    id: 27,
    img: Prato27,
    name: "Prato De Efeito Stack Tribal",
    rating: 4.8,
    price: "R$300,98",
  },
  {
    id: 28,
    img: Prato28,
    name: "Prato Prato Waldman Bursa",
    rating: 4.6,
    price: "R$710,00",
  },
  {
    id: 29,
    img: Prato29,
    name: "2 Prato De Prato - Splash",
    rating: 5,
    price: "R$407,39",
  },
  {
    id: 30,
    img: Prato30,
    name: "Chimbal Zildjian Z Custom 14",
    rating: 4,
    price: "R$2.575",
  },
  {
    id: 31,
    img: Prato31,
    name: "Crash Zildjian Fast Crash 15",
    rating: 4.2,
    price: "R$3.079",
  },
  {
    id: 32,
    img: Prato32,
    name: "Chimbal BFC Brazilian Finest",
    rating: 3.3,
    price: "R$1.271",
  },
  {
    id: 33,
    img: Prato33,
    name: "Pad Prato Prato Eletronica Yamaha Condução",
    rating: 4.8,
    price: "R$7.134",
  },
  {
    id: 34,
    img: Prato34,
    name: "Pad Prato Prato Ddrum Eletrônica Dd1 Original",
    rating: 4.9,
    price: "R$754,79",
  },
  {
    id: 35,
    img: Prato35,
    name: "Prato De Condução Prato 20 Liga Bronze B8 Act",
    rating: 4,
    price: "R$987,99",
  },
  {
    id: 36,
    img: Prato36,
    name: "Prato Para Prato Orion Ms China Crash De 12 Dourado",
    rating: 4.2,
    price: "R$401,20",
  },

  {
    id: 37,
    img: Prato37,
    name: "Prato de Prato 900 HHH-15B Heavy Hi-Hat 15",
    rating: 4.8,
    price: "R$543,09",
  },
  {
    id: 38,
    img: Prato38,
    name: "Pratos de Prato Conjunto De Prato Vermelho  16",
    rating: 4.7,
    price: "R$379,99",
  },
  {
    id: 39,
    img: Prato39,
    name: "Pratos para Prato Címbalos De Baixo Som Silenciosos",
    rating: 4,
    price: "R$490,15",
  },
  {
    id: 40,
    img: Prato40,
    name: "Pratos Para Prato B10 14/16/18/20 Bag Spanking Finest",
    rating: 5,
    price: "R$2.988",
  },
  {
    id: 41,
    img: Prato41,
    name: "Prato para Prato Krest Fusion Series 12 Mini China Bronze B8",
    rating: 4,
    price: "R$667,00",
  },
  {
    id: 42,
    img: Prato42,
    name: "Prato Infantil 10 Polegadas Cor Prata sem Marca",
    rating: 3.7,
    price: "R$284,55",
  },
  {
    id: 43,
    img: Prato43,
    name: "Prato de chimbal 14 da marca Meinl Classi",
    rating: 5,
    price: "R$1.004",
  },
  {
    id: 44,
    img: Prato44,
    name: "Prato de Prato Big Bell Ride 18 Meinl - Classics",
    rating: 4.9,
    price: "R$790",
  },
  {
    id: 45,
    img: Prato45,
    name: "Pratos para PratoB 10 Waldman Balance",
    rating: 5,
    price: "R$3.700",
  },
  {
    id: 46,
    img: Prato46,
    name: "Rhythm Bytes Pacote de pratos  | 7 pratos",
    rating: 4.1,
    price: "R$4.593",
  },
  {
    id: 47,
    img: Prato47,
    name: "Prato Silenciador Prato EVANS ride 20 SO20RIDE",
    rating: 5,
    price: "R$744,99",
  },
  {
    id: 48,
    img: Prato48,
    name: "Kit Completo De Pratos P/ Prato - Hi Hat, Crash E Ride H.m",
    rating: 4.9,
    price: "R$750,05",
  },
  {
    id: 49,
    img: Prato49,
    name: "Prato Artesanal De 6/8/9/10/12",
    rating: 4,
    price: "R$1.850",
  },
  {
    id: 50,
    img: Prato50,
    name: "Mini Pratos P/ Prato Profissional",
    rating: 4.6,
    price: "R$299,00",
  },
  {
    id: 51,
    img: Prato51,
    name: "Pratos Zeus Custom Profissional",
    rating: 5,
    price: "R$3.500",
  },
  {
    id: 52,
    img: Prato52,
    name: "Pratos de Prato Stagg AXK",
    rating: 4.1,
    price: "R$1.000",
  },
  {
    id: 53,
    img: Prato53,
    name: "Prato Pad Prato Eletrônica Crash/Ride 12″ Choke System",
    rating: 4.3,
    price: "R$922,11",
  },
  {
    id: 54,
    img: Prato54,
    name: "Prato Prato De Efeito Zeus Orbit Crash 16 B20 – BHZ",
    rating: 4.2,
    price: "R$400,14",
  },
  {
    id: 55,
    img: Prato55,
    name: "Prato de Ataque para Prato Orion X10 Crash De 18",
    rating: 5,
    price: "R$789,19",
  },
  {
    id: 56,
    img: Prato56,
    name: "Prato Zildjian, Sabian, Orion, e muito mais | Musitech",
    rating: 4.5,
    price: "R$414,74",
  },
  {
    id: 57,
    img: Prato57,
    name: "Prato de Prato Zildjian K ",
    rating: 4.9,
    price: "R$432,99",
  },
  {
    id: 58,
    img: Prato58,
    name: "Prato Prato Eletronica Pcy100",
    rating: 4.4,
    price: "R$490,98",
  },
  {
    id: 59,
    img: Prato59,
    name: "Pratos 14/16/18/20 Bronz",
    rating: 4.3,
    price: "R$3.218",
  },
  {
    id: 60,
    img: Prato60,
    name: "Pratos Prato Waldman",
    rating: 4.8,
    price: "R$2.443",
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
