import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './schedule.module.css'

const Schedule = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Schedule - AgeingGracefully</title>
        <meta property="og:title" content="Schedule - AgeingGracefully" />
      </Helmet>
      <div className={styles['SchedulepageSchedule641055']}>
        <img
          alt="Schedulebg1178377"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/c68aeca9-d841-47a3-8c7f-be7db3ad01c9?org_if_sml=140336"
          className={styles['image']}
        />
        <div className={styles['Property1Default178326']}>
          <img
            alt="Rectangle5641060"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/45df4776-7f72-4318-a2ca-8335c7e3203f?org_if_sml=1720"
            className={styles['image01']}
          />
          <Link to="/notifications" className={styles['navlink']}>
            <img
              alt="claritynotificationsolidasseticon178268"
              src="/playground_assets/claritynotificationsolidasseticon178268-qcvw.svg"
              className={styles['image02']}
            />
          </Link>
          <div className={styles['Group1192174526']}>
            <img
              alt="Ellipse7641160"
              src="/playground_assets/ellipse7641160-ub1r.svg"
              className={styles['svg']}
            />
            <Link to="/add-new-profile" className={styles['navlink1']}>
              <img
                alt="Ellipse17641167"
                src="/playground_assets/ellipse17641167-6zio.svg"
                className={styles['svg1']}
              />
            </Link>
            <Link to="/add-new-profile" className={styles['navlink2']}>
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
          <div className={styles['healthiconsuiuserprofile641061']}>
            <Link to="/profile22" className={styles['navlink3']}>
              <img
                alt="Group641062"
                src="/playground_assets/group641062-02n.svg"
                className={styles['image03']}
              />
            </Link>
          </div>
          <div className={styles['heroiconssolidhome641071']}>
            <Link to="/homepage" className={styles['navlink4']}>
              <img
                alt="Group641072"
                src="/playground_assets/group641072-urfd.svg"
                className={styles['image04']}
              />
            </Link>
            <Link to="/notifications" className={styles['navlink5']}>
              <img
                alt="claritynotificationsolidasseticon178268"
                src="/playground_assets/claritynotificationsolidasseticon178268-qcvw.svg"
                className={styles['image05']}
              />
            </Link>
            <Link to="/notifications" className={styles['navlink6']}>
              <img
                alt="claritynotificationsolidasseticon178268"
                src="/playground_assets/claritynotificationsolidasseticon178268-qcvw.svg"
                className={styles['image06']}
              />
            </Link>
          </div>
          <img
            alt="uimcalender641074"
            src="/playground_assets/uimcalender641074-e3me.svg"
            className={styles['image07']}
          />
          <img
            alt="Ellipse17641094"
            src="/playground_assets/ellipse17641094-k82m.svg"
            className={styles['svg2']}
          />
        </div>
        <div className={styles['Arrow641104']}>
          <Link to="/homepage" className={styles['navlink7']}>
            <img
              alt="arrowleft641106"
              src="/playground_assets/arrowleft641106-tf5p.svg"
              className={styles['image08']}
            />
          </Link>
        </div>
        <button className={styles['NoEventFoundButton182186']}>
          <img
            alt="Rectangle38641126"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/aaa58194-9d9a-46e6-8336-312261f146b2?org_if_sml=1846"
            className={styles['image09']}
          />
          <span className={styles['text']}>
            <span className={styles['text1']}>NO EVENT FOUND</span>
          </span>
        </button>
        <Link to="/settings" className={styles['navlink8']}>
          <img
            alt="menu15241"
            src="/playground_assets/menu15241-kssc.svg"
            className={styles['image10']}
          />
        </Link>
        <img
          alt="Calendar1178388"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/e6e47356-971e-4ace-862d-4e7e0e67a6e5?org_if_sml=121420"
          className={styles['image11']}
        />
      </div>
    </div>
  )
}

export default Schedule
