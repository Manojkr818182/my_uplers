import React from 'react'
import stylesheet from './aaa.module.css';
import talent_img from '../../assets/talent-factors-new.png'

const AAAA = () => {
    return (
        <div className={stylesheet.main}>
            <div className={stylesheet.first}>
                <div className={stylesheet.image}>
                    <img src={talent_img} width="350px" />
                    <ul >
                        <li >
                            <div className={stylesheet.first_1_one}>
                                <div className={stylesheet.first_1_line2}>
                                </div>
                                <div className={stylesheet.first_1_line}></div>
                                <div className={stylesheet.first_1}> 
                                </div>
                            </div>
                        </li>
                        <li >
                            <div className={stylesheet.second_one}>
                                <div className={stylesheet.second_line2}>
                                </div>
                                <div className={stylesheet.second_line}></div>
                                <div className={stylesheet.second}> </div>
                            </div>
                        </li>
                        <li >
                            <div className={stylesheet.third_one}>
                                <div className={stylesheet.third}>
                                </div>
                                <div className={stylesheet.third_line}>
                                </div>
                                <div className={stylesheet.third_line2}>
                                </div>
                            </div>
                        </li>
                        <li >
                            <div className={stylesheet.fourth_one}>
                                <div className={stylesheet.fourth}>
                                </div>
                                <div className={stylesheet.fourth_line}>
                                </div>
                                <div className={stylesheet.fourth_line2}>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AAAA