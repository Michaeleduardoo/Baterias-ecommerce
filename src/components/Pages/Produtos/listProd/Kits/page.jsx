import { useState } from "react";
import Kit1 from "./Image/1Kit.png";
import Kit2 from "./Image/2Kit.png";
import Kit3 from "./Image/3Kit.png";
import Kit4 from "./Image/4Kit.png";
import Kit5 from "./Image/5Kit.png";
import Kit6 from "./Image/6Kit.png";
import Kit7 from "./Image/7Kit.png";
import Kit8 from "./Image/8Kit.png";
import Kit9 from "./Image/9Kit.png";
import Kit10 from "./Image/10Kit.png";
import Kit11 from "./Image/11Kit.png";
import Kit12 from "./Image/12Kit.png";
import Kit13 from "./Image/13Kit.png";
import Kit14 from "./Image/14Kit.png";
import Kit15 from "./Image/15Kit.png";
import Kit16 from "./Image/16Kit.png";
import Kit17 from "./Image/17Kit.png";
import Kit18 from "./Image/18Kit.png";
import Kit19 from "./Image/19Kit.png";
import Kit20 from "./Image/20Kit.png";
import Kit21 from "./Image/21Kit.png";
import Kit22 from "./Image/22Kit.png";
import Kit23 from "./Image/23Kit.png";
import Kit24 from "./Image/24Kit.png";
import Kit25 from "./Image/25Kit.png";
import Kit26 from "./Image/26Kit.png";
import Kit27 from "./Image/27Kit.png";
import Kit28 from "./Image/28Kit.png";
import Kit29 from "./Image/29Kit.png";
import Kit30 from "./Image/30Kit.png";
import Kit31 from "./Image/31Kit.png";
import Kit32 from "./Image/32Kit.png";
import Kit33 from "./Image/33Kit.png";
import Kit34 from "./Image/34Kit.png";
import Kit35 from "./Image/35Kit.png";
import Kit36 from "./Image/36Kit.png";
import Kit37 from "./Image/37Kit.png";
import Kit38 from "./Image/38Kit.png";
import Kit39 from "./Image/39Kit.png";
import Kit40 from "./Image/40Kit.png";
import Kit41 from "./Image/41Kit.png";
import Kit42 from "./Image/42Kit.png";
import Kit43 from "./Image/43Kit.png";
import Kit44 from "./Image/44Kit.png";
import Kit45 from "./Image/45Kit.png";
import Kit46 from "./Image/46Kit.png";
import Kit47 from "./Image/47Kit.png";
import Kit48 from "./Image/48Kit.png";
import Kit49 from "./Image/49Kit.png";
import Kit50 from "./Image/50Kit.png";
import Kit51 from "./Image/51Kit.png";
import Kit52 from "./Image/52Kit.png";
import Kit53 from "./Image/53Kit.png";
import Kit54 from "./Image/54Kit.png";
import Kit55 from "./Image/55Kit.png";
import Kit56 from "./Image/56Kit.png";
import Kit57 from "./Image/57Kit.png";
import Kit58 from "./Image/58Kit.png";
import Kit59 from "./Image/59Kit.png";
import Kit60 from "./Image/60Kit.png";
import Paginate from "../Paginate/page";
import "../../style.css";

