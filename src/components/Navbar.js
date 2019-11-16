// Import react to control the Navbar.

import React, { Component } from 'react';

class navbar extends Component {

    // Made two separate dropdown commands to make sure both the Podcast section and the Social section could be lowered individually.

    PodcastDropdown = () => {
        document.getElementById('myPodcastDropdown').classList.toggle('show')
    }

    SocialDropdown = () => {
        document.getElementById('mySocialDropdown').classList.toggle('show')
    }

    render() {
        return (
            <div>
                {/* PrimaryNav is the full CSS for this navbar. */}
                <ul className='primaryNav'>
                    <a href='/'>Home</a>
                    <a href="/about">About</a>
                    <a href="https://www.twitch.tv/aydann">Twitch</a>
                    {/* First dropdown menu, using a CSS class to control how it is hidden or shown. */}
                    <div className='dropdown' onMouseOver={this.PodcastDropdown} onMouseOut={this.PodcastDropdown}>
                        <button className='podcast'>
                            Podcast
                        </button>
                        {/* PodcastDropdown with both a Spotify and iTunes link. */}
                        <div id="myPodcastDropdown" className='podcastDropdown'>
                            <a href='https://open.spotify.com/show/0sI1pBrz7SCvQVAlzowy16?si=igsQz6BIQjWU9l38WaFVlA'>Spotify</a>
                            <a href="https://podcasts.apple.com/us/podcast/coffee-creators/id1481503518?uo=4">iTunes</a>
                        </div>
                    </div>
                    <a href="https://streamlabs.com/aydann1/#/merch">Merch</a>
                    {/* Second dropdown menu, using the same CSS class but a separate dropdown function. */}
                    <div className='dropdown' onMouseOver={this.SocialDropdown} onMouseOut={this.SocialDropdown}>
                        <button className='social' >
                            Social Media
                        </button>
                        {/* All links for the user to their youtube, discord server, instagram page, and twitter page. */}
                        <div id="mySocialDropdown" className='socialDropdown'>
                            <a href='https://www.youtube.com/aydann'>Youtube</a>
                            <a href='https://discord.gg/bAXwzVh'>Discord</a>
                            <a href='https://www.instagram.com/aydannstreams/'>Instagram</a>
                            <a href='https://twitter.com/aydannstreams'>Twitter</a>
                        </div>
                    </div>
                </ul>
            </div>
        );
    }
}

export default navbar;