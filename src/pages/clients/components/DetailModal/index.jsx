import Container from "./style";
import Modal from "../../../../components/Modal";
import ConfirmModal from "../../../../components/ConfirmModal";
import CreateEdit from "../CreateEditModal";
import { useState } from "react";

export default function Detail({ close }) {
  const [viewModal, setViewModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <Modal close={close}>
        {viewModal && <ConfirmModal close={setViewModal} />}
        {editModal && (
          <CreateEdit
            close={setEditModal}
            fill={{ name: "william krisley", email: "will.ks2101@gmail.com" }}
          />
        )}
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

          <div className="flexGroup">
            <button className="button" onClick={() => setEditModal(true)}>
              Editar
            </button>
            <button
              className="button delete"
              onClick={() => setViewModal(true)}
            >
              Excluir
            </button>
          </div>
        </Container>
      </Modal>
    </>
  );
}
