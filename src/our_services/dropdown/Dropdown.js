import React, { useEffect } from 'react'
import { BsChevronDown } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';

const Dropdown = () => {

    const abc = () =>{
        const selected1 = document.querySelector(".selected1");
        const optionContainer1 = document.querySelector(".option-container1");
        const optionList1 = document.querySelectorAll(".option1");
        selected1.addEventListener('click', () => {
            optionContainer1.classList.toggle("active");
        });
        optionList1.forEach(o => {
            o.addEventListener('click', () => {
                selected1.innerHTML = o.querySelector("label").innerHTML;
                optionContainer1.classList.remove("active");
            })
        })
    };

    useEffect(() =>{
        abc();
    },[])
  return (
    <div> 
    <div className="container">
        <div className="select-box1">
            <div className="option-container1">
                <div className="option1 active">
                    <input type="radio" className="radio"/>
                    <label>Junior level (1-3 Years of experience) </label>
                </div>
                <div className="option1">
                    <input type="radio" className="radio" />
                    <label>Mid-level level (1-3 Years of experience)</label>
                </div>
                <div className="option1">
                    <input type="radio" className="radio" />
                    <label>Senior level (1-3 Years of experience)</label>
                </div>
            </div>
            <div className="selected1">
                Junior level (1-3 Years of experience)
            </div>
        </div>
    </div>
</div>
  )
}

export default Dropdown;