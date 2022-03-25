import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={projectStyles['navbar-link']}>{props.text}</span>
      <Link
        to="/"
        className={` ${styles['navlink']} ${projectStyles['navbar-link']} `}
      >
        {props.text2}
      </Link>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Features',
  rootClassName: '',
  text: 'Home',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text: PropTypes.string,
}

export default NavigationLinks
