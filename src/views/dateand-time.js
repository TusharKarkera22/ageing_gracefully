import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './dateand-time.module.css'

const DateandTime = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Date and Time - AgeingGracefully</title>
        <meta property="og:title" content="Date and Time - AgeingGracefully" />
      </Helmet>
      <div className={styles['dateandtimepagedateandtime150144']}>
        <div className={styles['Taskbar150145']}>
          <img
            alt="profile150147"
            src="/playground_assets/profile150147-023p.svg"
            className={styles['image']}
          />
          <img
            alt="notification150153"
            src="/playground_assets/notification150153-k6kf.svg"
            className={styles['image1']}
          />
          <img
            alt="home150156"
            src="/playground_assets/home150156-xa64l.svg"
            className={styles['image2']}
          />
          <img
            alt="Group73150158"
            src="/playground_assets/group73150158-sxlb.svg"
            className={styles['image3']}
          />
        </div>
        <img
          alt="menu150161"
          src="/playground_assets/menu150161-jl9.svg"
          className={styles['image4']}
        />
        <img
          alt="Vectoractiongoback150165"
          src="/playground_assets/vectoractiongoback150165-dxs5.svg"
          className={styles['svg']}
        />
        <span className={styles['text']}>
          <span className={styles['text01']}>Select Date and Time</span>
        </span>
        <div className={styles['Group90150192']}>
          <span className={styles['text02']}>
            <span className={styles['text03']}>9:30 am</span>
          </span>
        </div>
        <div className={styles['Group89150191']}>
          <span className={styles['text04']}>
            <span className={styles['text05']}>10:30 am</span>
          </span>
        </div>
        <div className={styles['Group91150193']}>
          <span className={styles['text06']}>
            <span className={styles['text07']}>12:30 am</span>
          </span>
        </div>
        <div className={styles['Group92150196']}>
          <span className={styles['text08']}>
            <span className={styles['text09']}>6:00 pm</span>
          </span>
        </div>
        <div className={styles['Group93150199']}>
          <span className={styles['text10']}>
            <span className={styles['text11']}>7:30 pm</span>
          </span>
        </div>
        <div className={styles['Group94150202']}>
          <span className={styles['text12']}>
            <span className={styles['text13']}>9:00 pm</span>
          </span>
        </div>
        <span className={styles['text14']}>
          <span className={styles['text15']}>Slot Available</span>
        </span>
        <img
          alt="Calendar112878"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/f444b832-c529-4bbc-a4fd-b875d0cde141?org_if_sml=121969"
          className={styles['image5']}
        />
      </div>
    </div>
  )
}

export default DateandTime
