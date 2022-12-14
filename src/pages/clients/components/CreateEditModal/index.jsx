import Container from "./style";
import Modal from "../../../../components/Modal";
import { useRef, useEffect } from "react";

export default function CreateEdit({ close, fill }) {
  const name = useRef(null);
  const email = useRef(null);
  const cpf = useRef(null);
  const credito = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (fill) {
      if (fill.name) {
        name.current.value = fill.name;
      }
      if (fill.email) {
        email.current.value = fill.email;
      }
      if (fill.cpf) {
        cpf.current.value = fill.cpf;
      }
      if (fill.credito) {
        credito.current.value = fill.credito;
      }
    }
  }, []);

  return (
    <Modal close={close}>
      <Container>
        <h1 className="title">{fill ? "Editar" : "Adicionar"} Cliente</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <p>Nome completo (obrigatório)</p>
            <input
              ref={name}
              type="text"
              placeholder="Nome completo"
              required
            />
          </label>
          <label htmlFor="">
            <p>E-mail (obrigatório)</p>
            <input ref={email} type="text" placeholder="E-mail" required />
          </label>
          <label htmlFor="">
            <p>Cpf (opcional)</p>
            <input ref={cpf} type="text" placeholder="000.000.000-00" />
          </label>
          <label htmlFor="">
            <p>Credito (obrigatório)</p>
            <input
              ref={credito}
              type="number"
              min="0"
              defaultValue="0"
              placeholder=""
            />
          </label>

          <button>{fill ? "Salvar" : "Adicionar"}</button>
        </form>
      </Container>
    </Modal>
  );
}
