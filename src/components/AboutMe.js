// Import react and a picture to display user's face.

import React, { Component } from 'react';
import profile from './pictures/image0.jpg'

// About Me class to display paragraphs for whatever user wanted to say.

class AboutMe extends Component {
    render() {
        return (
            // About Me class name to make sure things are spaced properly via CSS.
            <div className='aboutMe'>
                
                {/* Profile has been imported up top along with react. */}

                <img src={profile} alt="profile" className='profile'></img>

                {/* All the info about the user as he requested. */}

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

                    <p>
                        I am not just a streamer, but a creator. I am currently the host of an on-going podcast called Coffee & Creators. It is based after content creation and the journey of others who have found success.
                    </p>

                    <p>
                        You can check out my podcast or catch one of my streams! I stream MWF and Saturday!
                    </p>
                </div>
            </div>
        );
    }
}

export default AboutMe;