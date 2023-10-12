import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="B.Tech Information Technology" where="Anna University" from="July 2019" to="2023" />
                <Widecard title="SSLC | HSC" where="NSMVPS Higher Secondary School" from="2010" to="2017" />
            </div>
        )
    }
}
export default Education