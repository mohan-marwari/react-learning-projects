function Price({oldPrice, newPrice}) {
  return (
    <div className="price-section">
      <span className="old-price">₹{oldPrice}</span>
      <span className="new-price">₹{newPrice}</span>
    </div>
  );
}
export default Price;
