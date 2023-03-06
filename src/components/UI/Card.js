import './Card.css';
function Card(props)
{
    const Class='Card '+props.className;
    return(
        <div className={Class}>{props.children}</div>
    )
}
export default Card;