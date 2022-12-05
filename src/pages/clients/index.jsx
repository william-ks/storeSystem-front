import { useState, useEffect } from "react";
import Container from "./style";
import ClientCard from "./components/ClientCard";
import CreateClients from "./subComponents/CreateEditModal";
import NewClientBt from "./components/newClientBt";

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
        <h1 className="pageTitle">Clientes</h1>
        <div className="center">
          <header className="header">
            <input type="text" placeholder="Pesquisar" />
          </header>
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
