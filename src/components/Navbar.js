import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <div>
                <ul className='primaryNav'>
                    <a href="#">About</a>
                    <a href="#">Live</a>
                    <a href="#">Merch</a>
                    <a href="#">Social</a>
                    <a href="#">Contact</a>
                </ul>
            </div>
        );
    }
}

export default navbar;