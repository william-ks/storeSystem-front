import ChangeTheme from "../../components/ChangeTheme";
import Container from "./style";

export default function Login() {
  return (
    <Container>
      <form onSubmit={null} className="loginForm">
        <h2>Seja bem-vindo!</h2>
        <p>Email:</p>
        <input type="email" placeholder="Example@email.com" required className="loginFirstInput"/>
        <p>Senha:</p>
        <input type="password" placeholder="Senha" required/>
        <a href="">Esqueceu a senha?Clique aqui!</a>
        <button>Login</button>
      </form>
    </Container>
  );
}
