import React, {useState} from "react";
import './CreateButtons.css';
import NewButton from './NewButton';
const CreateButtons = (props) => {
    const [isMax, setIsMax] = useState(false);
    const [arrButtons, setArrButtons] = useState([]);

    const addButtonHendler = () => {
        if(arrButtons.length>=limitButtons) { //проверка количества кнопок
            setIsMax(true);
        } else {
            setIsMax(false);
            
            let copy = Object.assign([], arrButtons);
                copy.push({
                id: arrButtons.length,
                text: '',
                link: ''
            });

            setArrButtons(copy);
        }  

    }

    const channel = props.channel;
    const isStandart = props.isStandart;
    
    // задаем ограничения для кнопок
    let limitButtons;
    let limitText;
    let supportsLinks;
    if(isStandart) {
        if(channel === "Вконтакте") {
            limitButtons = 40;
            supportsLinks = true;
        } else if(channel === "WhatsApp") {
            limitButtons = 10;
            limitText = 20;
            supportsLinks = false;
        } else if(channel === "SMS") {
            limitButtons = 0;
            supportsLinks = false;
        } else if (channel === "Telegram") {
            supportsLinks = false;
        }
    } else {
        if(channel === "Вконтакте") {
            limitButtons = 10;
            supportsLinks = true;
        } else if(channel === "WhatsApp") {
            limitButtons = 3;
            limitText = 20;
            supportsLinks = true;
        } else if(channel === "SMS") {
            limitButtons = 0;
            supportsLinks = false;
        } else if (channel === "Telegram") {
            supportsLinks = true;
            limitText = 64;
        }
    }

    return (
        <div className='createButtons'>
            <div className="block__title">Добавьте кнопки к сообщению</div>
            
            {arrButtons.map(button => <NewButton setArrButtons={props.setArrButtons} arrButtons={arrButtons} listId={button.id} supportsLinks={supportsLinks} channel={channel} limitText={limitText} key={`button__${button.id}`} numButton={button.id+1}/>)}
            <div className={`warning ${isMax ? "active" : ""}`}>Максимальное количество кнопок для {channel} - {limitButtons}!</div>
            <button onClick={addButtonHendler} className='button new-button'>Добавить кнопку</button>
            
        </div>
    );
}

export default CreateButtons;