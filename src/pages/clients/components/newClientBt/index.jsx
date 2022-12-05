import Container from "./style.js";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function NewClientBt({onClick}) {
  return (
    <Container onClick={onClick}>
      <div className="icon">
        <AiOutlineUserAdd />
      </div>
      <h3 className="title">Novo cliente</h3>
    </Container>
  );
}
