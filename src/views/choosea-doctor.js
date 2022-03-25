import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './choosea-doctor.module.css'

const ChooseaDoctor = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Choose a Doctor - AgeingGracefully</title>
        <meta
          property="og:title"
          content="Choose a Doctor - AgeingGracefully"
        />
      </Helmet>
      <div className={styles['ChooseadoctorpageChooseadoctor15073']}>
        <div className={styles['Taskbar15074']}>
          <img
            alt="Rectangle3015075"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/bf370919-b8fd-4542-8b1c-961d8e022ce3?org_if_sml=1336"
            className={styles['image']}
          />
          <Link to="/profile22" className={styles['navlink']}>
            <img
              alt="profile15076"
              src="/playground_assets/profile15076-h3wk.svg"
              className={styles['image01']}
            />
          </Link>
          <Link to="/notifications" className={styles['navlink1']}>
            <img
              alt="notification15082"
              src="/playground_assets/notification15082-wmi.svg"
              className={styles['image02']}
            />
          </Link>
          <Link to="/homepage" className={styles['navlink2']}>
            <img
              alt="home15085"
              src="/playground_assets/home15085-1mt.svg"
              className={styles['image03']}
            />
          </Link>
          <Link to="/schedule" className={styles['navlink3']}>
            <img
              alt="Group7315087"
              src="/playground_assets/group7315087-1qn.svg"
              className={styles['image04']}
            />
          </Link>
        </div>
        <Link to="/settings" className={styles['navlink4']}>
          <img
            alt="menu15090"
            src="/playground_assets/menu15090-tyijt.svg"
            className={styles['image05']}
          />
        </Link>
        <Link to="/selectcategoryofappointment" className={styles['navlink5']}>
          <img
            alt="Vectoractiongoback15094"
            src="/playground_assets/vectoractiongoback15094-yl9q.svg"
            className={styles['svg']}
          />
        </Link>
        <div
          className={
            styles['Searchhereforcategorycomponentinputtextactionfilte']
          }
        >
          <div className={styles['Searchhereforcategory182197']}>
            <img
              alt="Rectangle57150105"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/5f99ff45-df0c-46ee-a0cf-8f2d4c3b4e03?org_if_sml=1670"
              className={styles['image06']}
            />
          </div>
          <img
            alt="Group82150106"
            src="/playground_assets/group82150106-9s.svg"
            className={styles['image07']}
          />
          <span className={styles['text']}>
            <span className={styles['text01']}>Search here for category</span>
          </span>
        </div>
        <span className={styles['text02']}>
          <span className={styles['text03']}>Choose a Doctor</span>
        </span>
        <div className={styles['Group47150111']}>
          <img
            alt="Rectangle40150112"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/aff0fa4d-ce4a-4231-b613-8d6d228076ad?org_if_sml=1995"
            className={styles['image08']}
          />
          <img
            alt="Ellipse26150113"
            src="/playground_assets/ellipse26150113-3pnu5c.svg"
            className={styles['svg1']}
          />
          <span className={styles['text04']}>
            <span className={styles['text05']}>Dr. David</span>
          </span>
          <img
            alt="d3removebgpreview150116"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/7e33b99e-e6a3-4da0-8d39-baf4681e59ae?org_if_sml=12424"
            className={styles['image09']}
          />
          <span className={styles['text06']}>
            <span className={styles['text07']}>
              <span>POC Hospital</span>
              <br></br>
              <span>2 clinics</span>
            </span>
          </span>
          <Link to="/appointment-details11" className={styles['navlink6']}>
            <img
              alt="Rectangle58150118"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/84ff1a40-d6ba-4569-86df-823c49fd466d?org_if_sml=1609"
              className={styles['image10']}
            />
          </Link>
          <Link to="/appointment-details11" className={styles['text11']}>
            <span className={styles['text12']}>Book an Appointment</span>
          </Link>
        </div>
        <div className={styles['Group83150120']}>
          <img
            alt="Rectangle40150121"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/ae5612eb-4296-444a-9c4a-54e778220878?org_if_sml=1995"
            className={styles['image11']}
          />
          <Link to="/appointment-details11" className={styles['navlink7']}>
            <img
              alt="Rectangle58150126"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/84ee276e-3acd-4931-a7aa-f12c5160fd3c?org_if_sml=1609"
              className={styles['image12']}
            />
          </Link>
          <Link to="/appointment-details11" className={styles['text13']}>
            <span className={styles['text14']}>Book an Appointment</span>
          </Link>
          <img
            alt="Ellipse27150136"
            src="/playground_assets/ellipse27150136-hzm.svg"
            className={styles['svg2']}
          />
          <span className={styles['text15']}>
            <span className={styles['text16']}>Dr. Monika</span>
          </span>
          <span className={styles['text17']}>
            <span className={styles['text18']}>
              <span>Lifeline Hospital</span>
              <br></br>
              <span>2 clinics</span>
            </span>
          </span>
          <img
            alt="d4removebgpreview150139"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/11de55b0-d91f-43f1-95a5-e871eebd6d35?org_if_sml=12776"
            className={styles['image13']}
          />
        </div>
        <div className={styles['Group84150128']}>
          <img
            alt="Rectangle40150129"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/1ff8957e-35d3-428f-9382-490b7cb7417a?org_if_sml=1995"
            className={styles['image14']}
          />
          <Link to="/appointment-details11" className={styles['navlink8']}>
            <img
              alt="Rectangle58150134"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/f5edc506-1b74-4708-9c60-9ccaeb785798?org_if_sml=1609"
              className={styles['image15']}
            />
          </Link>
          <Link to="/appointment-details11" className={styles['text22']}>
            <span className={styles['text23']}>Book an Appointment</span>
          </Link>
          <img
            alt="Ellipse27150140"
            src="/playground_assets/ellipse27150140-e83.svg"
            className={styles['svg3']}
          />
          <span className={styles['text24']}>
            <span className={styles['text25']}>Dr. Emily</span>
          </span>
          <span className={styles['text26']}>
            <span className={styles['text27']}>
              <span>UM Hospital</span>
              <br></br>
              <span>3 clinics</span>
              <br></br>
              <span></span>
            </span>
          </span>
          <img
            alt="d2removebgpreview150143"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/3dbf59b3-49a1-46a9-8d3e-ebee607ceb89?org_if_sml=12975"
            className={styles['image16']}
          />
        </div>
      </div>
    </div>
  )
}

export default ChooseaDoctor
