import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faClock} from '@fortawesome/free-regular-svg-icons'
import "./SimpleCounter.css"

const SimpleCounter = (props) => {
    return (
        <div className="cotainerCounter">
            <div className="calendar">
            <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="four">{props.four % 10}</div>
            <div className="three">{props.three % 10}</div>
            <div className="two">{props.two % 10}</div>
            <div className="one">{props.one % 10}</div>
        </div>
    )
};

export default SimpleCounter