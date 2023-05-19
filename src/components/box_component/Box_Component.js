import React from 'react';
import stylesheet from './box_component.module.css';

const Box_Component = (props) => {
    const {img, subject, value1 , value2} = props
    return (
        <div className={stylesheet.box}>
            <img src={img}></img>
            <p>{subject}</p>
            <div className={stylesheet.card_body}>
                <h1>{value1}</h1>
                <h3>{value2}</h3>
            </div>
        </div>
    )
}

export default Box_Component