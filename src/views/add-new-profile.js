import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import projectStyles from '../style.module.css'
import styles from './add-new-profile.module.css'

const AddNewProfile = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Add New Profile - AgeingGracefully</title>
        <meta
          property="og:title"
          content="Add New Profile - AgeingGracefully"
        />
      </Helmet>
      <div className={styles['AddNewProfilepageAddNewProfile641131']}>
        <img
          alt="Newprofilebg1178379"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/00d066dd-ffe0-4de9-97ac-985b776a59c5?org_if_sml=142746"
          className={styles['image']}
        />
        <Link
          to="/homepage"
          className={` ${styles['navlink']} ${projectStyles['button']} `}
        >
          <span className={styles['text']}>
            <span>ADD PROFILE</span>
            <span className={styles['text02']}></span>
          </span>
        </Link>
        <div className={styles['Property1Default178351']}>
          <img
            alt="Rectangle5641134"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/a2337cd4-a16f-4b3c-8d97-fdc006e941e5?org_if_sml=1611"
            className={styles['image1']}
          />
          <div className={styles['healthiconsuiuserprofile641135']}>
            <Link to="/profile22" className={styles['navlink1']}>
              <img
                alt="Group641136"
                src="/playground_assets/group641136-ogo.svg"
                className={styles['image2']}
              />
            </Link>
          </div>
          <div className={styles['heroiconssolidhome641145']}>
            <Link to="/homepage" className={styles['navlink2']}>
              <img
                alt="Group641146"
                src="/playground_assets/group641146-lo6r.svg"
                className={styles['image3']}
              />
            </Link>
          </div>
          <Link to="/notifications" className={styles['navlink3']}>
            <img
              alt="notification15082"
              src="/playground_assets/notification15082-wmi.svg"
              className={styles['image4']}
            />
          </Link>
          <Link to="/schedule" className={styles['navlink4']}>
            <img
              alt="uimcalender641148"
              src="/playground_assets/uimcalender641148-qksu.svg"
              className={styles['image5']}
            />
          </Link>
          <img
            alt="Ellipse7641160"
            src="/playground_assets/ellipse7641160-ub1r.svg"
            className={styles['svg']}
          />
          <div className={styles['container1']}>
            <Link to="/add-new-profile" className={styles['navlink5']}>
              <img
                alt="Ellipse17641167"
                src="/playground_assets/ellipse17641167-6zio.svg"
                className={styles['svg01']}
              />
            </Link>
            <Link to="/add-new-profile" className={styles['navlink6']}>
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
          <img
            alt="Line6641161"
            src="/playground_assets/line6641161-j5fm.svg"
            className={styles['svg02']}
          />
          <img
            alt="Line7641162"
            src="/playground_assets/line7641162-hpob.svg"
            className={styles['svg03']}
          />
        </div>
        <img
          alt="Ellipse9641186"
          src="/playground_assets/ellipse9641186-jiw4.svg"
          className={styles['svg04']}
        />
        <div
          className={
            styles['openmojioldmanmediumskintonecomponentinputimage641']
          }
        >
          <img
            alt="Vector641188"
            src="/playground_assets/vector641188-inv.svg"
            className={styles['svg05']}
          />
          <img
            alt="Vector641189"
            src="/playground_assets/vector641189-8o8c.svg"
            className={styles['svg06']}
          />
          <img
            alt="Vector641190"
            src="/playground_assets/vector641190-bei.svg"
            className={styles['svg07']}
          />
          <img
            alt="Group641191"
            src="/playground_assets/group641191-x3ob.svg"
            className={styles['image6']}
          />
          <img
            alt="Group641193"
            src="/playground_assets/group641193-kc0h.svg"
            className={styles['image7']}
          />
        </div>
        <div className={styles['Arrow641168']}>
          <Link to="/homepage" className={styles['navlink7']}>
            <img
              alt="arrowleft641170"
              src="/playground_assets/arrowleft641170-2fs.svg"
              className={styles['image8']}
            />
          </Link>
        </div>
        <span className={styles['text03']}>
          <span className={styles['text04']}>Personal Details</span>
        </span>
        <img
          alt="Line18812"
          src="/playground_assets/line18812-e9oq.svg"
          className={styles['svg08']}
        />
        <span className={styles['text05']}>
          <span className={styles['text06']}> Health Details</span>
        </span>
        <img
          alt="Line258115"
          src="/playground_assets/line258115-qze.svg"
          className={styles['svg09']}
        />
      </div>
      <button className={` ${styles['button']} ${projectStyles['button']} `}>
        <span className={styles['text07']}>
          <span className={styles['text08']}>Add Health Track</span>
        </span>
      </button>
      <Link
        to="/homepage"
        className={` ${styles['navlink8']} ${projectStyles['button']} `}
      >
        <span className={styles['text09']}>
          <span>ADD PROFILE</span>
          <span className={styles['text11']}></span>
        </span>
      </Link>
      <button className={` ${styles['button1']} ${projectStyles['button']} `}>
        <span className={styles['text12']}>Add Medical Records</span>
      </button>
      <input
        type="text"
        placeholder="Enter DOB"
        className={` ${styles['textinput']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Enter Full Name"
        className={` ${styles['Enter-Full-Name']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Enter Gender"
        className={` ${styles['textinput1']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Enter Age"
        className={` ${styles['textinput2']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Enter Height"
        className={` ${styles['textinput3']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Enter Weight"
        className={` ${styles['textinput4']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Enter Address"
        className={` ${styles['textinput5']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Any Physical Disability"
        className={` ${styles['textinput6']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Previous Dieases Diagnosed with"
        className={` ${styles['textinput7']} ${projectStyles['input']} `}
      />
      <input
        type="text"
        placeholder="Current Dieases Diagnosed with"
        className={` ${styles['textinput8']} ${projectStyles['input']} `}
      />
      <svg
        viewBox="0 0 804.5714285714286 1024"
        className={styles['icon2']}
      ></svg>
    </div>
  )
}

export default AddNewProfile
