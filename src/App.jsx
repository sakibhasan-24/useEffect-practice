import "./App.css";

function App() {
  const style = {
    padding: "2rem",
    borderRadius: "20px",
    border: "0",
    backgroundColor: "orange",
    cursor: "pointer",
  };
  return (
    <>
      <Button text="add" style={style}></Button>
      <Button text="remove" style={style}></Button>

      {/* we will do it a better way */}
      <NewButton style={style}>First Button</NewButton>
      <NewButton style={style}>second Button</NewButton>
    </>
  );
}

export default App;

function Button({ style, text }) {
  return <button style={style}>{text}</button>;
}
function NewButton({ style, children }) {
  console.log(children);
  return <button style={style}>{children}</button>;
}
