import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './appointment.module.css'

const Appointment = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Appointment - AgeingGracefully</title>
        <meta property="og:title" content="Appointment - AgeingGracefully" />
      </Helmet>
      <div className={styles['AppointmentpageAppointment5697']}>
        <span className={styles['text']}>
          <span className={styles['text01']}>Upcoming Schedule....</span>
        </span>
        <div className={styles['Group1356104']}>
          <img
            alt="Rectangle1256105"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/cffa5614-4006-4f9c-acb8-66e8b80a9fb1?org_if_sml=1887"
            className={styles['image']}
          />
          <div className={styles['Group1256106']}>
            <span className={styles['text02']}>
              <span className={styles['text03']}>Meeting with Adele</span>
            </span>
            <span className={styles['text04']}>
              <span className={styles['text05']}>05 feb : 1.30 pm</span>
            </span>
            <span className={styles['text06']}>
              <span className={styles['text07']}>Regular</span>
            </span>
          </div>
          <span className={styles['text08']}>
            <span className={styles['text09']}>#confirmed</span>
          </span>
          <img
            alt="Line156111"
            src="/playground_assets/line156111-gxe.svg"
            className={styles['svg']}
          />
        </div>
        <div className={styles['Group1556112']}>
          <img
            alt="Rectangle1256113"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/322a601b-2c6c-4303-909b-e1e11ccbd3b0?org_if_sml=1887"
            className={styles['image01']}
          />
          <div className={styles['Group1256114']}>
            <span className={styles['text10']}>
              <span className={styles['text11']}>Meeting with Adele</span>
            </span>
            <span className={styles['text12']}>
              <span className={styles['text13']}>05 feb : 1.30 pm</span>
            </span>
            <span className={styles['text14']}>
              <span className={styles['text15']}>Regular</span>
            </span>
          </div>
          <span className={styles['text16']}>
            <span className={styles['text17']}>#confirmed</span>
          </span>
          <img
            alt="Line156119"
            src="/playground_assets/line156119-zjh4.svg"
            className={styles['svg1']}
          />
        </div>
        <div className={styles['Group1456120']}>
          <img
            alt="Rectangle1256121"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/962854bd-6c0e-4d24-a56b-97753babaa2e?org_if_sml=1887"
            className={styles['image02']}
          />
          <div className={styles['Group1256122']}>
            <span className={styles['text18']}>
              <span className={styles['text19']}>
                Meeting with Dr. Anh Shah
              </span>
            </span>
            <span className={styles['text20']}>
              <span className={styles['text21']}>18 Feb : 10.30 am</span>
            </span>
            <span className={styles['text22']}>
              <span className={styles['text23']}>Surgery</span>
            </span>
          </div>
          <span className={styles['text24']}>
            <span className={styles['text25']}>#pending</span>
          </span>
          <img
            alt="Line156127"
            src="/playground_assets/line156127-2ag.svg"
            className={styles['svg2']}
          />
        </div>
        <div className={styles['Group1656128']}>
          <img
            alt="Rectangle1256129"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/c892713a-df20-4945-a6eb-b9ee736098b4?org_if_sml=1887"
            className={styles['image03']}
          />
          <span className={styles['text26']}>
            <span className={styles['text27']}>#pending</span>
          </span>
          <div className={styles['Group1256131']}>
            <span className={styles['text28']}>
              <span className={styles['text29']}>Meeting with Adele</span>
            </span>
            <span className={styles['text30']}>
              <span className={styles['text31']}>24 March : 12.30 pm</span>
            </span>
            <span className={styles['text32']}>
              <span className={styles['text33']}>Physiotherapy</span>
            </span>
          </div>
          <img
            alt="Line156135"
            src="/playground_assets/line156135-3wjx.svg"
            className={styles['svg3']}
          />
        </div>
        <div className={styles['Taskbar8843']}>
          <img
            alt="Rectangle308844"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/0f8b7763-b3f8-452a-97e4-d54051701dc3?org_if_sml=1575"
            className={styles['image04']}
          />
          <div className={styles['healthiconsuiuserprofile8845']}>
            <Link to="/profile22" className={styles['navlink']}>
              <img
                alt="Group8846"
                src="/playground_assets/group8846-1nbj.svg"
                className={styles['image05']}
              />
            </Link>
          </div>
          <Link to="/notifications" className={styles['navlink1']}>
            <img
              alt="claritynotificationsolid8852"
              src="/playground_assets/claritynotificationsolid8852-a84t.svg"
              className={styles['image06']}
            />
          </Link>
          <div className={styles['heroiconssolidhome8855']}>
            <Link to="/homepage" className={styles['navlink2']}>
              <img
                alt="Group8856"
                src="/playground_assets/group8856-fpy.svg"
                className={styles['image07']}
              />
            </Link>
          </div>
          <Link to="/schedule" className={styles['navlink3']}>
            <img
              alt="uimcalender8858"
              src="/playground_assets/uimcalender8858-p7fh.svg"
              className={styles['image08']}
            />
          </Link>
        </div>
        <img
          alt="profilebg1117957"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/f81e2120-e433-4a38-93d5-e1f490f3ea72?org_if_sml=157299"
          className={styles['image09']}
        />
        <span className={styles['text34']}>
          <span className={styles['text35']}>
            <span>Your Next Schedule Within</span>
            <br></br>
            <span></span>
          </span>
          <span className={styles['text39']}>5</span>
          <span className={styles['text40']}>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text41']}>
            hrs
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className={styles['text42']}>30</span>
          <span className={styles['text43']}> min</span>
        </span>
        <Link to="/profile2" className={styles['navlink4']}>
          <img
            alt="Vectoractiongoback56146"
            src="/playground_assets/vectoractiongoback56146-xeqw.svg"
            className={styles['svg4']}
          />
        </Link>
        <Link to="/settings" className={styles['navlink5']}>
          <img
            alt="menu56138"
            src="/playground_assets/menu56138-5gpn.svg"
            className={styles['image10']}
          />
        </Link>
      </div>
      <Link
        to="/selectcategoryofappointment"
        className={` ${styles['Button']} ${projectStyles['button']} `}
      >
        BOOK AN APPOINTMENT
      </Link>
    </div>
  )
}

export default Appointment
