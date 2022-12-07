import { useRef } from "react";
import Container from "./style";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const [buttonUp, setButtonUp] = useState(true);

  const navigate = useNavigate();
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = {
      email,
      password,
    };

    if (!(await login(form))) {
      navigate("/clientes");
    }
  };

  return (
    <Container>
      <div className="center">
        <div className="boxForm">
          <h2 className="title">Bem-vindo!</h2>
          <p className="subTitle">Por favor, faça o login para continuar.</p>

          <form
            onSubmit={handleSubmit}
            className="loginForm"
            onChange={() =>
              setButtonUp(
                email.current.value.length <= 0 ||
                  password.current.value.length <= 0
              )
            }
          >
            <label htmlFor="email">
              <p className="inputTitle">Email:</p>
              <input
                className="loginFirstInput"
                type="email"
                ref={email}
                id="email"
                placeholder="Example@email.com"
                required
              />
            </label>

            <label htmlFor="password">
              <p className="inputTitle">Senha:</p>
              <input
                type="password"
                ref={password}
                id="password"
                placeholder="Senha"
                required
              />

              <div className="forget">
                <a href="" className="">
                  Esqueceu a senha?
                </a>
              </div>
            </label>

            <button disabled={buttonUp}>Login</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
