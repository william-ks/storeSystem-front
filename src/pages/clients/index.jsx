import { useState, useEffect } from "react";
import Container from "./style";
import ClientCard from "./components/ClientCard";
import CreateClients from "./components/CreateEditModal";
import NewClientBt from "./components/newClientBt";
import Header from "../../components/Header";

export default function Clients() {
  const [showCreate, setShowCreate] = useState(false);

  useEffect(() => {
    if (showCreate) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCreate]);

  return (
    <>
      {showCreate && <CreateClients close={setShowCreate} />}
      <Container>
        <Header>Clientes</Header>
        <div className="center">
          <div className="header">
            <input type="text" placeholder="Pesquisar" />
          </div>
          <NewClientBt onClick={() => setShowCreate(true)} />

          <ul>
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
            <ClientCard />
          </ul>
        </div>
      </Container>
    </>
  );
}
