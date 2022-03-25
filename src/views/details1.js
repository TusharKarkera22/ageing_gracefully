import React from 'react'

import { Helmet } from 'react-helmet'

import styles from './details1.module.css'

const Details1 = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Details1 - AgeingGracefully</title>
        <meta property="og:title" content="Details1 - AgeingGracefully" />
      </Helmet>
      <div className={styles['DetailspageDetail5020']}>
        <img
          alt="DetailsBg2178385"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/0c528a4a-3dc4-48a1-a6d1-26656de17fd3?org_if_sml=137389"
          className={styles['image']}
        />
        <div className={styles['RegisterDetailcontainer1786']}>
          <span className={styles['text']}>
            <span className={styles['text01']}>*Address2</span>
          </span>
          <img
            alt="Line350417"
            src="/playground_assets/line350417-iyfo.svg"
            className={styles['svg']}
          />
          <span className={styles['text02']}>
            <span className={styles['text03']}>*Landmark</span>
          </span>
          <img
            alt="Line450419"
            src="/playground_assets/line450419-agi.svg"
            className={styles['svg1']}
          />
          <span className={styles['text04']}>
            <span className={styles['text05']}>*City</span>
          </span>
          <img
            alt="Line550421"
            src="/playground_assets/line550421-ocnc.svg"
            className={styles['svg2']}
          />
          <span className={styles['text06']}>
            <span className={styles['text07']}>*Address1</span>
          </span>
          <img
            alt="Line150395"
            src="/playground_assets/line150395-xoe8.svg"
            className={styles['svg3']}
          />
          <img
            alt="Line250396"
            src="/playground_assets/line250396-twy.svg"
            className={styles['svg4']}
          />
          <span className={styles['text08']}>
            <span className={styles['text09']}>*Enter Your NGO Name</span>
          </span>
        </div>
        <span className={styles['text10']}>
          <span className={styles['text11']}>
            <span>DETAILS</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <button className={styles['SignupButton2152713']}>
          <span className={styles['text15']}>
            <span className={styles['text16']}>Register</span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Details1
