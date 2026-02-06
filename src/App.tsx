import { Wrappercomponent } from "./components/Wrappercomponent";
import "./App.css";

function App() {
  return (
    <>
      <Wrappercomponent title="Titel 1" subtitle="Undertitel 2">
        <p>Her er child component</p>
        <p>Der skal være flere elementer tilgængelig</p>
      </Wrappercomponent>
    </>
  );
}

export default App;
