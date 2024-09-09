import React, {Component} from 'react';
import "./../../index.css"

class Shipcard extends Component {
    render() {
        return (
            <div>
                <div className="shipcard">
                    <img src="./Images/ship.png" alt=""/>
                    <div className="shipname">
                        <p>Ship Name: <span></span></p>
                        <p>Model: <span></span></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shipcard;