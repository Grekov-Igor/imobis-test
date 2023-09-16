import './ChannelItem.css';
const ChannelItem = (props) => {
    return (
        <li><button onClick={(event) => props.changeBtnTextHendler(event)} className="list__item">{props.channel}</button></li>
    );
}

export default ChannelItem;