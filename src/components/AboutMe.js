import React, { Component } from 'react';
import profile from './pictures/image0.jpg'

class AboutMe extends Component {
    render() {
        return (
            <div className='aboutMe'>
                <img src={profile} alt="profile" className='profile'></img>
                <div className='aboutMeInfo'>
                    <p>
                        Hiya, my name is Aydann! I am a 25 year old streamer and I currently live in Atlanta, GA!
                    </p>
                    <p>
                        Business email: aydannstreams@gmail.com
                    </p>
                    <p>
                        If you like my content, be sure to check out the people I call my friends!
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;