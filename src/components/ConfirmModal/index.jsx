import Container from "./style";
import Modal from "../Modal";

export default function ConfirmModal({ close, action }) {
  return (
    <Modal close={close}>
      <Container>
        <h1 className="title">Você tem certeza ?</h1>
        <div className="options">
          <button className="sim">Sim</button>
          <button className="nao" onClick={() => close(false)}>
            Não
          </button>
        </div>
      </Container>
    </Modal>
  );
}
