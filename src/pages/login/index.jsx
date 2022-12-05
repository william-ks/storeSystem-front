import { useState } from "react";
import Container from "./style";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validations() {
    return email.length > 0 && password.length > 0
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit} className="loginForm">
        <h2>Seja bem-vindo!</h2>
        <p>Email:</p>
        <input 
          type="email"
          value={email}
          placeholder="Example@email.com"
          onChange={e => setEmail(e.target.value)} 
          required 
          className="loginFirstInput"
        />
        <p>Senha:</p>
        <input 
          type="password" 
          value={password}
          placeholder="Senha" 
          onChange={e => setPassword(e.target.value)}
          required
        />
        <a href="">Esqueceu a senha?Clique aqui!</a>
        <button disabled={!validations()}>Login</button>
      </form>
    </Container>
  );
}
