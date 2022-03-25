import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './settings.module.css'

const Settings = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Settings - AgeingGracefully</title>
        <meta property="og:title" content="Settings - AgeingGracefully" />
      </Helmet>
      <div className={styles['settingspagesettings170330']}>
        <div className={styles['Taskbar170346']}>
          <img
            alt="Rectangle30170347"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/34064ef4-3306-4488-86ab-f9da4e7c5d3a?org_if_sml=1324"
            className={styles['image']}
          />
          <Link to="/profile22" className={styles['navlink']}>
            <img
              alt="profile170348"
              src="/playground_assets/profile170348-y8ae.svg"
              className={styles['image01']}
            />
          </Link>
          <Link to="/notifications" className={styles['navlink1']}>
            <img
              alt="notification170354"
              src="/playground_assets/notification170354-6wly.svg"
              className={styles['image02']}
            />
          </Link>
          <Link to="/homepage" className={styles['navlink2']}>
            <img
              alt="home170357"
              src="/playground_assets/home170357-9ecf.svg"
              className={styles['image03']}
            />
          </Link>
          <Link to="/schedule" className={styles['navlink3']}>
            <img
              alt="Group73170359"
              src="/playground_assets/group73170359-c0xa.svg"
              className={styles['image04']}
            />
          </Link>
        </div>
        <span className={styles['text']}>
          <span className={styles['text01']}>Settings</span>
        </span>
        <div className={styles['Searchhereforcategory182194']}>
          <img
            alt="Rectangle58170366"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/5d02c6cc-aa05-4d74-beff-1b1fd2f1d875?org_if_sml=1790"
            className={styles['image05']}
          />
          <img
            alt="Search170367"
            src="/playground_assets/search170367-xy8.svg"
            className={styles['image06']}
          />
          <span className={styles['text02']}>
            <span className={styles['text03']}>Search here for category</span>
          </span>
        </div>
        <div className={styles['Account178322']}>
          <img
            alt="Rectangle59170371"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/67130107-e9e4-44f6-b412-e465e4ce0ee3?org_if_sml=1694"
            className={styles['image07']}
          />
          <img
            alt="user170372"
            src="/playground_assets/user170372-hrti.svg"
            className={styles['image08']}
          />
          <span className={styles['text04']}>
            <span className={styles['text05']}>Account</span>
          </span>
        </div>
        <div className={styles['Feedback182191']}>
          <img
            alt="Rectangle62170386"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/42703a38-627b-4f7a-a03c-f62e25501930?org_if_sml=1670"
            className={styles['image09']}
          />
          <span className={styles['text06']}>
            <span className={styles['text07']}>Feedback</span>
          </span>
          <img
            alt="Feedback170422"
            src="/playground_assets/feedback170422-wmyl.svg"
            className={styles['image10']}
          />
        </div>
        <div className={styles['HelpandSupport182190']}>
          <img
            alt="Rectangle61170381"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/82a390cb-293b-49d5-8319-e7a615cc2215?org_if_sml=1670"
            className={styles['image11']}
          />
          <span className={styles['text08']}>
            <span className={styles['text09']}>Help and Support</span>
          </span>
          <img
            alt="HelpandSupport170421"
            src="/playground_assets/helpandsupport170421-ka5h.svg"
            className={styles['image12']}
          />
        </div>
        <div className={styles['SecurityandPrivacy182193']}>
          <img
            alt="Rectangle64170396"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/9da00485-c418-4192-99df-48168de69f42?org_if_sml=1670"
            className={styles['image13']}
          />
          <span className={styles['text10']}>
            <span className={styles['text11']}>Security and Privacy</span>
          </span>
          <img
            alt="lock170419"
            src="/playground_assets/lock170419-nkbf.svg"
            className={styles['image14']}
          />
        </div>
        <div className={styles['Storage182184']}>
          <img
            alt="Rectangle60170376"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/d9a42edf-e3e5-4da6-ae0b-63413125fc6e?org_if_sml=1670"
            className={styles['image15']}
          />
          <span className={styles['text12']}>
            <span className={styles['text13']}>Storage</span>
          </span>
          <img
            alt="storage170418"
            src="/playground_assets/storage170418-fvnc.svg"
            className={styles['image16']}
          />
        </div>
        <div className={styles['About182192']}>
          <img
            alt="Rectangle63170391"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/2006b49f-d8ce-4417-9894-fb36a6e57485?org_if_sml=1670"
            className={styles['image17']}
          />
          <span className={styles['text14']}>
            <span className={styles['text15']}>About</span>
          </span>
          <img
            alt="About170420"
            src="/playground_assets/about170420-fyfh.svg"
            className={styles['image18']}
          />
        </div>
        <Link to="/homepage" className={styles['navlink4']}>
          <img
            alt="Vectoractiongoback16929"
            src="/playground_assets/vectoractiongoback16929-dut.svg"
            className={styles['svg']}
          />
        </Link>
      </div>
    </div>
  )
}

export default Settings
