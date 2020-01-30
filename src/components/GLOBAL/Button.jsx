import React from 'react'
import { Link } from "react-router-dom";


const Button = (props) => {
  const { textCta, linkCta } = props
  
  return (
    <div className={linkCta === '/webapp' ? 'cta cta--primary' : 'cta'}>
      <Link className='cta__link cta-text' to={ linkCta }>{ textCta }</Link>
    </div>
  )
}

export default Button