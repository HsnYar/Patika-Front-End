import React, {Component} from 'react';
import "./../../index.css"

class Searchbar extends Component {
    render() {
        return (
            <div>
                <div>
                    <input type="text" placeholder="Name/Model"/>
                </div>
            </div>
        );
    }
}

export default Searchbar;