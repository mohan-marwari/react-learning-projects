import Price from "./price";
function Product({ productName, productDescription, oldPrice, newPrice }) {
  return (
    <div className="card">
      <h2>{productName}</h2>
      <p>{productDescription}</p>
      <Price oldPrice={oldPrice} newPrice={newPrice} />
    </div>
  );
}

export default Product;
