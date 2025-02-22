import { useState } from "react";
import Ale1 from "./Image/1Ale.png";
import Ale2 from "./Image/2Ale.png";
import Ale3 from "./Image/3Ale.png";
import Ale4 from "./Image/4Ale.png";
import Ale5 from "./Image/5Ale.png";
import Ale6 from "./Image/6Ale.png";
import Ale7 from "./Image/7Ale.png";
import Ale8 from "./Image/8Ale.png";
import Ale9 from "./Image/9Ale.png";
import Ale10 from "./Image/10Ale.png";
import Ale11 from "./Image/11Ale.png";
import Ale12 from "./Image/12Ale.png";
import Ale13 from "./Image/13Ale.png";
import Ale14 from "./Image/14Ale.png";
import Ale15 from "./Image/15Ale.png";
import Ale16 from "./Image/16Ale.png";
import Ale17 from "./Image/17Ale.png";
import Ale18 from "./Image/18Ale.png";
import Ale19 from "./Image/19Ale.png";
import Ale20 from "./Image/20Ale.png";
import Ale21 from "./Image/21Ale.png";
import Ale22 from "./Image/22Ale.png";
import Ale23 from "./Image/23Ale.png";
import Ale24 from "./Image/24Ale.png";
import Ale25 from "./Image/25Ale.png";
import Ale26 from "./Image/26Ale.png";
import Ale27 from "./Image/27Ale.png";
import Ale28 from "./Image/28Ale.png";
import Ale29 from "./Image/29Ale.png";
import Ale30 from "./Image/30Ale.png";
import Ale31 from "./Image/31Ale.png";
import Ale32 from "./Image/32Ale.png";
import Ale33 from "./Image/33Ale.png";
import Ale34 from "./Image/34Ale.png";
import Ale35 from "./Image/35Ale.png";
import Ale36 from "./Image/36Ale.png";
import Ale37 from "./Image/37Ale.png";
import Ale38 from "./Image/38Ale.png";
import Ale39 from "./Image/39Ale.png";
import Ale40 from "./Image/40Ale.png";
import Ale41 from "./Image/41Ale.png";
import Ale42 from "./Image/42Ale.png";
import Ale43 from "./Image/43Ale.png";
import Ale44 from "./Image/44Ale.png";
import Ale45 from "./Image/45Ale.png";
import Ale46 from "./Image/46Ale.png";
import Ale47 from "./Image/47Ale.png";
import Ale48 from "./Image/48Ale.png";
import Ale49 from "./Image/49Ale.png";
import Ale50 from "./Image/50Ale.png";
import Ale51 from "./Image/51Ale.png";
import Ale52 from "./Image/52Ale.png";
import Ale53 from "./Image/53Ale.png";
import Ale54 from "./Image/54Ale.png";
import Ale55 from "./Image/55Ale.png";
import Ale56 from "./Image/56Ale.png";
import Ale57 from "./Image/57Ale.png";
import Ale58 from "./Image/58Ale.png";
import Ale59 from "./Image/59Ale.png";
import Ale60 from "./Image/60Ale.png";
import Paginate from "../Paginate/page";
import "../../style.css";

