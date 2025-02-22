import { useState } from "react";
import Baqueta1 from "./Image/1Baqueta.png";
import Baqueta2 from "./Image/2Baqueta.png";
import Baqueta3 from "./Image/3Baqueta.png";
import Baqueta4 from "./Image/4Baqueta.png";
import Baqueta5 from "./Image/5Baqueta.png";
import Baqueta6 from "./Image/6Baqueta.png";
import Baqueta7 from "./Image/7Baqueta.png";
import Baqueta8 from "./Image/8Baqueta.png";
import Baqueta9 from "./Image/9Baqueta.png";
import Baqueta10 from "./Image/10Baqueta.png";
import Baqueta11 from "./Image/11Baqueta.png";
import Baqueta12 from "./Image/12Baqueta.png";
import Baqueta13 from "./Image/13Baqueta.png";
import Baqueta14 from "./Image/14Baqueta.png";
import Baqueta15 from "./Image/15Baqueta.png";
import Baqueta16 from "./Image/16Baqueta.png";
import Baqueta17 from "./Image/17Baqueta.png";
import Baqueta18 from "./Image/18Baqueta.png";
import Baqueta19 from "./Image/19Baqueta.png";
import Baqueta20 from "./Image/20Baqueta.png";
import Baqueta21 from "./Image/21Baqueta.png";
import Baqueta22 from "./Image/22Baqueta.png";
import Baqueta23 from "./Image/23Baqueta.png";
import Baqueta24 from "./Image/24Baqueta.png";
import Baqueta25 from "./Image/25Baqueta.png";
import Baqueta26 from "./Image/26Baqueta.png";
import Baqueta27 from "./Image/27Baqueta.png";
import Baqueta28 from "./Image/28Baqueta.png";
import Baqueta29 from "./Image/29Baqueta.png";
import Baqueta30 from "./Image/30Baqueta.png";
import Baqueta31 from "./Image/31Baqueta.png";
import Baqueta32 from "./Image/32Baqueta.png";
import Baqueta33 from "./Image/33Baqueta.png";
import Baqueta34 from "./Image/34Baqueta.png";
import Baqueta35 from "./Image/35Baqueta.png";
import Baqueta36 from "./Image/36Baqueta.png";
import Baqueta37 from "./Image/37Baqueta.png";
import Baqueta38 from "./Image/38Baqueta.png";
import Baqueta39 from "./Image/39Baqueta.png";
import Baqueta40 from "./Image/40Baqueta.png";
import Baqueta41 from "./Image/41Baqueta.png";
import Baqueta42 from "./Image/42Baqueta.png";
import Baqueta43 from "./Image/43Baqueta.png";
import Baqueta44 from "./Image/44Baqueta.png";
import Baqueta45 from "./Image/45Baqueta.png";
import Baqueta46 from "./Image/46Baqueta.png";
import Baqueta47 from "./Image/47Baqueta.png";
import Baqueta48 from "./Image/48Baqueta.png";
import Baqueta49 from "./Image/49Baqueta.png";
import Baqueta50 from "./Image/50Baqueta.png";
import Baqueta51 from "./Image/51Baqueta.png";
import Baqueta52 from "./Image/52Baqueta.png";
import Baqueta53 from "./Image/53Baqueta.png";
import Baqueta54 from "./Image/54Baqueta.png";
import Baqueta55 from "./Image/55Baqueta.png";
import Baqueta56 from "./Image/56Baqueta.png";
import Baqueta57 from "./Image/57Baqueta.png";
import Baqueta58 from "./Image/58Baqueta.png";
import Baqueta59 from "./Image/59Baqueta.png";
import Baqueta60 from "./Image/60Baqueta.png";
import Paginate from "../Paginate/page";
import "../../style.css";

