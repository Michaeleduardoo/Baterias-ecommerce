import "./style.css";
import Page1 from "./listProd/Baterias/page";
import Page2 from "./listProd/Pratos/page";
import Page3 from "./listProd/Baquetas/page";
import Page4 from "./listProd/Kits/page";
import Page5 from "./listProd/Aleatorios/page";

function Produtos() {
  return (
    <section className="sellingRouter">
      <div className="center-text" data-aos="fade-down">
        <h2>Todos os Produtos</h2>
      </div>

      <div data-aos="zoom-in" className="tabs">
        <input type="radio" id="tab1" name="tab-control" defaultChecked />
        <input type="radio" id="tab2" name="tab-control" />
        <input type="radio" id="tab3" name="tab-control" />
        <input type="radio" id="tab4" name="tab-control" />
        <input type="radio" id="tab5" name="tab-control" />

        <ul>
          <li title="Baterias">
            <label htmlFor="tab1" role="button">
              <i className="bx bx-coin"></i>
              <br />
              <span>Baterias </span>
            </label>
          </li>
          <li title="Pratos">
            <label htmlFor="tab2" role="button">
              <i className="bx bx-disc"></i>
              <br />
              <span>Pratos</span>
            </label>
          </li>
          <li title="Baquetas">
            <label htmlFor="tab3" role="button">
              <i className="bx bx-list-minus"></i>
              <br />
              <span>Baquetas</span>
            </label>
          </li>
          <li title="Kits">
            <label htmlFor="tab4" role="button">
              <i className="bx bx-abacus"></i>
              <br />
              <span>Kits</span>
            </label>
          </li>
          <li title="Aleatórios">
            <label htmlFor="tab5" role="button">
              <i className="bx bx-category-alt"></i>
              <br />
              <span>Aleatórios</span>
            </label>
          </li>
        </ul>

        <div className="slider">
          <div className="indicator"></div>
        </div>

        <div className="content">
          <section>
            <p>
              <Page1 />
            </p>
          </section>
          <section>
            <p>
              <Page2 />
            </p>
          </section>
          <section>
            <p>
              <Page3 />
            </p>
          </section>
          <section>
            <p>
              <Page4 />
            </p>
          </section>
          <section>
            <Page5 />
          </section>
        </div>
      </div>
    </section>
  );
}

export default Produtos;
