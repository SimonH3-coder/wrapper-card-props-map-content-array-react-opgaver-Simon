import { Wrappercomponent } from "./components/Wrappercomponent";
import { Cardcomponent } from "./components2/Cardcomponent";

import { Kortcomponent } from "./components3/Kortcomponent";
import "./App.css";

function App() {
  const kortData = [
    {
    title: "Mit kort",
    textContent: "Dette er indholdet i card body",
    footerContent: "Footer indhold indsættes her",
  };

  const kort1 = {
    title: "Kort titel",
    textContent2: "Dette er indholdet i kort body",
    image: "",
    footerContent: "Kort footer indhold",
  };

  const kort2 = {
    title: "Kort titel 2",
    textContent2: "Dette er indholdet i kort body 2",
    image: "",
    footerContent: "Kort footer indhold 2",
  };

  const kort3 = {
    title: "Kort titel 3",
    textContent2: "Dette er indholdet i kort body 3",
    image: "",
    footerContent: "Kort footer indhold 3",
  };

  const kort4 = {
    title: "Kort titel 4",
    textContent2: "Dette er indholdet i kort body 4",
    image: "",
    footerContent: "Kort footer indhold 4",
  };

  const kort5 = {
    title: "Kort titel 5",
    textContent2: "Dette er indholdet i kort body 5",
    image: "",
    footerContent: "Kort footer indhold 5",
  };
]




  return (
    <>
      <Wrappercomponent title="Titel 1" subtitle="Undertitel 2">
        <p>Her er child component</p>
        <p>Der skal være flere elementer tilgængelig</p>
      </Wrappercomponent>
      <Cardcomponent cardData={cardContent} />
      <Kortcomponent {...kort1} />
      <Kortcomponent {...kort2} />
      <Kortcomponent {...kort3} />
      <Kortcomponent {...kort4} />
      <Kortcomponent {...kort5} />
      <div className="kort-container"> {
         {kortData.map((kort, index) => (
        <Kortcomponent
          key={index}
          title={kort.title}
          textContent2={kort.textContent2}
          image={kort.image}
          footerContent={kort.footerContent}
          />
      </div>


      
    </>
        ))}
  );
}

export default App;
