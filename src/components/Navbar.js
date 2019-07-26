import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <div>
                <ul className='primaryNav'>
                    <a href='/'>Home</a>
                    <a href="/about">About</a>
                    <a href="https://www.twitch.tv/aydann">Twitch</a>
                    <a href="#">Merch</a>
                    <a href="#">Social</a>
                    <a href="#">Contact</a>
                </ul>
            </div>
        );
    }
}

export default navbar;