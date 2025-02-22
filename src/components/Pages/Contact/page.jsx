import "./style.css";
import { useState } from "react";

const Contact = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  return (
    <section className="sellingRouter" data-aos="fade-up">
      <div className="users">
        <div className="center-text">
          <h2>Contatos</h2>
        </div>
        <div className="containerUser">
          <div className="forms">
            <div className="form login">
              <span className="title">Entre em Contato conosco</span>
              <form action="#">
                <div className="input-field">
                  <input type="text" placeholder="Digite seu e-mail" required />
                  <i className="ri-mail-line"></i>
                </div>
                <div className="input-field">
                  <input
                    type={passwordType}
                    className="password"
                    placeholder="Digite sua senha"
                    required
                  />
                  <i className="ri-chat-private-line"></i>
                  <i
                    className="uil uil-eye-slash showHidePw"
                    onClick={togglePassword}
                  ></i>
                </div>

                <div className="input-field">
                  <textarea
                    placeholder="Digite uma mensagem"
                    rows="2"
                    required
                  />
                  <i className="ri-message-2-line"></i>
                </div>

                <div className="input-field button">
                  <input type="button" value="Login" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
