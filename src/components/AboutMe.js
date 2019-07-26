import React, { Component } from 'react';
import profile from './pictures/image0.jpg'

class AboutMe extends Component {
    render() {
        return (
            <div className='aboutMe'>
                <img src={profile} alt="profile" className='profile'></img>
                <div className='aboutMeInfo'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis velit ad aspernatur libero natus maxime magnam earum molestias aperiam, molestiae minima vitae iure consectetur ducimus dignissimos ut voluptatem fugiat dolores.
                </div>
            </div>
        );
    }
}

export default AboutMe;