import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './fund-tracking.module.css'

const FundTracking = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Fund Tracking - AgeingGracefully</title>
        <meta property="og:title" content="Fund Tracking - AgeingGracefully" />
      </Helmet>
      <div className={styles['FundTrackingpageFundTracking64987']}>
        <img
          alt="Fundpagebackground1178325"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/c876def8-22a9-441a-adab-323e521626d9?org_if_sml=1128217"
          className={styles['image']}
        />
        <img
          alt="Vector2264989"
          src="/playground_assets/vector2264989-xreh.svg"
          className={styles['svg']}
        />
        <div className={styles['Taskbar17947']}>
          <img
            alt="Rectangle564992"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/fca9ac6a-070e-4aaa-8ef0-ee570509b981?org_if_sml=1611"
            className={styles['image1']}
          />
          <div className={styles['container1']}>
            <img
              alt="Ellipse7641160"
              src="/playground_assets/ellipse7641160-ub1r.svg"
              className={styles['svg1']}
            />
            <div className={styles['container2']}>
              <Link to="/add-new-profile" className={styles['navlink']}>
                <img
                  alt="Ellipse17641167"
                  src="/playground_assets/ellipse17641167-6zio.svg"
                  className={styles['svg2']}
                />
              </Link>
              <Link to="/add-new-profile" className={styles['navlink1']}>
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className={styles['icon']}
                >
                  <path
                    d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
                    className={styles['icon1']}
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className={styles['healthiconsuiuserprofile64993']}>
            <img
              alt="Group64994"
              src="/playground_assets/group64994-joxk.svg"
              className={styles['image2']}
            />
          </div>
          <Link to="/notifications" className={styles['navlink2']}>
            <img
              alt="claritynotificationsolid641000"
              src="/playground_assets/claritynotificationsolid641000-ty3o.svg"
              className={styles['image3']}
            />
          </Link>
          <div className={styles['heroiconssolidhome641003']}>
            <Link to="/homepage" className={styles['navlink3']}>
              <img
                alt="Group641004"
                src="/playground_assets/group641004-nn6r.svg"
                className={styles['image4']}
              />
            </Link>
          </div>
          <Link to="/schedule" className={styles['navlink4']}>
            <img
              alt="uimcalender641006"
              src="/playground_assets/uimcalender641006-mc0j.svg"
              className={styles['image5']}
            />
          </Link>
          <Link to="/profile22" className={styles['navlink5']}>
            <img
              alt="Ellipse17641026"
              src="/playground_assets/ellipse17641026-0dfc.svg"
              className={styles['svg3']}
            />
          </Link>
        </div>
        <button className={styles['FundTrackingbutton178375']}>
          <img
            alt="Rectangle32641030"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/4e989bc2-df57-44d6-a416-1d377b715658?org_if_sml=13357"
            className={styles['image6']}
          />
          <span className={styles['text']}>
            <span className={styles['text1']}>FUND TRACKING</span>
          </span>
        </button>
        <div className={styles['FundButtoncomponentinputfile17816']}>
          <img
            alt="Rectangle34641034"
            src="/playground_assets/rectangle34641034-06vh.svg"
            className={styles['svg4']}
          />
          <span className={styles['text2']}>
            <span className={styles['text3']}>Add Fund Record</span>
          </span>
        </div>
        <Link to="/profile22" className={styles['navlink6']}>
          <img
            alt="arrowleft641043"
            src="/playground_assets/arrowleft641043-9had.svg"
            className={styles['image7']}
          />
        </Link>
        <Link to="/settings" className={styles['navlink7']}>
          <img
            alt="menu2174009"
            src="/playground_assets/menu2174009-z9h9.svg"
            className={styles['image8']}
          />
        </Link>
        <span className={styles['text4']}>
          <span className={styles['text5']}>No Track Record Found</span>
        </span>
      </div>
    </div>
  )
}

export default FundTracking
