import React from 'react'
import { Link } from "react-router-dom";

// SVG
import { LittleArrow } from '../../../assets/icons/all-icons'

const Button = (props) => {
  const { textCta, linkCta } = props

  return (
    <div
      className={
        linkCta === '/selection' ||
          linkCta === '/app'
          ? 'cta cta--primary'
          : 'cta'}
    >
      <Link
        className='cta__link cta-text'
        to={linkCta}
      >
        {textCta}
        {linkCta === '/selection'
          ? <LittleArrow />
          : ''}
      </Link>
    </div>
  )
}

export default Button