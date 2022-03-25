import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './medical-records.module.css'

const MedicalRecords = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Medical Records - AgeingGracefully</title>
        <meta
          property="og:title"
          content="Medical Records - AgeingGracefully"
        />
      </Helmet>
      <Link to="/add-new-profile" className={styles['navlink']}>
        <img
          alt="Ellipse17641167"
          src="/playground_assets/ellipse17641167-6zio.svg"
          className={styles['svg']}
        />
      </Link>
      <div className={styles['MedicalrecordspageMedicalrecords57151']}>
        <div className={styles['Group2557270']}>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/1228823b-14da-44c6-ab1a-ab88df731cd6?org_if_sml=134714"
            alt="Rectangle1657152"
            className={styles['image']}
          />
          <span className={styles['text']}>
            <span className={styles['text1']}>MEDICAL RECORDS</span>
          </span>
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/47e5d385-56c9-4136-9809-6b00fec751fc?org_if_sml=1317"
            alt="Rectangle1757153"
            className={styles['image01']}
          />
        </div>
        <div className={styles['Group2957351']}>
          <img
            src="/playground_assets/claritynotificationsolid57341-nulh.svg"
            alt="claritynotificationsolid57341"
            className={styles['image02']}
          />
          <div className={styles['healthiconsuiuserprofile57344']}>
            <img
              src="/playground_assets/group57345-aaj.svg"
              alt="Group57345"
              className={styles['image03']}
            />
          </div>
          <img
            src="/playground_assets/uimcalender57338-9pgm.svg"
            alt="uimcalender57338"
            className={styles['image04']}
          />
          <div className={styles['heroiconssolidhome57335']}>
            <img
              src="/playground_assets/group57336-8bal.svg"
              alt="Group57336"
              className={styles['image05']}
            />
          </div>
        </div>
        <Link to="/profile2" className={styles['navlink1']}>
          <img
            alt="Vectoractiongoback59621"
            src="/playground_assets/vectoractiongoback59621-tfc.svg"
            className={styles['svg1']}
          />
        </Link>
        <div className={styles['Taskbar6624']}>
          <div className={styles['healthiconsuiuserprofile59598']}>
            <Link to="/profile22" className={styles['navlink2']}>
              <img
                src="/playground_assets/group59599-ubgm.svg"
                alt="Group59599"
                className={styles['image06']}
              />
            </Link>
          </div>
          <Link to="/notifications" className={styles['navlink3']}>
            <img
              src="/playground_assets/claritynotificationsolid59605-f8vi.svg"
              alt="claritynotificationsolid59605"
              className={styles['image07']}
            />
          </Link>
          <div className={styles['heroiconssolidhome59608']}>
            <Link to="/homepage" className={styles['navlink4']}>
              <img
                src="/playground_assets/group59609-fy9qt.svg"
                alt="Group59609"
                className={styles['image08']}
              />
            </Link>
          </div>
          <Link to="/schedule" className={styles['navlink5']}>
            <img
              src="/playground_assets/uimcalender59611-lmuk.svg"
              alt="uimcalender59611"
              className={styles['image09']}
            />
          </Link>
        </div>
        <img
          alt="Ellipse15665"
          src="/playground_assets/ellipse15665-jwcl.svg"
          className={styles['svg2']}
        />
        <div className={styles['Medicslprofile182205']}>
          <span className={styles['text2']}>
            <span className={styles['text3']}>HSDAG JDSJB</span>
          </span>
          <img
            src="/playground_assets/user667-l4xp.svg"
            alt="user667"
            className={styles['image10']}
          />
        </div>
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/013ad72f-6bc4-4224-9f1e-6b9141a9df63?org_if_sml=111517"
          alt="Group24117959"
          className={styles['image11']}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/8b40ad7d-71ef-4b3f-9bdd-bed68fc97616?org_if_sml=17847"
          alt="Group26117960"
          className={styles['image12']}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/7865ac50-6eba-408b-9422-4f478e100ca7?org_if_sml=17757"
          alt="Group27117961"
          className={styles['image13']}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/9889ec47-533c-4435-bc21-afa83e8e7b34?org_if_sml=17788"
          alt="Group28117962"
          className={styles['image14']}
        />
        <img
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/c75c2903-8bff-407f-8e94-7633d8213b57?org_if_sml=15904"
          alt="Group12012909"
          className={styles['image15']}
        />
      </div>
    </div>
  )
}

export default MedicalRecords
