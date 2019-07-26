import React, { Component } from 'react';

class navbar extends Component {
    
    DropdownFunction = () => {
        document.getElementById('socialDropdown').classList.toggle('show')
    }
    
    render() {
        return (
            <div>
                <ul className='primaryNav'>
                    <a href='/'>Home</a>
                    <a href="/about">About</a>
                    <a href="https://www.twitch.tv/aydann">Twitch</a>
                    <a href="https://www.google.com">Merch</a>
                    <div className='dropdown'>
                        <button className='social' onMouseOver='DropdownFunction()'>
                            Social
                    </button>
                        <div className='socialDropdown' id='socialDropdown'>
                            <a href='https://www.youtube.com/aydann'>Youtube</a>
                            <a href='https://discord.gg/bAXwzVh'>Discord</a>
                            <a href='https://www.instagram.com/aydannstreams/'>Instagram</a>
                            <a href='https://twitter.com/aydannstreams'>Twitter</a>
                        </div>
                    </div>
                    <a href="https://www.google.com">Contact</a>
                </ul>
            </div>
        );
    }
}

export default navbar;