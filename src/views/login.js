import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './login.module.css'

const Login = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Login - AgeingGracefully</title>
        <meta property="og:title" content="Login - AgeingGracefully" />
      </Helmet>
      <button
        className={` ${styles['LoginSignuppagelogin3052']} ${projectStyles['button']} `}
      >
        <img
          alt="LoginBackground117832"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/0d65c887-af03-4452-bb19-d93172c8f5d4?org_if_sml=196648"
          className={styles['image']}
        />
        <button className={styles['LoginButtonbutton2152704']}>
          <span className={styles['text']}>
            <span className={styles['text1']}>Login</span>
          </span>
        </button>
        <Link to="/sign-in" className={styles['LoginButtonbutton2152706']}>
          <span className={styles['text2']}>
            <span className={styles['text3']}>Signup</span>
          </span>
        </Link>
        <Link to="/homepage" className={styles['LoginButtonbutton2152700']}>
          <span className={styles['text4']}>
            <span className={styles['text5']}>Login</span>
          </span>
        </Link>
        <span className={styles['text6']}>
          <span className={styles['text7']}>Forgot Password</span>
        </span>
      </button>
      <input
        type="password"
        placeholder="*Enter Password"
        className={` ${styles['textinput']} ${projectStyles['password']} ${projectStyles['input']} `}
      />
      <input
        type="email"
        placeholder="*Enter Email"
        className={` ${styles['Input']} ${projectStyles['input']} `}
      />
    </div>
  )
}

export default Login
