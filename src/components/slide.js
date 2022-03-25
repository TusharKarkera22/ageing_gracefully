import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './slide.module.css'

const Slide = (props) => {
  return (
    <div
      data-type="slide"
      className={` ${styles['Slide']} ${projectStyles['slide']} ${
        styles[props.rootClassName]
      } `}
    >
      <div
        className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
      >
        <div className={styles['left-side']}>
          <div className={styles['decorations-container']}>
            <img
              alt="image"
              src="/playground_assets/union-200h.png"
              className={styles['dots']}
            />
            <div className={styles['squares-container']}>
              <div className={styles['light-green']}></div>
              <div className={styles['orange']}></div>
            </div>
          </div>
          <div className={styles['image-container']}>
            <img
              alt={props.image_alt}
              src={props.image_src}
              className={styles['image']}
            />
            <div className={styles['slider-controls']}>
              <div data-action="previousSlide" className={styles['go-left']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                  <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
                </svg>
              </div>
              <div data-action="nextSlide" className={styles['go-right']}>
                <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                  <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['right-side']}>
          <span className={styles['Testimonial']}>{props.Testimonial}</span>
          <span className={styles['Author']}>{props.Author}</span>
          <span className={styles['Role']}>{props.Role}</span>
        </div>
      </div>
    </div>
  )
}

Slide.defaultProps = {
  Author: 'Elisabeth Brooke',
  Testimonial:
    '“Love it! I really like the user interface. The sleek aesthetic of the software makes it easy and pleasant to use. I am also a big fan of the way I can customize and organize different feeds and mail sources.”',
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDUxfHxzbWlsZXxlbnwwfHx8fDE2NDM0MDc4MTE&ixlib=rb-1.2.1&w=700',
  image_alt: 'image',
  Role: 'Finance Broker',
}

Slide.propTypes = {
  Author: PropTypes.string,
  Testimonial: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  Role: PropTypes.string,
}

export default Slide
