import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
  #loader {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 2s linear infinite;
    margin: 0 auto ;
    float: none ;
    margin-bottom:20px;
  }
  .load {
    text-align: center;
    margin-top: 15%;
    font-size: 18px;
    color: black;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
const Loader = (props) => {
  return(
    <div className="load animated fadeIn">
      <div id="loader" style={{border: `10px solid ${props.color}`, borderTop: '10px solid white'}}></div>
      <p>{props.title}</p>
    </div>
  )
}

export default Loader