import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './sign-in.module.css'

const SignIn = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>sign-in - AgeingGracefully</title>
        <meta property="og:title" content="sign-in - AgeingGracefully" />
      </Helmet>
      <div className={styles['SignuppageRegister422']}>
        <img
          alt="LoginBackground117833"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/7fabf951-99cc-4729-a6f3-53652a77f059?org_if_sml=196648"
          className={styles['image']}
        />
        <Link
          to="/homepage"
          name="signup"
          className={styles['SignupButton2152701']}
        >
          <span className={styles['text']}>
            <span className={styles['text1']}>Signup</span>
          </span>
        </Link>
        <input
          type="email"
          name="email"
          size="30"
          pattern="@gmail.com"
          maxlength="30"
          minlength="10"
          placeholder="*Enter Email"
          autoComplete="email"
          className={` ${styles['Enter-Email']} ${projectStyles['input']} `}
        />
        <input
          type="text"
          name="Ngo Name"
          size="30"
          maxlength="30"
          minlength="10"
          placeholder="*Enter Ngo Name"
          autoComplete="organization"
          className={` ${styles['Enter-Ngo-Name']} ${projectStyles['input']} `}
        />
        <input
          type="text"
          name="Ngo Address"
          size="50"
          maxlength="50"
          minlength="10"
          placeholder="*Enter Ngo Address"
          autoComplete="address-line1"
          className={` ${styles['Enter-Ngo-Name1']} ${projectStyles['input']} `}
        />
        <Link to="/login" className={styles['LoginButtonbutton2152708']}>
          <span className={styles['text2']}>
            <span className={styles['text3']}>Login</span>
          </span>
        </Link>
        <button className={styles['LoginButtonbutton2152710']}>
          <span className={styles['text4']}>
            <span className={styles['text5']}>Signup</span>
          </span>
        </button>
      </div>
      <input
        type="password"
        name="password"
        maxlength="10"
        minlength="5"
        placeholder="*Enter Password"
        autoComplete="new-password"
        className={` ${styles['Password']} ${projectStyles['input']} `}
      />
      <input
        type="number"
        max="10"
        min="0"
        name="Phone Number"
        maxlength="10"
        minlength="5"
        placeholder="*Enter Phone Number"
        autoComplete="new-password"
        className={` ${styles['Password1']} ${projectStyles['input']} `}
      />
    </div>
  )
}

export default SignIn
