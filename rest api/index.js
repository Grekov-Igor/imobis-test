const express = require('express');
const campaignRouter = require('./routes/campaign.routes');
const channelRouter = require('./routes/channel.routes');
const buttonRouter = require('./routes/button.routes');
const PORT = 4444;
const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }


const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', campaignRouter);
app.use('/api', channelRouter);
app.use('/api', buttonRouter);


app.listen(PORT, () => console.log("server started on port "+ PORT));