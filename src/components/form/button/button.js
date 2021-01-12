import './button.scss';

const Button = (props) => {
    return <a className="Button" style={{ background: `${props.background}`, color: `${props.color}` }} href={props.href} >{props.text}</a>
}

export default Button;
