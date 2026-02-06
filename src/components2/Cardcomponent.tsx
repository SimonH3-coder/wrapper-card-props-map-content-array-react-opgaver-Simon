import { Cardheadercomponent } from "./Cardheadercomponent";
import { Cardbodycomponent } from "./Cardbodycomponent";
import { CardFootercomponent } from "./CardFootercomponent";

export const Cardcomponent = ({ cardData }) => {
    return (
        <div className="card">
            <Cardheadercomponent text={cardData.header}/>
            <Cardbodycomponent content={cardData.body}/>
            <CardFootercomponent content={cardData.footer}/>

        </div>