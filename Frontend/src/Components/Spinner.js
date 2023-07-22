import React from 'react'
import spinner from '../Components/Images/spinner.gif'

const Spinner = () => {
  return (
    <div>
        <div className='text-center'>
        <img src={spinner} alt="LOADING" style={{width:"250px", height:"250px"}}/>
      </div>
    </div>
  )
}

export default Spinner