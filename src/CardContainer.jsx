import Card from './Card';
import "./assets/styles/style.css"

function CardContainer (){
    return(
        <div className="card_container">
            <div className="conts" id="carsList">
                    <Card/>
            </div>
        </div>
    );
}

export default CardContainer ;