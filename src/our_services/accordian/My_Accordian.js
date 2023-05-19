import React, { useState } from 'react'
import { questions } from './Api';
import './accordian.css';
import First_Accordian from './First_Accordian';

const My_Accordian = () => {

  const [data, setData] = useState(questions)

  return (
   <>
   <section className="main-div">
      {
        data.map((curElem)=>{
          const {id} = curElem
            return <First_Accordian key={id}{...curElem}/>
        })
      }
   </section>
   </>
  )
}

export default My_Accordian;