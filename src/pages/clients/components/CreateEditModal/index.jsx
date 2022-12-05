import Container from "./style";
import Modal from "../../../../components/Modal";

export default function CreateEdit({ close }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal close={close}>
      <Container>
        <h1 className="title">Adicionar Cliente</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <p>Nome completo (obrigatório)</p>
            <input type="text" placeholder="Nome completo" required />
          </label>
          <label htmlFor="">
            <p>E-mail (obrigatório)</p>
            <input type="text" placeholder="E-mail" required />
          </label>
          <label htmlFor="">
            <p>Cpf (opcional)</p>
            <input type="text" placeholder="000.000.000-00" />
          </label>
          <label htmlFor="">
            <p>Credito (obrigatório)</p>
            <input type="number" min="0" defaultValue="0" placeholder="" />
          </label>

          <button>Adicionar</button>
        </form>
      </Container>
    </Modal>
  );
}
