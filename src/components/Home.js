/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    state = {
        aydannId: "130384559",
        videoURL: ''
    }

    componentDidMount() {
        this.getTwitchData()

    }

    getTwitchData = async () => {
        try {
            let twitchData = await axios.get(`https://api.twitch.tv/helix/clips?broadcaster_id=${this.state.aydannId}`, {
                headers: {
                    'Client-ID': 'lhlcb1t0eush1tatlq131n32d0zxp4'
                }
            })
            let randomClip=Math.floor(Math.random() * 20)
            this.setState({
                videoURL: `https://clips.twitch.tv/embed?clip=${twitchData.data.data[randomClip].id}`
            })
            
            console.log(twitchData.data.data[randomClip])
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World-Home</h1>
                <iframe
                    src={this.state.videoURL}
                    height="360"
                    width="640"
                    autoPlay={false}
                    scrolling='no'
                    allowFullScreen={true}
                    >
                </iframe>
            </div>
        );
    }
}

export default Home;