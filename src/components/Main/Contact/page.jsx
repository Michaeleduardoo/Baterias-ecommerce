import "./style.css";

function Contact() {
  return (
    <>
      <section className="newsletter">
        <div className="newsletter-content" data-aos="zoom-in">
          <div className="newsletter-text">
            <h2>Entre Em Contato</h2>
            <p>Enviaremos uma mensagem através do seu e-mail.</p>
          </div>

          <form action="">
            <input type="email" placeholder="E-mail..." required />
            <input type="submit" value="Enviar" className="btnnn" />
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
