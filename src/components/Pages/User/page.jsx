import "./style.css";
import { useState } from "react";

const AuthForm = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordType(
      confirmPasswordType === "password" ? "text" : "password"
    );
  };

  return (
    <section className="sellingRouter " data-aos="fade-up">
      <div className="users">
        <div className="center-text">
          <h2>Entre ou Cadastre-se</h2>
        </div>
        <div className={`containerUser ${isSignup ? "active" : ""}`}>
          <div className="forms">
            {/* Login Form */}
            {!isSignup && (
              <div className="form login">
                <span className="title">Conecte-se</span>
                <form action="#">
                  <div className="input-field">
                    <input
                      type="text"
                      placeholder="Digite seu e-mail"
                      required
                    />
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
                  <div className="checkbox-text">
                    <div className="checkbox-content">
                      <input type="checkbox" id="logCheck" />
                      <label htmlFor="logCheck" className="text">
                        Lembre de mim
                      </label>
                    </div>
                    <a className="text">Esqueceu sua senha?</a>
                  </div>
                  <div className="input-field button">
                    <input type="button" value="Login" />
                  </div>
                </form>
                <div className="login-signup">
                  <span className="text">
                    Não é um membro?
                    <a
                      className="text signup-link"
                      onClick={() => setIsSignup(true)}
                    >
                      Inscreva-se agora
                    </a>
                  </span>
                </div>
              </div>
            )}

            {/* Signup Form */}
            {isSignup && (
              <div className="form signup">
                <span className="title">Registro</span>
                <form action="#">
                  <div className="input-field">
                    <input type="text" placeholder="Digite seu nome" required />
                    <i className="ri-shield-user-line"></i>
                  </div>
                  <div className="input-field">
                    <input
                      type="text"
                      placeholder="Digite seu e-mail"
                      required
                    />
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="input-field">
                    <input
                      type={passwordType}
                      className="password"
                      placeholder="Criar uma senha"
                      required
                    />
                    <i className="ri-chat-private-line"></i>
                  </div>
                  <div className="input-field">
                    <input
                      type={confirmPasswordType}
                      className="password"
                      placeholder="Confirme uma senha"
                      required
                    />
                    <i className="ri-chat-private-line"></i>
                    <i
                      className="uil uil-eye-slash showHidePw"
                      onClick={toggleConfirmPassword}
                    ></i>
                  </div>
                  <div className="checkbox-text">
                    <div className="checkbox-content">
                      <input type="checkbox" id="termCon" />
                      <label htmlFor="termCon" className="text">
                        Aceitei todos os termos e condições
                      </label>
                    </div>
                  </div>
                  <div className="input-field button">
                    <input type="button" value="Signup" />
                  </div>
                </form>
                <div className="login-signup">
                  <span className="text">
                    Já é um membro?
                    <a
                      className="text login-link"
                      onClick={() => setIsSignup(false)}
                    >
                      Entre agora
                    </a>
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
