
import "./ChannelText.css";
import React, {useState} from "react";
const ChannelText = (props) => {
    const channel = props.channel;
    // console.log(channel);
    let maxLengthTA;
    if (channel === "Вконтакте" || channel === "Telegram") {
        maxLengthTA = 4096;
    } else if (channel === "WhatsApp") {
        maxLengthTA = 1000;
    }
    

    const [isMax, setMax] = useState(false);
    const checkLimit = (event) => {
        // console.log(event.target.value);
        if(event.target.value.length>=maxLengthTA) {
            setMax(true);
        } else {
            setMax(false);
        }
        props.getChannelText(event.target.value);
    }

    return (
        <div>
            <div className="block__title">Введите текст сообщения</div>
            <textarea defaultValue="" onChange={checkLimit} maxLength={maxLengthTA} className="channel-textarea" placeholder="Текст сообщения"></textarea>
            {/* {...channel !== "SMS" ? {maxLength: {maxLengthTA}} : {}} */}
            <div className={`warning ${isMax ? "active" : ""}`}>Максимальное количество символов для {channel} - {maxLengthTA} символов!</div>
        </div>
    );
}

export default ChannelText;