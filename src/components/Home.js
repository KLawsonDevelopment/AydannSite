/* Basic import function for Axios and React. */
import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
    // Creating a state with an ID that was directly pulled from Twitch itself to use with Axios.
    state = {
        aydannId: "130384559",
        videoURL: ''
    }

    // Using componentDidMount to call on the getTwitchData function.
    componentDidMount() {
        this.getTwitchData()

    }
    // Axios call to the twitch API with aydannId to pull one of 50 top clips from the twitch channel to paste onto the home page itself.
    // If it falls, display the error in the console log.
    getTwitchData = async () => {
        try {
            let twitchData = await axios.get(`https://api.twitch.tv/helix/clips?broadcaster_id=${this.state.aydannId}&first=50`, {
                headers: {
                    'Client-ID': 'lhlcb1t0eush1tatlq131n32d0zxp4'
                }
            })
            let randomClip = Math.floor(Math.random() * 50)
            this.setState({
                videoURL: `https://clips.twitch.tv/embed?clip=${twitchData.data.data[randomClip].id}`
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    // Basic render. Take the data placed in state from getTwitchData and display it as a 540x960 clip for user to see. Clip has been muted.
    render() {
        return (
            <div>
                <div className='twitchClip'>
                    <iframe
                        src={this.state.videoURL}
                        height="540"
                        width="960"
                        title='clip'
                    >
                    </iframe>
                </div>
            </div>
        );
    }
}

export default Home;