const products = [
  {
    id: 1,
    img: Kit1,
    name: "Conjuntos de Bateria Elétrica",
    rating: 5,
    price: "R$14.949",
  },
  {
    id: 2,
    img: Kit2,
    name: "Conjuntos Donner Bateria",
    rating: 5,
    price: "R$2.805",
  },
  {
    id: 3,
    img: Kit3,
    name: "Kit Bateria Acústica e Capa",
    rating: 4.3,
    price: "R$6.937",
  },
  {
    id: 4,
    img: Kit4,
    name: "Bateria Voik 22 Pratos + Banco",
    rating: 4.9,
    price: "R$7.399",
  },
  {
    id: 5,
    img: Kit5,
    name: "Kit Baqueta 5b Vários Modelos",
    rating: 5,
    price: "R$233,85",
  },
  {
    id: 6,
    img: Kit6,
    name: "Kit com Set Baquetas",
    rating: 4.8,
    price: "R$310,00",
  },
  {
    id: 7,
    img: Kit7,
    name: "Kit Baqueta 5 Par 7a Special beat",
    rating: 4.4,
    price: "R$199,99",
  },
  {
    id: 8,
    img: Kit8,
    name: "Mochila Dgroove Baqueteira",
    rating: 4.8,
    price: "R$309,22",
  },
  {
    id: 9,
    img: Kit9,
    name: "Kit Peles Bateria Black",
    rating: 4.5,
    price: "R$500,00",
  },
  {
    id: 10,
    img: Kit10,
    name: "Kit Pele De Bateria Encore",
    rating: 5,
    price: "R$11.993",
  },
  {
    id: 11,
    img: Kit11,
    name: "Kit Pele Hidráulica Spanking",
    rating: 5,
    price: "R$379,99",
  },
  {
    id: 12,
    img: Kit12,
    name: "Kit Pele Hidraulica Hydraglide",
    rating: 4.8,
    price: "R$369,67",
  },
  {
    id: 13,
    img: Kit13,
    name: "Kit Bateria Acústica Cajón, Caixa, Pedal e Baquetas",
    rating: 4.9,
    price: "R$1500,56",
  },
  {
    id: 14,
    img: Kit14,
    name: "Kit Bateria - BUBA Infantil Indicado mais de 12 meses",
    rating: 4.2,
    price: "R$199,00",
  },
  {
    id: 15,
    img: Kit15,
    name: "Kit Cajon Bateria Drum box + Pratos Orion",
    rating: 3.9,
    price: "R$699,49",
  },
  {
    id: 16,
    img: Kit16,
    name: "Kit Bateria Musical Infantil Com Violao - Original",
    rating: 4.1,
    price: "R$719,19",
  },
  {
    id: 17,
    img: Kit17,
    name: "DW Collector’s Series Exotic Drum",
    rating: 5,
    price: "R$7.121",
  },
  {
    id: 18,
    img: Kit18,
    name: "Kit Tamborim Pele Leitosa Torelli TT",
    rating: 4.1,
    price: "R$300,77",
  },
  {
    id: 19,
    img: Kit19,
    name: "Kit Baqueta Tamborim Nylon Tripla",
    rating: 4.3,
    price: "R$614,99",
  },
  {
    id: 20,
    img: Kit20,
    name: "Craviotto Kit Stave Maple Shell",
    rating: 5,
    price: "R$8.599",
  },
  {
    id: 21,
    img: Kit21,
    name: "Kit De Microfones Para Bateria Az Áudio Zm57-kit Com Maleta",
    rating: 4.8,
    price: "R$568,90",
  },
  {
    id: 22,
    img: Kit22,
    name: "Kit Pele Hidráulica Bateria Williams Azul 12 13 16 22 14cx",
    rating: 4.9,
    price: "R$690,44",
  },
  {
    id: 23,
    img: Kit23,
    name: "Kit Bateria toda Completa  marca Michael Hidráulica",
    rating: 4.2,
    price: "R$6.998",
  },
  {
    id: 24,
    img: Kit24,
    name: "Kit Caixa Bateria Phx Music 14x8 Madeira Cromado Pele Cristal",
    rating: 4.1,
    price: "R$798,99",
  },
  {
    id: 25,
    img: Kit25,
    name: "Kit de Bateria de 23 Peças ",
    rating: 4.3,
    price: "R$260,00",
  },
  {
    id: 26,
    img: Kit26,
    name: "10 Peças Silenciador de Tambor",
    rating: 4.4,
    price: "R$481,94",
  },
  {
    id: 27,
    img: Kit27,
    name: "Kit Bateria 5 peças Semi Case",
    rating: 4.8,
    price: "R$1.760",
  },
  {
    id: 28,
    img: Kit28,
    name: "Kit De Conversão De Surdo",
    rating: 4.2,
    price: "R$300,89",
  },
  {
    id: 29,
    img: Kit29,
    name: "Kit 8 Garras Bumbo Cromado - completo da Spanking",
    rating: 5,
    price: "R$414,99",
  },
  {
    id: 30,
    img: Kit30,
    name: "Suporte para porta baquetas, 8 baquetas, máquina de chimbal",
    rating: 4.9,
    price: "R$2.222",
  },
  {
    id: 31,
    img: Kit31,
    name: "Kit com 2 Pedal Duplo Pearl Eliminator Redline P-2052c",
    rating: 4.7,
    price: "R$1.176",
  },
  {
    id: 32,
    img: Kit32,
    name: "Kit Pad Estudo de Percussão 20cm, 2 Baquetas Vanguarda, Chaveiro",
    rating: 4.5,
    price: "R$271,21",
  },
  {
    id: 33,
    img: Kit33,
    name: "Kit Bateria Eletrônica Completo 5 Pads 108 Timbres Facil Montar",
    rating: 4.9,
    price: "R$3.274",
  },
  {
    id: 34,
    img: Kit34,
    name: "Kit Bateria Eletronica Portatil Revas PB350 Roland",
    rating: 4.1,
    price: "R$1.100",
  },
  {
    id: 35,
    img: Kit35,
    name: "Kit Tajon Bateria Acústica FSA TAJ51 Profissional",
    rating: 4.6,
    price: "R$2.299",
  },
  {
    id: 36,
    img: Kit36,
    name: "Kit de Bateria Preta Portátil com Saco - Pearl Compact Traveler 2",
    rating: 5,
    price: "R$888,10",
  },

  {
    id: 37,
    img: Kit37,
    name: "Kit De Pratos Krest Linha Orbit",
    rating: 4.8,
    price: "R$2.421",
  },
  {
    id: 38,
    img: Kit38,
    name: "Kit 12 Canoa P/ Bateria, 12 Parafuso",
    rating: 4.7,
    price: "R$322,10",
  },
  {
    id: 39,
    img: Kit39,
    name: "Kit Bateria Eletrônica Seven 8pçs",
    rating: 4.2,
    price: "R$3.607",
  },
  {
    id: 40,
    img: Kit40,
    name: "Conjunto De Bateria Eletrônica",
    rating: 3.8,
    price: "R$524,99",
  },
  {
    id: 41,
    img: Kit41,
    name: "Kit Zildjian Bag de Pratos e Bag de Baquetas Student Purple Galaxy",
    rating: 4.3,
    price: "R$2.227",
  },
  {
    id: 42,
    img: Kit42,
    name: "Kit 2 Pares de Baquetas Nova e Chave de Afinação Dolphin",
    rating: 4.1,
    price: "R$487,22",
  },
  {
    id: 43,
    img: Kit43,
    name: "Kit 10 Talabartes + 14 Maçanetas + 16 Baquetas Liverpool",
    rating: 3.9,
    price: "R$1.399",
  },
  {
    id: 44,
    img: Kit44,
    name: "Kit de Pratos Paiste PST7 Medium Universal Series com 14, 16 e  20",
    rating: 4.2,
    price: "R$3.790",
  },
  {
    id: 45,
    img: Kit45,
    name: "Kit Reparo Para Pedal De Bateria Com Gancho, Mola E Porca",
    rating: 4.1,
    price: "R$199,99",
  },
  {
    id: 46,
    img: Kit46,
    name: "Kit de Pedal de Bateria e Banco Redondo DW DWCP5000PK1",
    rating: 3,
    price: "R$890,65",
  },
  {
    id: 47,
    img: Kit47,
    name: "kit de bateria para The Future Past Tour - Preta e Laranja",
    rating: 5,
    price: "R$9.444",
  },
  {
    id: 48,
    img: Kit48,
    name: "Kit ferragens mapex hp6005 com 05 peças chrome p/ bateria",
    rating: 4.1,
    price: "R$999,99",
  },
  {
    id: 49,
    img: Kit49,
    name: "Microfones de Bumbo Liquidação",
    rating: 4.6,
    price: "R$2.999",
  },
  {
    id: 50,
    img: Kit50,
    name: "Roland TD-27KV2 | Kit Bateria",
    rating: 5,
    price: "R$12.999",
  },
  {
    id: 51,
    img: Kit51,
    name: "Kit Bateria Eletrônica Portátil",
    rating: 4.8,
    price: "R$1.999",
  },
  {
    id: 52,
    img: Kit52,
    name: "Kit Peles 10-12-13-20-14 Dhh Azul",
    rating: 4.5,
    price: "R$1.333",
  },
  {
    id: 53,
    img: Kit53,
    name: "Kit infantil Musical, 6 Instrumentos Tambor Violão pandeiro Flauta",
    rating: 5,
    price: "R$661,99",
  },
  {
    id: 54,
    img: Kit54,
    name: "Pacote com 8 caixas completas Drum Mute Pads Evans Soundoff",
    rating: 4.8,
    price: "R$1.398",
  },
  {
    id: 55,
    img: Kit55,
    name: "Kit Tom De Bateria 8 X-pro Stage Vermelho + Clamp + Holder",
    rating: 5,
    price: "R$429,99",
  },
  {
    id: 56,
    img: Kit56,
    name: "Kit Caixa Bateria Phx 14x8 Madeira Pele Cristal + Capa Luxo",
    rating: 4.5,
    price: "R$501,55",
  },
  {
    id: 57,
    img: Kit57,
    name: "Kit Bag Bateria 100% Batera 22/10/12/16/CX14X5,5",
    rating: 5,
    price: "R$1.320",
  },
  {
    id: 58,
    img: Kit58,
    name: "Kit Bateria Acústica Preta Bumbo 20 Pro Fire By Spanking",
    rating: 4.9,
    price: "R$2.996",
  },
  {
    id: 59,
    img: Kit59,
    name: "Kit 7 Microfones Para Bateria K7 Slim - Kadosh",
    rating: 4.7,
    price: "R$7.198",
  },
  {
    id: 60,
    img: Kit60,
    name: "Kit Bateria Pratos Waldman Kozan Koz-141620/b Com Bag",
    rating: 5,
    price: "R$2.799",
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
