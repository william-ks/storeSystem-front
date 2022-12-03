import ChangeTheme from "../../components/ChangeTheme";
import Container from "./style";

export default function Login() {
  return (
    <Container>
      <form onSubmit={null} className="loginForm">
        <h2>Seja bem-vindo!</h2>
        <p>Insira seu Email:</p>
        <input type="email" placeholder="Example@email.com" />
        <p>Insira a sua senha:</p>
        <input type="password" placeholder="Senha" />
        <a href="">Esqueceu a senha ?</a>
        <button>Login</button>
      </form>
    </Container>
  );
}
