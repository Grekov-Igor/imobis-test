import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, {useState} from "react";
import Campaign from "./components/Campaign.js";
import ChannelSetup from "./components/ChannelSetup.js";

import './index.css';

const App = () => {
  const [arrChannels, setArrChannels] = useState([]);
  const [channels, setChannels] = useState(["Вконтакте", "Telegram", "WhatsApp", "SMS"]);
  // console.log(arrChannels);
  
  return (
    <BrowserRouter>
      <div className="wrapper">
        
        <Routes>
          <Route path='/' element={<Campaign channels={channels} arrChannels={arrChannels}/>}></Route>
          <Route path='/channelSetup' element={<ChannelSetup setChannels={setChannels} channels={channels} arrChannels={arrChannels} setArrChannels={setArrChannels}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
