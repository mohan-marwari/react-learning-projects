import List from "./List";

function PropsAsArray() {
  const items = ["Apple", "Banana", "Orange", "Mango"];

  return (
    <div className="card">
      <h3>Passing Array as Props</h3>
      <p>
      React mein array ko props ke roop mein pass karna ek common aur simple process hai. Aap ek array ko parent component se child component tak props ke madhyam se pass karte hain, aur child component us array ko render karta hai. Yahaan ek example ke saath samjhaya gaya hai:</p>
      <h1>Fruits List</h1>
      {/* Passing array as props */}
      <List items={items} />
    </div>
  );
}

export default PropsAsArray;