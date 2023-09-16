import './ChannelInCampaign.css';
const ChannelInCampaign = (props) => {
    return (
        <div className="channelInCampaign">
            <div className="channel-name">{props.channel}</div>
        </div>
    );
}

export default ChannelInCampaign;