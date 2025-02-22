import Pearl from "./Image/aPearl.png";
import Rmv from "./Image/bRmv.png";
import Tama from "./Image/cTama.png";
import Remo from "./Image/dRemo.png";
import Dw from "./Image/eDwdrums.png";
import Mapex from "./Image/fMapex.png";

import "./style.css";

function Faixa() {
  return (
    <div className="brands">
      <div className="main-brands" data-aos="zoom-in">
        <div className="brands-c">
          <img src={Pearl} alt="Marca de Batera" />
        </div>

        <div className="brands-c">
          <img src={Rmv} alt="Marca de Batera" />
        </div>

        <div className="brands-c">
          <img src={Tama} alt="Marca de Batera" />
        </div>

        <div className="brands-c">
          <img src={Remo} alt="Marca de Batera" />
        </div>

        <div className="brands-c">
          <img src={Dw} alt="Marca de Batera" />
        </div>

        <div className="brands-c">
          <img src={Mapex} alt="Marca de Batera" />
        </div>
      </div>
    </div>
  );
}

export default Faixa;
