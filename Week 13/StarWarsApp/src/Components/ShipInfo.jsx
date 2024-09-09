import React, {Component} from 'react';

class ShipInfo extends Component {
    render() {
        return (
            <div>
                <div className="back-button">
                    <button>Back</button>
                </div>
                <div className="ship-info-card">
                    <img src="./Images/ship.png" alt=""/>
                    <p>Ship Name: <span></span></p>
                    <p>Model: <span></span></p>
                    <p>Manufacturer: <span></span></p>
                    <p>Max atmospheric speed: <span></span></p>
                    <p>Crew: <span></span></p>
                    <p>Cargo capacity: <span></span></p>
                    <p>Starship class: <span></span></p>
                </div>
            </div>
        );
    }
}

export default ShipInfo;