import React from 'react';
import stylesheet from './dev_components.module.css';
const Dev_Component = (props) => {

    const { image, heading, value1,value2,value3,value4,value5,value6,value7,value8 } = props

    return (
        <div className={stylesheet.tabs}>
            <div className={stylesheet.tab}>
            <div className={stylesheet.ima}>

                <img src={image} alt="" />
            </div>
            <div className={stylesheet.front}>

                <h6>{heading}</h6>
            </div>
            <div className={stylesheet.tech} >
                <p>{value1}</p>
                <p>{value2}</p>
                <p>{value3}</p>
                <p>{value4}</p>
                <p>{value5}</p>
                <p>{value6}</p>
                <p>{value7}</p>
                <p>{value8}</p>


            </div>
            </div>

        </div>
    )
}

export default Dev_Component