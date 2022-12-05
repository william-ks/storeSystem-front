import Container from "./style";

export default function Header({ children }) {
  return (
    <Container>
      <div className="center">{children}</div>
    </Container>
  );
}
