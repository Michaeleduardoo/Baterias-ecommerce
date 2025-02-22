import Bateria from "./Image/home.png";
import "./style.css";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-text" data-aos="fade-up">
          <h6>Promoção da Bateria </h6>
          <h1> Roland VAD706</h1>
          <p>R$ 4.349 / em 10x R$ 434 , 90 sem juros</p>
          <a className="btn">
            Comprar Agora
            <i className="ri-arrow-right-line"></i>
          </a>
        </div>

        <img
          width={500}
          className="imgBatera"
          src={Bateria}
          alt="Bateria Roland  "
        />
      </section>
    </>
  );
}

export default Home;
