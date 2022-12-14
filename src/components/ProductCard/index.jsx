import Container from "./style";

export default function ProductCard() {
  return (
    <Container>
      <div className="image"></div>

      <div className="column">
        <h3 className="title">Joelho 90° 50mm Krona Joelho 90° 50mm Krona</h3>
        <p className="inventory">59 Disponivéis</p>
        <h4 className="price">
          Preço: <span>R$ 45,99</span>
        </h4>
      </div>
    </Container>
  );
}
