import Container from "./style";
import Modal from "../../../../components/Modal";

export default function Detail({ close }) {
  return (
    <Modal close={close}>
      <Container>
        <div className="group">
          <h3 className="title">Nome:</h3>
          <p>William Krisley Cardoso Soares</p>
        </div>

        <div className="group">
          <h3 className="title">E-mail:</h3>
          <p>will.ks2101@gmail.com</p>
        </div>

        <div className="group">
          <h3 className="title">CPF:</h3>
          <p>000.000.000-00</p>
        </div>

        <div className="group">
          <h3 className="title">Crédito Total:</h3>
          <p>R$ 50,00</p>
        </div>

        <div className="group">
          <h3 className="title">Saldo atual:</h3>
          <p>R$ 15,00</p>
        </div>
      </Container>
    </Modal>
  );
}
