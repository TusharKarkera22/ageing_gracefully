import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './appointment-confirmed.module.css'

const AppointmentConfirmed = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Appointment Confirmed - AgeingGracefully</title>
        <meta
          property="og:title"
          content="Appointment Confirmed - AgeingGracefully"
        />
      </Helmet>
      <div
        className={styles['AppoinmentconfirmedpageAppointmentconfirmed150251']}
      >
        <div className={styles['Taskbar150253']}>
          <img
            alt="Rectangle30150254"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/fb94761c-f26d-452a-a774-ea7e9d48ac8c?org_if_sml=1336"
            className={styles['image']}
          />
          <Link to="/profile22" className={styles['navlink']}>
            <img
              alt="profile150255"
              src="/playground_assets/profile150255-0y6q.svg"
              className={styles['image1']}
            />
          </Link>
          <Link to="/notifications" className={styles['navlink1']}>
            <img
              alt="notification150261"
              src="/playground_assets/notification150261-ou7y.svg"
              className={styles['image2']}
            />
          </Link>
          <Link to="/homepage" className={styles['navlink2']}>
            <img
              alt="home150264"
              src="/playground_assets/home150264-cih.svg"
              className={styles['image3']}
            />
          </Link>
          <Link to="/schedule" className={styles['navlink3']}>
            <img
              alt="Group73150266"
              src="/playground_assets/group73150266-rhff.svg"
              className={styles['image4']}
            />
          </Link>
        </div>
        <img
          alt="menu150269"
          src="/playground_assets/menu150269-jqzo.svg"
          className={styles['image5']}
        />
        <img
          alt="Vectoractiongoback150273"
          src="/playground_assets/vectoractiongoback150273-pssj.svg"
          className={styles['svg']}
        />
        <img
          alt="yourappointmentisconfirmed1837"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/864341ac-f9a5-4dd9-b9fa-f05b95377648?org_if_sml=114892"
          className={styles['image6']}
        />
      </div>
    </div>
  )
}

export default AppointmentConfirmed
