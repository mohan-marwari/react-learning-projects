import Product from "./product";
import "./productTab.css";
function ProductTab() {
  // Product details array
  const products = [
    {
      productName: "Apple Pencil (2nd Gen)",
      productDescription: "A precise and responsive stylus for iPad Pro.",
      oldPrice: 10999,
      newPrice: 8999,
    },
    {
      productName: "AirPods Pro (2nd Gen)",
      productDescription:
        "Noise-canceling wireless earbuds with superior sound.",
      oldPrice: 24999,
      newPrice: 22999,
    },
    {
      productName: "MacBook Air M2",
      productDescription: "Lightweight and powerful laptop for professionals.",
      oldPrice: 129999,
      newPrice: 114999,
    },
    {
      productName: "iPhone 15 Pro",
      productDescription:
        "The latest iPhone with titanium build and A17 Pro chip.",
      oldPrice: 149999,
      newPrice: 139999,
    },
  ];

  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          productName={product.productName}
          productDescription={product.productDescription}
          oldPrice={product.oldPrice}
          newPrice={product.newPrice}
        />
      ))}
    </div>
  );
}

export default ProductTab;