const products = [
  {
    id: 1,
    img: Ale1,
    name: "Bateria Eletrônica Boss DR-01S",
    rating: 4.7,
    price: "R$2.000",
  },
  {
    id: 2,
    img: Ale2,
    name: "Aro Para Caixa Wood Shot Madeira",
    rating: 4.2,
    price: "R$201,50",
  },
  {
    id: 3,
    img: Ale3,
    name: "Bateria X-Pro JD03 Preta Stage",
    rating: 4.9,
    price: "R$3.999",
  },
  {
    id: 4,
    img: Ale4,
    name: "kit Completo de Substituição",
    rating: 4.5,
    price: "R$199,99",
  },
  {
    id: 5,
    img: Ale5,
    name: "Acessórios para bateria para um tambor de 14 polegadas",
    rating: 4.1,
    price: "R$385,95",
  },
  {
    id: 6,
    img: Ale6,
    name: "24pcs EBATHCHINA Amortecedores de Tambor de Silicone em Café",
    rating: 5,
    price: "R$100,00",
  },
  {
    id: 7,
    img: Ale7,
    name: "Tajon FSA Bass Plus TAJ 80 Yellow/Purple - Original",
    rating: 4.8,
    price: "R$866,35",
  },
  {
    id: 8,
    img: Ale8,
    name: "Caixa Bateria Tama SLP 14x5,5 Sound Aluminiun",
    rating: 4.8,
    price: "R$550,10",
  },
  {
    id: 9,
    img: Ale9,
    name: "Prato Domene 15 Hit Hat Thin Aqua",
    rating: 5,
    price: "R$617,99",
  },
  {
    id: 10,
    img: Ale10,
    name: "Bateria Tiger Bmd JR50B Infantil",
    rating: 4,
    price: "R$1.100",
  },
  {
    id: 11,
    img: Ale11,
    name: "Pele Remo Ambassador 12 PL",
    rating: 4.7,
    price: "R$204,99",
  },
  {
    id: 12,
    img: Ale12,
    name: "Repique Madeira 30 X 12 PVC",
    rating: 4.4,
    price: "R$444,25",
  },
  {
    id: 13,
    img: Ale13,
    name: "Bateria Michael Legacy DML410 SSR",
    rating: 5,
    price: "R$4.500",
  },
  {
    id: 14,
    img: Ale14,
    name: "Pedal de Bateria Duplo Tama Gold",
    rating: 5,
    price: "R$799,99",
  },
  {
    id: 15,
    img: Ale15,
    name: "Canoa Torelli Para Caixa 3 Peças",
    rating: 4,
    price: "R$215,55",
  },
  {
    id: 16,
    img: Ale16,
    name: "Maquina Chimbal Accord Hit Hat",
    rating: 4.5,
    price: "R$410,10",
  },
  {
    id: 17,
    img: Ale17,
    name: "Bateria Tiger BMD JR50B Infantil Purple Original",
    rating: 4.1,
    price: "R$1.575",
  },
  {
    id: 18,
    img: Ale18,
    name: "Prato Domene 14 Hit Hat Crystal 14HHCRYS - Original",
    rating: 4.9,
    price: "R$600,00",
  },
  {
    id: 19,
    img: Ale19,
    name: "Bateria Noah Kit SC5 Poplar Funny Striped Com Pratos",
    rating: 4.6,
    price: "R$4.199",
  },
  {
    id: 20,
    img: Ale20,
    name: "Banco Bateria Mapex T 755 A Selim Confortável e Original",
    rating: 5,
    price: "R$519,95",
  },
  {
    id: 21,
    img: Ale21,
    name: "Bateria Eletrônica Yamaha DTX452K Eletronic Drum",
    rating: 5,
    price: "R$5.800",
  },
  {
    id: 22,
    img: Ale22,
    name: "Caixa Pearl Session Studio Select Ice Blue Oyster 14x8",
    rating: 4.5,
    price: "R$550,45",
  },
  {
    id: 23,
    img: Ale23,
    name: "Bateria Odery IR 200-HW WM In Rock Series Drum",
    rating: 4.8,
    price: "R$4.999",
  },
  {
    id: 24,
    img: Ale24,
    name: "Bateria Eletrônica Roland TD-1K Prta Original",
    rating: 4.3,
    price: "R$2.600",
  },
  {
    id: 25,
    img: Ale25,
    name: "Bateron Percussion",
    rating: 4.4,
    price: "R$1.800",
  },
  {
    id: 26,
    img: Ale26,
    name: "Pedal Bateria Mapex",
    rating: 4.9,
    price: "R$819,99",
  },
  {
    id: 27,
    img: Ale27,
    name: "Bateria Kat KT2",
    rating: 4.9,
    price: "R$2.120",
  },
  {
    id: 28,
    img: Ale28,
    name: "Kit 2 Pernas Para Bumbo",
    rating: 4.1,
    price: "R$209,99",
  },
  {
    id: 29,
    img: Ale29,
    name: "Tom Holder Cromado P/ Bateria",
    rating: 4,
    price: "R$145,00",
  },
  {
    id: 30,
    img: Ale30,
    name: "Parafuso De Afinação 7/32 58mm ",
    rating: 4.3,
    price: "R$122,00",
  },
  {
    id: 31,
    img: Ale31,
    name: "Máquina e Chimbal Bateria",
    rating: 4.7,
    price: "R$1.470",
  },
  {
    id: 32,
    img: Ale32,
    name: "Bateria Fabuloso - Barbie",
    rating: 5,
    price: "R$805,00",
  },
  {
    id: 33,
    img: Ale33,
    name: "Batman Bateria Infantil Cavaleiro",
    rating: 4.9,
    price: "R$804,99",
  },
  {
    id: 34,
    img: Ale34,
    name: "Adesivo Baquetas Mão Bateria",
    rating: 5,
    price: "R$59,90",
  },
  {
    id: 35,
    img: Ale35,
    name: "Papel de Parede Autocolantes",
    rating: 5,
    price: "R$399,99",
  },
  {
    id: 36,
    img: Ale36,
    name: "Bateria Play By Turbo Especial",
    rating: 5,
    price: "R$3.880",
  },

  {
    id: 37,
    img: Ale37,
    name: "Instrumento Musical Bateria Acústica em Miniatura",
    rating: 4.3,
    price: "R$150,95",
  },
  {
    id: 38,
    img: Ale38,
    name: "Baqueta Los Cabos Black Widow 5B Red Hickory Made in Canada",
    rating: 4.9,
    price: "R$39,90",
  },
  {
    id: 39,
    img: Ale39,
    name: "Tambor Com Baquetas marca Red Hickory XPRO Original",
    rating: 4.6,
    price: "R$3.607",
  },
  {
    id: 40,
    img: Ale40,
    name: "AMW SPAD4 Pad Bateria Eletrônica c/ pedal e baqueta",
    rating: 5,
    price: "R$2.599",
  },
  {
    id: 41,
    img: Ale41,
    name: "Bateria 20” 14” 14” 12” 10” RMV ",
    rating: 4.6,
    price: "R$1.999",
  },
  {
    id: 42,
    img: Ale42,
    name: 'Pele Michael 18" Bumbo Resposta',
    rating: 4.9,
    price: "R$190,95",
  },
  {
    id: 43,
    img: Ale43,
    name: "Pad De Bumbo V-Drums Acoustic",
    rating: 4.9,
    price: "R$1.688",
  },
  {
    id: 44,
    img: Ale44,
    name: "Surdo Michael Legacy 16x16",
    rating: 4.7,
    price: "R$600,00",
  },
  {
    id: 45,
    img: Ale45,
    name: "Kit Tom De Bateria 10 Xpro Stage Com Clamp E Holder",
    rating: 4.1,
    price: "R$695,90",
  },
  {
    id: 46,
    img: Ale46,
    name: "Prato Bateria Stagg ShCh16r Gold para batera Originais",
    rating: 4.6,
    price: "R$460,75",
  },
  {
    id: 47,
    img: Ale47,
    name: "Prato Pad para Bateria Eletrônica CY-5 - Originais",
    rating: 5,
    price: "R$444,99",
  },
  {
    id: 48,
    img: Ale48,
    name: "Feltro Com Base Para Prato De Bateria Torelli Ta013 ",
    rating: 3.8,
    price: "R$19,99",
  },
  {
    id: 49,
    img: Ale49,
    name: "Instrumento Mini Bateria de Brinquedo Infantil 17 Peças",
    rating: 4,
    price: "R$700,00",
  },
  {
    id: 50,
    img: Ale50,
    name: "Kit De Pratos Bateria e Baquetas Profire Alloy 14'' 16'' 20'' ",
    rating: 5,
    price: "R$1.199",
  },
  {
    id: 51,
    img: Ale51,
    name: "Kit Completo Bag Bateria 5 peças Black - sem tom ",
    rating: 4.4,
    price: "R$1.999",
  },
  {
    id: 52,
    img: Ale52,
    name: "Bateria Eletrônica Nux Peças Em Mesh Dm8 Top de LInha",
    rating: 5,
    price: "R$15.999",
  },
  {
    id: 53,
    img: Ale53,
    name: "Bateria Acústica 18 Pearl Export EXX785P/C735 Satin White 5 Peças",
    rating: 5,
    price: "R$3.000",
  },
  {
    id: 54,
    img: Ale54,
    name: "Kit Microfone Bateria Dylan Dd7 C/ 7 Peças 4 Clamp C/ Case ",
    rating: 4.9,
    price: "R$1.500",
  },
  {
    id: 55,
    img: Ale55,
    name: "Bateria Praticavel De Estudo 9 Peças Ka - Com Brinde",
    rating: 5,
    price: "R$560,00",
  },
  {
    id: 56,
    img: Ale56,
    name: "Rototom 6-8-10 Pol C/ Peles Encore Transparente de Luxo",
    rating: 4.6,
    price: "R$2.225",
  },
  {
    id: 57,
    img: Ale57,
    name: "Percussão - Musicais",
    rating: 4.8,
    price: "R$32,20",
  },
  {
    id: 58,
    img: Ale58,
    name: "Racks e acessórios de Baterias",
    rating: 4.4,
    price: "R$796,90",
  },
  {
    id: 59,
    img: Ale59,
    name: "Caixa 10'' De Bateria / Spanking",
    rating: 4.9,
    price: "R$498,99",
  },
  {
    id: 60,
    img: Ale60,
    name: "Drum Kart sistema compactada",
    rating: 5,
    price: "R$2.999",
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
