import Container from "./style";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ children, close }) {
  return (
    <Container>
      <div className="modalBox">
        <div className="closeIcon" onClick={() => close(false)}>
          <AiOutlineClose />
        </div>
        {children}
      </div>
    </Container>
  );
}
