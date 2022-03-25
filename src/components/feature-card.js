import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './feature-card.module.css'

const FeatureCard = (props) => {
  return (
    <div className={styles['Card']}>
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className={styles['image']}
      />
      <h4 className={` ${styles['text']} ${projectStyles['heading4']} `}>
        {props.heading}
      </h4>
      <span
        className={` ${styles['text1']} ${projectStyles['content-Light']} `}
      >
        {props.text}
      </span>
      <span className={styles['text2']}>{props.text1}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  image_alt1: 'image',
  text1: '',
  text: 'Search Profile containing information of old people',
  heading: 'Search Profile',
  image_src1:
    'https://images.unsplash.com/photo-1527907440866-d9ccd3e05491?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwcm9maWxlJTIwb2xkfGVufDB8fHx8MTY0NjQ4NjE4MQ&ixlib=rb-1.2.1&w=200',
}

FeatureCard.propTypes = {
  image_alt1: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_src1: PropTypes.string,
}

export default FeatureCard
