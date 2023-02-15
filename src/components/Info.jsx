import React from 'react'
import '../assets/css/info-style.css'
import InfoPic from '../assets/img/info-pic.jpg'
const Info = () => {
  return (
    <>
      <img src={InfoPic} className="info--pic" alt="a picture of me" />
      <h2 className='info--name'>Fatemeh Hosseini</h2>
      <h4 className='info--jobtitle'>Frontend Developer</h4>
      <h5 className='info--website'>f.hosseini64@gmail.com</h5>
      <button type='button'>Email</button>
    </>
  )
}
export default Info