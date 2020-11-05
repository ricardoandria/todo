function App() {
  const [name, setName] = React.useState("Judicael");
  React.useEffect(() => {
    setTimeout(() => {
      setName("Judicael Andriamahandry");
    }, 4000);
  }, [name]);
  return (
    <div className="container">
      <h1>{name}</h1>
    </div>
  );
}

export default App;
