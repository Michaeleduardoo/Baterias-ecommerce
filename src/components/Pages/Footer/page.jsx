import "./style.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-box">
          <h3>Company</h3>
          <Link to="/">Home</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/maisvendidos">Mais Vendidos</Link>
          <Link to="/contact">Contato</Link>
        </div>

        <div className="footer-box">
          <h3>Privacidade</h3>
          <Link to="/termos">Coleta de Dados</Link>
          <Link to="/termos">Privacidade Cookies</Link>
          <Link to="/termos">Direitos dos Usuários</Link>
          <Link to="/termos">Reclamações e Dúvidas</Link>
        </div>

        <div className="footer-box">
          <h3>Baterias</h3>

          <Link to="/users">Entre ou Cadastre-se</Link>

          <a href="https://web.whatsapp.com/" target="_blak">
            Suporte Pelo WhatsApp
          </a>
          <a href="https://www.linkedin.com/in/michael-eduardo/" target="_blak">
            Criado por <strong>Michael Eduardo</strong>
          </a>
          <strong>© Todos os direitos reservados.</strong>
        </div>

        <div className="footer-box">
          <h3>Social</h3>
          <div className="social">
            <a
              href="https://pt-br.facebook.com/"
              target="_blak"
              title="Facebook"
            >
              <i className="ri-facebook-fill"></i>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blak"
              title="Instagram"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://x.com/?lang=pt&mx=2" target="_blak" title="X">
              <i className="ri-close-large-fill"></i>
            </a>
            <a
              href="https://workspace.google.com/intl/pt-BR/gmail/"
              target="_blak"
              title="Gmail"
            >
              <i className="ri-mail-line"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
