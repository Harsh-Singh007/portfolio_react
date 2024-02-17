import React from 'react'
import error from '../images/error-404.png'
import "./../Style/error.css"
export const Error = () => {
  return (
    <div className="error">
        <img src={error} alt="" />
    </div>
  )
}
