import React, {useState} from "react";
import ChannelItem from "./ChannelItem";
import ChannelText from "./ChannelText";
import SwitchKeyboard from "./SwitchKeyboard";
import CreateButtons from "./CreateButtons";
// import { Link } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import './ChannelSetup.css';

const ChannelSetup = (props) => {
    const [isOpen, setOpen] = useState(false);
    const [btnText, setBtnText] = useState(props.channels[0]);
    const [isStandart, setIsStandart] = useState(true);

    const changeBtnTextHendler = (event) => {
        setBtnText(event.target.textContent);
        setOpen(!isOpen);
    }
    // получение режима клавиатуры из SwitchKeyboard
    const getKeyboardMode = (keyboardMode) => {
        setIsStandart(keyboardMode);
    }

    const [channelText, setChannelText] = useState('');
    const getChannelText = (text) => {
        setChannelText(text);
    }

    const [arrButtons, setArrButtons] = useState([]);
    
    const navigate = useNavigate()
    const saveChannelHendler = () => {
        if(channelText==="") {
            alert("Вы не ввели сообщение!");
        } else {
            let isOk = true;
            for(let i=0;i<arrButtons.length; i++) {
                if(arrButtons[i].text==="") {
                    alert("Вы заполнили название не у всех кнопок!");
                    isOk = false;
                    break;
                }
            }
            if(isOk) {
                console.log(btnText);
                console.log(channelText);
                console.log(isStandart);
                console.log(arrButtons);
                let channelSettings = {
                    channel: btnText,
                    messageText: channelText,
                    isStandart: isStandart,
                    arrButtons: arrButtons
                }

                let copy = Object.assign([], props.arrChannels);
                copy.push(channelSettings);
                // console.log(copy);
                props.setArrChannels(copy);

                let copyChannels = Object.assign([], channels);
                copyChannels.splice(copyChannels.indexOf(channelSettings.channel), 1); //удалить из массива выбора каналов уже настроенный
                props.setChannels(copyChannels);
                navigate(`/`);
            }
        }
        
        
    }
    

    let channels = props.channels;

    return (
        <div className="channelSetup">
            <div className="title">
                Настройка канала
            </div>
            <div className="channel-selection">
                <div className="block__title">
                    Выберите канал
                </div>
                <div className="list">
                    <button className="list__btn" onClick={() => setOpen(!isOpen)}>{btnText}</button>
                    <ul className={`list__dropdown ${isOpen ? "active" : ""}`}>
                        {channels.map(channel => <ChannelItem key={channel} changeBtnTextHendler={changeBtnTextHendler} channel={channel}/>)}
                    </ul>
                </div>
            </div>

            <ChannelText getChannelText={getChannelText} channel={btnText}/>
            <SwitchKeyboard getKeyboardMode={getKeyboardMode}/>
            <CreateButtons setArrButtons={setArrButtons} channel={btnText} isStandart={isStandart}/>
            

            <button onClick={saveChannelHendler} className="button save-channel">Сохранить канал</button>
            {/* <Link to='/channelSetup' className='button'>Добавить канал</Link> */}
        </div> 
    );
}

export default ChannelSetup;