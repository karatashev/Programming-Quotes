import React from 'react'
import "./Card.css"
import { ImQuotesRight } from 'react-icons/im'
 
const Card = ({quote, author}) => {
  return (
  <div className='card-container'>
    <ImQuotesRight className='icon'/>
    <div className='quote'>{quote}</div>
    <div className='author'>-{author}-</div>
  </div>
  )
}

export default Card