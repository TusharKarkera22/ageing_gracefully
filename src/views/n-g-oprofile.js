import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './n-g-oprofile.module.css'

const NGOprofile = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>NGO profile - AgeingGracefully</title>
        <meta property="og:title" content="NGO profile - AgeingGracefully" />
      </Helmet>
      <div className={styles['NgoProfilepageNgoProfile64632']}>
        <img
          alt="Vector2264633"
          src="/playground_assets/vector2264633-iin.svg"
          className={styles['svg']}
        />
        <div className={styles['ProfileBackgroundcomponentsvg17811']}>
          <img
            alt="Rectangle264963"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/a7396231-220e-4e34-8c81-a02f747fd6db?org_if_sml=16625"
            className={styles['image']}
          />
          <img
            alt="Ellipse564637"
            src="/playground_assets/ellipse564637-x6pv.svg"
            className={styles['svg1']}
          />
        </div>
        <img
          alt="NomadsAvatarcomponentinputimage64638"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/15921242-621e-4721-b4cf-d9694f11fa1c?org_if_sml=119611"
          className={styles['image01']}
        />
        <span className={styles['text']}>
          <span className={styles['text01']}>NGO XYZABC</span>
        </span>
        <span className={styles['text02']}>
          <span className={styles['text03']}>NGO CONTACT:- +91xxxxxxxx97</span>
        </span>
        <span className={styles['text04']}>
          <span className={styles['text05']}>
            NGO EMAIL ID:- XYZNGO@gmail.com
          </span>
        </span>
        <div className={styles['FUNDINGTRACKING182200']}>
          <Link to="/fund-tracking" className={styles['navlink']}>
            <img
              alt="Rectangle3264976"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/8a87bf7d-1c1d-402b-871d-bbb3f7772bc9?org_if_sml=13551"
              className={styles['image02']}
            />
          </Link>
          <Link to="/fund-tracking" className={styles['text06']}>
            <span className={styles['text07']}>FUND TRACKING</span>
          </Link>
        </div>
        <div className={styles['MANAGEADMIN182202']}>
          <img
            alt="MANAGEADMIN182201"
            src="/playground_assets/manageadmin182201-27c.svg"
            className={styles['image03']}
          />
          <span className={styles['text08']}>
            <span className={styles['text09']}>
              MANAGE ADMIN
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className={styles['Logoutactionlogoutfirebase17812']}>
          <Link to="/login" className={styles['navlink1']}>
            <img
              alt="Rectangle3464984"
              src="/playground_assets/rectangle3464984-959.svg"
              className={styles['svg2']}
            />
          </Link>
          <Link to="/login" className={styles['text10']}>
            <span className={styles['text11']}>LOGOUT</span>
          </Link>
        </div>
        <div className={styles['Arrowactiongoback2174008']}>
          <Link to="/homepage" className={styles['navlink2']}>
            <img
              alt="arrowleft641038"
              src="/playground_assets/arrowleft641038-3d97.svg"
              className={styles['image04']}
            />
          </Link>
        </div>
        <div className={styles['TaskbarmenutabsActiveProfile178254']}>
          <img
            alt="Rectangle5178255"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/47961d0e-7b57-41ef-af05-1b31acacf3a5?org_if_sml=11111"
            className={styles['image05']}
          />
          <Link to="/add-new-profile" className={styles['navlink3']}>
            <img
              alt="Ellipse17641167"
              src="/playground_assets/ellipse17641167-6zio.svg"
              className={styles['svg3']}
            />
          </Link>
          <img
            alt="Ellipse7641160"
            src="/playground_assets/ellipse7641160-ub1r.svg"
            className={styles['svg4']}
          />
          <Link to="/add-new-profile" className={styles['navlink4']}>
            <img
              alt="Ellipse17641167"
              src="/playground_assets/ellipse17641167-6zio.svg"
              className={styles['svg5']}
            />
          </Link>
          <Link to="/add-new-profile" className={styles['navlink5']}>
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
          <div className={styles['healthiconsuiuserprofileasseticon178261']}>
            <img
              alt="Group178262"
              src="/playground_assets/group178262-j2tn.svg"
              className={styles['image06']}
            />
            <img
              alt="Ellipse17178260"
              src="/playground_assets/ellipse17178260-oege.svg"
              className={styles['svg6']}
            />
          </div>
          <Link to="/notifications" className={styles['navlink6']}>
            <img
              alt="claritynotificationsolidasseticon178268"
              src="/playground_assets/claritynotificationsolidasseticon178268-qcvw.svg"
              className={styles['image07']}
            />
          </Link>
          <div className={styles['heroiconssolidhomeasseticon178271']}>
            <Link to="/homepage" className={styles['navlink7']}>
              <img
                alt="Group178272"
                src="/playground_assets/group178272-npgj.svg"
                className={styles['image08']}
              />
            </Link>
          </div>
          <Link to="/schedule" className={styles['navlink8']}>
            <img
              alt="uimcalenderasseticon178274"
              src="/playground_assets/uimcalenderasseticon178274-cuoo.svg"
              className={styles['image09']}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NGOprofile
