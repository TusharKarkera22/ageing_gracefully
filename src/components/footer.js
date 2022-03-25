import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './footer.module.css'

const Footer = (props) => {
  return (
    <footer
      className={` ${styles['Footer']} ${projectStyles['section-container']} `}
    >
      <div
        className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
      >
        <div className={styles['container']}>
          <span
            className={` ${styles['text']} ${projectStyles['content-Light']} `}
          >
            Feed all your content, news, mailboxes all into one single app and
            read everything from one place, on your device.
          </span>
          <div className={styles['SocialMedia']}>
            <span className={styles['text1']}>{props.text}</span>
            <span className={styles['text2']}>{props.text1}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer.defaultProps = {
  text1: 'ageinggracefully@gmail.com',
  text: 'Contact Us At',
}

Footer.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
}

export default Footer
