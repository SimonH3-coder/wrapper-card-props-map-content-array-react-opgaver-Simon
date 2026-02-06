import { Wrappercomponent } from "./components/Wrappercomponent";
import { Cardcomponent } from "./components2/Cardcomponent";
import "./App.css";

function App() {
  const cardContent = {
    title: "Mite kort",
    textContent: "Dette er indholdet i card body",
    footerContent: "Footer indhold indsættes her",
  };
  return (
    <>
      <Wrappercomponent title="Titel 1" subtitle="Undertitel 2">
        <p>Her er child component</p>
        <p>Der skal være flere elementer tilgængelig</p>
      </Wrappercomponent>
      <Cardcomponent cardData={cardContent} />
    </>
  );
}

export default App;
