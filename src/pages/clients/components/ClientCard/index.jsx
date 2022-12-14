import { useEffect, useState } from "react";
import { CgOptions } from "react-icons/cg";
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

      <Container onClick={() => setShowDetail(true)}>
        <h4 className="name">William krisley</h4>

        <div className="buttons">
          <button
            className="button more"
            onClick={() => setShowOptions(!showOptions)}
          ></button>
        </div>

        <CgOptions className="icons" />
      </Container>
    </>
  );
}


