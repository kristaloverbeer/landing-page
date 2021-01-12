import './cards.scss';
import Card from '../../form/card/card';

const Cards = (props) => {
    return (
        <div className="Cards">
            {props.cards.map((card, index) => {
                return <Card key={index} icon={card.icon} text={card.text} />
            })}
        </div>
    )
}

export default Cards;
