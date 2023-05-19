import React, { useState } from 'react'

const First_Accordian = ({question,answer}) => {
    
    const [show, setShow] = useState(false)

  return (
    <>
    <div className='main-heading'>
        <p onClick={()=>setShow(!show)}>{show? 'return' : 'click me'}</p>
        <h4>{question}</h4>
    </div>
    { show &&

    <p className='answers'>{answer}</p>
    }
    </>
  )
}

export default First_Accordian;