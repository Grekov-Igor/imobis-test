import { Link } from "react-router-dom";
import React, {useState} from "react";
import ChannelInCampaign from "./ChannelInCampaign";
import axios from 'axios';
import './Campaign.css'


const Campaign = (props) => {
    const [arrChannels, setArrChannels] = useState(props.arrChannels);
    console.log(arrChannels);

    const saveCampaignHendler = async () => {
        if(arrChannels.length === 0) {
            alert("Вы не добавили ни один канал!");
        } else {
            const dataForCampaign = {
                nameCampaign:"Новая кампания"
            }
            //добавление новой кампании в бд
            let response = await axios.post('http://localhost:4444/api/campaign', dataForCampaign);
            let idCampaign = response.data.idCampaign;
            for(let i=0; i<arrChannels.length; i++) {
                const dataForChannel = {
                    nameChannel: arrChannels[i].channel,
                    messageText: arrChannels[i].messageText,
                    keyboardIsStandart: arrChannels[i].isStandart,
                    idCampaign: idCampaign
                }
                response = await axios.post('http://localhost:4444/api/channel', dataForChannel);
                let idChannel = response.data.idChannel;
                for(let j=0; j<arrChannels[i].arrButtons.length; j++) {
                    const dataForButton = {
                        textButton: arrChannels[i].arrButtons[j].text,
                        linkButton: arrChannels[i].arrButtons[j].link,
                        idChannel: idChannel
                    }
                    response = await axios.post('http://localhost:4444/api/button', dataForButton);
                }
            }
            alert("Успешно!");
            window.location.reload();
           
        }
    }

    

    return (
        <div className='compaign'>
            <div>
                <div className="title">Кампания</div>
                <div className="channels">
                    {arrChannels.map(channel => <ChannelInCampaign key={channel.channel} channel={channel.channel}/> )}
                    
                </div>
                {props.channels.length===0 ? "" : <Link to='/channelSetup' className='button'>Добавить канал</Link>}
            </div>
            
            <button onClick={saveCampaignHendler} className="button save-campaign">Сохранить</button>
            
        </div>
    );
}

export default Campaign;