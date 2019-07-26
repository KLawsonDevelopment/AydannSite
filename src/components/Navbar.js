import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <div>
                <ul className='primaryNav'>
                    <a href='/'>Home</a>
                    <a href="/about">About</a>
                    <a href="https://www.twitch.tv/aydann">Twitch</a>
                    <a href="https://www.google.com">Merch</a>
                    <a href="https://www.google.com">Social</a>
                    <a href="https://www.google.com">Contact</a>
                </ul>
            </div>
        );
    }
}

export default navbar;