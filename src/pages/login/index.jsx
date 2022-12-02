import ChangeTheme from "../../components/ChangeTheme";
import Container from "./style";

export default function Login() {
  return (
    <Container>
      <div className="center">
        <ChangeTheme />
        <h1>Text</h1>
        <a href="/">Link Pro</a>
        <p>Texto aleatorio</p>
        <button>Botão</button>
        <input type="email" />
        <select name="" id="">
          <option value="">Teste</option>
          <option value="">Teste</option>
          <option value="">Teste</option>
        </select>
        <textarea name="" id="" cols="30" rows="10"></textarea>

        <form action="">
          <div className="teste">list</div>
        </form>
      </div>
    </Container>
  );
}
