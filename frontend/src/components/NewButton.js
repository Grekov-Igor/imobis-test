import React, {useState} from "react";
import './NewButton.css';
const NewButton = (props) => {
    const [isShowInput, setIsShowInput] = useState(false);
    let [isShowButton, setIsShowButton] = useState(true); 
    const [isMax, setIsMax] = useState(false);
    
    const addLinkHendler = () => {
        setIsShowButton(!isShowButton);
        setIsShowInput(!isShowInput);
        
    }

    let supportsLinks = props.supportsLinks;

    if(!supportsLinks) {
        isShowButton = false;
    }

    let arrButtons = props.arrButtons;
    const printWarningHendler = (event) => {
        if(event.target.value.length>=props.limitText) {
            setIsMax(true);
        } else {
            setIsMax(false);
        }
 
        arrButtons[props.listId].text = event.target.value;
       
        props.setArrButtons(arrButtons);
        
    }

    const getLinkHendler = (event) => {
        arrButtons[props.listId].link = event.target.value;
        props.setArrButtons(arrButtons);
       
    }
    return (
        <div>
            <div className="button-name">Кнопка №{props.numButton}</div>
            <div className="button-text">
                <div className="block__title">Введите текст кнопки</div>
                <input onChange={printWarningHendler} maxLength={props.limitText} placeholder='Текст кнопки' type='text' className='input-area'/>
                <div className={`warning ${isMax ? "active" : ""}`}>Максимальное количество символов для {props.channel} - {props.limitText} символов!</div>
                
            </div>
            <button onClick={addLinkHendler} className={`add-link ${!isShowButton ? 'hide': ''}`}>Добавить ссылку к кнопке</button>
            <div className={`button-link ${isShowInput ? 'show': ''}`}>
                <div className="block__title">Введите ссылку кнопки</div>
                <input onChange={getLinkHendler} placeholder='Ссылка кнопки' type='text' className='input-area'/> 
            </div>
            
        </div>
    );
}

export default NewButton;