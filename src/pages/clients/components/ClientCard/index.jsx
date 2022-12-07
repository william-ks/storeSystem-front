import { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { FiMoreVertical } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import ConfirmModal from "../../../../components/ConfirmModal";
import Detail from "../DetailModal";
import Container from "./style";

export default function ClientCard() {
  const [showDelete, setShowDelete] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    if (showDelete || showDetail) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showDelete, showDetail]);

  return (
    <>
      {showDelete && <ConfirmModal close={setShowDelete} />}
      {showDetail && <Detail close={setShowDetail} />}

      <Container>
        <h4 className={`name`}>William</h4>

        <div className="buttons">
          <button
            className="button more"
            onClick={() => setShowOptions(!showOptions)}
          >
            <FiMoreVertical />
          </button>

          {showOptions && (
            <div className="options" onClick={() => setShowOptions(false)}>
              <button className="button" onClick={() => setShowDetail(true)}>
                <TbListDetails /> <span>Detalhes</span>
              </button>

              <button className="button">
                <AiOutlineEdit /> <span>Editar</span>
              </button>

              <button className="button" onClick={() => setShowDelete(true)}>
                <AiOutlineDelete /> <span>Excluir</span>
              </button>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}


