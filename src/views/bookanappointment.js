import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './bookanappointment.module.css'

const Bookanappointment = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Book an appointment - AgeingGracefully</title>
        <meta
          property="og:title"
          content="Book an appointment - AgeingGracefully"
        />
      </Helmet>
      <div className={styles['apptdetailspageapptdetails150205']}>
        <div className={styles['Taskbar150206']}>
          <img
            alt="Rectangle30150207"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/b72d8b45-ef59-455c-8ce4-5ddecbba9655?org_if_sml=1336"
            className={styles['image']}
          />
          <Link to="/profile22" className={styles['navlink']}>
            <img
              alt="profile150208"
              src="/playground_assets/profile150208-v50l.svg"
              className={styles['image1']}
            />
          </Link>
          <Link to="/notifications" className={styles['navlink1']}>
            <img
              alt="notification150214"
              src="/playground_assets/notification150214-tqb.svg"
              className={styles['image2']}
            />
          </Link>
          <Link to="/homepage" className={styles['navlink2']}>
            <img
              alt="home150217"
              src="/playground_assets/home150217-n1dd.svg"
              className={styles['image3']}
            />
          </Link>
          <Link to="/schedule" className={styles['navlink3']}>
            <img
              alt="Group73150219"
              src="/playground_assets/group73150219-7d9e.svg"
              className={styles['image4']}
            />
          </Link>
        </div>
        <Link to="/settings" className={styles['navlink4']}>
          <img
            alt="menu150222"
            src="/playground_assets/menu150222-xopo.svg"
            className={styles['image5']}
          />
        </Link>
        <Link to="/choosea-doctor" className={styles['navlink5']}>
          <img
            alt="Vectoractiongoback150226"
            src="/playground_assets/vectoractiongoback150226-a25.svg"
            className={styles['svg']}
          />
        </Link>
        <img
          alt="BookAppointment1854"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/4e483115-6187-4d90-8870-4164aa417b65?org_if_sml=16819"
          className={styles['image6']}
        />
        <Link
          to="/appointment-details1"
          className={` ${styles['Book-Appointment']} ${projectStyles['button']} `}
        >
          <span className={styles['text']}>
            <span>Book Appointment</span>
            <br></br>
            <span></span>
          </span>
        </Link>
      </div>
      <input
        type="text"
        placeholder="placeholder"
        className={` ${styles['textinput']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="placeholder"
        className={` ${styles['textinput1']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="placeholder"
        className={` ${styles['textinput2']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="placeholder"
        className={` ${styles['textinput3']} ${projectStyles['input']} `}
      />
    </div>
  )
}

export default Bookanappointment
