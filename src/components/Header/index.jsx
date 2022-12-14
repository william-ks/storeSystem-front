import Container from "./style";

export default function Header({ children }) {
  return (
    <Container>
      <div className="center">
        <h1 className="pageTitle">{children}</h1>
      </div>
    </Container>
  );
}
