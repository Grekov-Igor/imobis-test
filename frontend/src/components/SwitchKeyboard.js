import React, {useState} from "react";
import './SwitchKeyboard.css';
const SwitchKeyboard = ({getKeyboardMode}) => {
    const [isStandart, setIsStandart] = useState(true);

    const changeModeHendler = () => {
        setIsStandart(!isStandart);
        getKeyboardMode(!isStandart);
    }
    
    return (
        <div className='switchKeyboard'>
            <div className="block__title">Выберите тип клавиатуры</div>
            <div className="chooseKeyboard">
                <div className={`modeName ${isStandart ? "blue" : ""}`}>Стандартное отображение</div>
                <label className="switch">
                    <input type="checkbox" onChange={changeModeHendler} className="switch__input"/>
                    <span className="switch__slider"></span>
                </label>
                <div className={`modeName ${isStandart ? "" : "blue"}`}>Inline-отображение</div>
            </div> 
        </div>
        
    );
}

export default SwitchKeyboard;