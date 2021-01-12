import './card.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
    return (
        <div className="Card">
            <FontAwesomeIcon icon={props.icon} size="2x" />
            <h3>{props.text}</h3>
        </div>
    )
}

export default Card;