const products = [
  {
    id: 1,
    img: Baqueta1,
    name: "Baquetas Rod Toke Bambu 1 Par",
    rating: 4.9,
    price: "R$39,49",
  },
  {
    id: 2,
    img: Baqueta2,
    name: "Baquetas Spanking Ponta Estoque",
    rating: 4.4,
    price: "R$54,53",
  },
  {
    id: 3,
    img: Baqueta3,
    name: "Baquetas Spanking Marfim",
    rating: 5,
    price: "R$40,00",
  },
  {
    id: 4,
    img: Baqueta4,
    name: "Baqueta Vic Firth 5b American",
    rating: 5,
    price: "R$115,28",
  },
  {
    id: 5,
    img: Baqueta5,
    name: "Baqueta De Bateria 7a Grip Eva 7a Sensation Balanceada",
    rating: 5,
    price: "R$88,90",
  },
  {
    id: 6,
    img: Baqueta6,
    name: "Kit 3 Baquetas Nirvana 7a 5a 5b Ponta Madeira Liverpool",
    rating: 4.6,
    price: "R$51,44",
  },
  {
    id: 7,
    img: Baqueta7,
    name: "Baqueta Hickory S Johnson Branca (par) Promark Txdc17w-white",
    rating: 5,
    price: "R$204,67",
  },
  {
    id: 8,
    img: Baqueta8,
    name: "Par De Baquetas Torelli Tq020 Fibra Preta Profissional",
    rating: 4.4,
    price: "R$36,28",
  },
  {
    id: 9,
    img: Baqueta9,
    name: "Baqueta C. Ibañez Premium Series Rock 903 Cor Natural TM 5A/5B",
    rating: 4.8,
    price: "R$57,77",
  },
  {
    id: 10,
    img: Baqueta10,
    name: "Baqueta Pro Fire Spanking 5b Ponta De Nylon Par Bateria",
    rating: 4,
    price: "R$39,44",
  },
  {
    id: 11,
    img: Baqueta11,
    name: "Baqueta Liverpool 5a Tennessee Marfim 10 Pares P. Madeira",
    rating: 4,
    price: "R$181,71",
  },
  {
    id: 12,
    img: Baqueta12,
    name: "Baqueta C. Ibanez X-pro Premium Warm Up 918 2b Par Marfim",
    rating: 4.1,
    price: "R$38,45",
  },
  {
    id: 13,
    img: Baqueta13,
    name: "Baqueta Colorido Infantil",
    rating: 4.3,
    price: "R$29,99",
  },
  {
    id: 14,
    img: Baqueta14,
    name: "Vassourinha De Aço Torelli Tv078",
    rating: 5,
    price: "R$176,88",
  },
  {
    id: 15,
    img: Baqueta15,
    name: "Kit Baquetas Para Zabumba ",
    rating: 4.9,
    price: "R$29,79",
  },
  {
    id: 16,
    img: Baqueta16,
    name: "50 Pares De Baquetas Maple",
    rating: 4.5,
    price: "R$814,93",
  },
  {
    id: 17,
    img: Baqueta17,
    name: "Baqueta C Ibanez 5b 921 Premium",
    rating: 4,
    price: "R$39,44",
  },
  {
    id: 18,
    img: Baqueta18,
    name: "Baqueta Vic Firth American Classic",
    rating: 4.1,
    price: "R$156,00",
  },
  {
    id: 19,
    img: Baqueta19,
    name: "Baqueta P/ Repinique Cônica ",
    rating: 4.2,
    price: "R$39,90",
  },
  {
    id: 20,
    img: Baqueta20,
    name: "Baqueta Para Lira Em Nylon",
    rating: 4.2,
    price: "R$36,53",
  },
  {
    id: 21,
    img: Baqueta21,
    name: "Par Baqueta Vassourinha Nylon",
    rating: 4.7,
    price: "R$111,50",
  },
  {
    id: 22,
    img: Baqueta22,
    name: "Baqueta 5b Colors Luminosa",
    rating: 4.8,
    price: "R$47,82",
  },
  {
    id: 23,
    img: Baqueta23,
    name: "Baqueta Liverpool Feltro Medium",
    rating: 4,
    price: "R$68,65",
  },
  {
    id: 24,
    img: Baqueta24,
    name: "Clave De Percussão Jatoba",
    rating: 4.2,
    price: "R$43,15",
  },
  {
    id: 25,
    img: Baqueta25,
    name: "Baqueta Acústica Em Bambu Vassourinha Vassoura O Par",
    rating: 4.6,
    price: "R$28,33",
  },
  {
    id: 26,
    img: Baqueta26,
    name: "Baqueta Eletrônica Virtual PocketDrum 2 Max",
    rating: 4.9,
    price: "R$139,99",
  },
  {
    id: 27,
    img: Baqueta27,
    name: "Baqueta C. Ibañez Hickory 5BH Padrão 5B Clássica Madeira",
    rating: 4.8,
    price: "R$89,98",
  },
  {
    id: 28,
    img: Baqueta28,
    name: "Baqueta Em Nylon Dupla Para Tamborim sem Marca ",
    rating: 4.6,
    price: "R$08,00",
  },
  {
    id: 29,
    img: Baqueta29,
    name: "Baqueta Los Cabos Hickory 7A Preta 100% Batera Drum Shop",
    rating: 4.4,
    price: "R$98,79",
  },
  {
    id: 30,
    img: Baqueta30,
    name: "Baqueta Zildjian 400 Anos Limited Edition Jazz 5B Azul em Hickory",
    rating: 4.9,
    price: "R$75,00",
  },
  {
    id: 31,
    img: Baqueta31,
    name: "Baqueta Ponta Nylon AT1 Alumínio Quadriton Spanking",
    rating: 3.8,
    price: "R$57,92",
  },
  {
    id: 32,
    img: Baqueta32,
    name: "Kit com 4 Pares de Baqueta Vic Firth 5B EXTREME",
    rating: 4,
    price: "R$271,41",
  },
  {
    id: 33,
    img: Baqueta33,
    name: "Baqueta De Surdo Infantil Gope Branca Original",
    rating: 4.1,
    price: "R$34,39",
  },
  {
    id: 34,
    img: Baqueta34,
    name: "Baqueta Promark LA5BW La Special 5B, Ponta de Madeira",
    rating: 4.3,
    price: "R$44,79",
  },
  {
    id: 35,
    img: Baqueta35,
    name: "Baqueta Pro Mark Hickory 7A - Mundomax Original",
    rating: 4.5,
    price: "R$47,38",
  },
  {
    id: 36,
    img: Baqueta36,
    name: "Par De Baqueta Liverpool P/bacurinha Silicone Profissional ",
    rating: 3.5,
    price: "R$22,20",
  },

  {
    id: 37,
    img: Baqueta37,
    name: "Baqueta Tripla Luen Percussion Para Tamborim - Preto",
    rating: 4,
    price: "R$5,00",
  },
  {
    id: 38,
    img: Baqueta38,
    name: "Baqueta Nova By Vic Firth Vermelha 5B Ponta Nylon",
    rating: 5,
    price: "R$39,99",
  },
  {
    id: 39,
    img: Baqueta39,
    name: "Baqueta Classic 5B Firegrain Ponta De Madeira - Marron",
    rating: 5,
    price: "R$90,18",
  },
  {
    id: 40,
    img: Baqueta40,
    name: "Baqueta para Cajon de nylon Torelli Blastick TQ018",
    rating: 4.9,
    price: "R$88,33",
  },
  {
    id: 41,
    img: Baqueta41,
    name: "Baqueta Percussão Alba Drumline",
    rating: 4.8,
    price: "R$49,99",
  },
  {
    id: 42,
    img: Baqueta42,
    name: "Baqueta 5A Madeira Gota Nova",
    rating: 4.7,
    price: "R$84,55",
  },
  {
    id: 43,
    img: Baqueta43,
    name: "Baqueta Liverpool Classic",
    rating: 5,
    price: "R$34,99",
  },
  {
    id: 44,
    img: Baqueta44,
    name: "Baqueta Torelli TQ001 Clave Jatoba ",
    rating: 4.1,
    price: "R$36,80",
  },
  {
    id: 45,
    img: Baqueta45,
    name: "Baqueta Metalofone Xilofone Esfera 20mm Plástico ABS",
    rating: 3.3,
    price: "R$17,25",
  },
  {
    id: 46,
    img: Baqueta46,
    name: "Baqueta Blue Water Ponta De Madeira Par Liverpool",
    rating: 4.5,
    price: "R$53,74",
  },
  {
    id: 47,
    img: Baqueta47,
    name: "Baqueta C. Ibañez Premium SuperGrip Ponta Nylon Padrão",
    rating: 5,
    price: "R$74,09",
  },
  {
    id: 48,
    img: Baqueta48,
    name: "Baqueta 5A Liverpool COLOR Series Par Ponta De Madeira, Dourado",
    rating: 4.9,
    price: "R$63,25",
  },
  {
    id: 49,
    img: Baqueta49,
    name: "Baquetas 5A para bateria Dragon",
    rating: 5,
    price: "R$350,10",
  },
  {
    id: 50,
    img: Baqueta50,
    name: "Baqueta Para Surdo Ou Surdão",
    rating: 4,
    price: "R$29,80",
  },
  {
    id: 51,
    img: Baqueta51,
    name: "Baqueta Tamborim 3 pontas",
    rating: 5,
    price: "R$14,05",
  },
  {
    id: 52,
    img: Baqueta52,
    name: "Par de Baqueta Span Luminosa",
    rating: 3.9,
    price: "R$19,90",
  },
  {
    id: 53,
    img: Baqueta53,
    name: "Baqueta Para Bateria Premium PL7AN Liverpool",
    rating: 4.7,
    price: "R$39,80",
  },
  {
    id: 54,
    img: Baqueta54,
    name: "Baqueta Prostick PR01 Hickory USA Ponta Madeira Grip 7A",
    rating: 5,
    price: "R$110,24",
  },
  {
    id: 55,
    img: Baqueta55,
    name: "Baqueta C. Ibañez Premium Percussão Timbale Tb Sem Ponta",
    rating: 4.8,
    price: "R$40,19",
  },
  {
    id: 56,
    img: Baqueta56,
    name: "Baqueta Infantil Master Kids Colors 5A - Liverpoo",
    rating: 4.1,
    price: "R$204,15",
  },
  {
    id: 57,
    img: Baqueta57,
    name: "Baqueta C. Ibanez Premium Vanera 5B",
    rating: 4.9,
    price: "R$32,99",
  },
  {
    id: 58,
    img: Baqueta58,
    name: "Par de Baqueta C.Ibanez 7A Premium ",
    rating: 4.4,
    price: "R$60,98",
  },
  {
    id: 59,
    img: Baqueta59,
    name: "Baqueta Torelli Complatinelas Tito Oliveira",
    rating: 5,
    price: "R$58,99",
  },
  {
    id: 60,
    img: Baqueta60,
    name: "Baqueta C. Ibañez Premium Series 2B Metal ",
    rating: 4.8,
    price: "R$23,89",
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
