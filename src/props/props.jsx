function Welcome({ name, tectColor }) {
  // let styles = {color: tectColor};
  return (
    <>
      <h1 style={{color: tectColor}}>Hello {name}</h1>
    </>
  );
}

function Props() {
  return (
    <div className="card">
      <Welcome name="Mohan Lal" tectColor="yellow" />
      <Welcome name="Arjun Kumar" tectColor="Blue"/>
      <Welcome name="Tara Ram" />
    </div>
  );
}

export default Props;
