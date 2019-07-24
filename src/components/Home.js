import React, { Component } from 'react';

class Home extends Component {

    componentDidMount() {
        this.getTwitchData()
    }

    getTwitchData = async() => {
        
    }

    render() {
        return (
            <div>
                <h1>Hello World-Home</h1>
            </div>
        );
    }
}

export default Home;