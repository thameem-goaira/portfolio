import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
// import profilepic from '../img/logo192.png';
// import profilepic from '../img/siva_profile.jpg';
// import profilepic from '../img/siva_profile2.jpg';
import profilepic from '../img/siva_profile3.jpg';
import Social from '../components/Social'
import mycv from '../img/sivakumar.pdf'
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect className="typingeffect" text={['I am Sivakumar', 'I am a flutter app developer']} speed={100} eraseDelay={700} />
                <a class="download-button" href={mycv} download>Download My CV</a>
                <Social />
            </div>
        )
    }
}
export default Home