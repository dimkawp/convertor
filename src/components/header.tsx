import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent: React.FC = () => {
  return (
    <header>
        <h2>APP CONVERTOR</h2>
        <Link to="https://api.apilayer.com">Currency Data API</Link>
    <span></span> 	
</header>
  )
}

export default HeaderComponent;