import Item1 from "./Itens/Item1/page";
import Item2 from "./Itens/Item2/page";
import Item3 from "./Itens/Item3/page";
import "./style.css";

function BestSelling() {
  return (
    <>
      <section className="sellingRouter">
        <div className="center-text" data-aos="fade-up">
          <h2>Mais Vendidos</h2>
        </div>

        <div data-aos="zoom-in-up">
          <div className="selling-content">
            <Item1 />
          </div>

          <div className="selling-content">
            <Item2 />
          </div>

          <div className="selling-content">
            <Item3 />
          </div>
        </div>
      </section>
    </>
  );
}

export default BestSelling;
