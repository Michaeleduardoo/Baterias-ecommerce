import "./style.css";

function Cards() {
  return (
    <>
      <section className="feature">
        <div className="feature-content" data-aos="fade-down">
          <div className="box">
            <div className="f-icon">
               <i className="bx bx-credit-card"></i>
            </div>

            <div className="f-text">
              <h3>Cartões de crédito </h3>
              <small>Express / Elo / Visa / Mastercard</small>
            </div>
          </div>

          <div className="box">
            <div className="f-icon">
              <i className="bx bx-money"></i>
            </div>

            <div className="f-text">
              <h3>Pix</h3>
              <small>QRCODE / Chave aleatória </small>
            </div>
          </div>

          <div className="box">
            <div className="f-icon">
              <i className="bx bx-barcode"></i>
            </div>

            <div className="f-text">
              <h3>Boleto bancário</h3>
              <small>00190.00009 01234.567890 ...</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;
