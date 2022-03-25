import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './candidateprofile.module.css'

const Candidateprofile = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Candidate profile - AgeingGracefully</title>
        <meta
          property="og:title"
          content="Candidate profile - AgeingGracefully"
        />
      </Helmet>
      <div className={styles['ProfilepageProfile5650']}>
        <img
          alt="profilebg117952"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/04a9aa20-e37f-43db-9ff2-7292ff2b8093?org_if_sml=18347"
          className={styles['image']}
        />
        <div className={styles['Group85653']}>
          <div className={styles['Group65654']}>
            <div className={styles['Group128865']}>
              <Link to="/add-new-profile" className={styles['navlink']}>
                <img
                  alt="Rectangle78866"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/8c9692a4-b95c-4cb1-ae01-dd2bd01fade7?org_if_sml=12766"
                  className={styles['image01']}
                />
              </Link>
              <Link to="/add-new-profile" className={styles['text']}>
                <span className={styles['text01']}>Manage Profile</span>
              </Link>
            </div>
            <div className={styles['Group138868']}>
              <img
                alt="Rectangle78869"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/48aec639-306b-4587-89c0-904ae99dcd31?org_if_sml=12766"
                className={styles['image02']}
              />
              <span className={styles['text02']}>
                <span className={styles['text03']}>Delete Profile</span>
              </span>
            </div>
            <div className={styles['records5661']}>
              <img
                alt="Rectangle65662"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/c190542a-d597-4e20-a407-b47538e5954e?org_if_sml=1746"
                className={styles['image03']}
              />
              <Link to="/medical-records" className={styles['navlink01']}>
                <img
                  alt="recordsremovebgpreview15663"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/b2a97449-96e6-4753-9c2b-d7f8eac3a0e1?org_if_sml=18232"
                  className={styles['image04']}
                />
              </Link>
              <span className={styles['text04']}>
                <span className={styles['text05']}>Records</span>
              </span>
            </div>
            <div className={styles['Appointments5665']}>
              <Link to="/appointment" className={styles['navlink02']}>
                <img
                  alt="Rectangle55666"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/3eff2776-0594-4ea5-8665-b7d357f71bca?org_if_sml=1746"
                  className={styles['image05']}
                />
              </Link>
              <span className={styles['text06']}>
                <span className={styles['text07']}>Appoinments</span>
              </span>
              <Link to="/appointment" className={styles['navlink03']}>
                <img
                  alt="medicalappointmentremovebgpreview15668"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/50671406-2560-4657-8e3b-d6838095ecab?org_if_sml=113367"
                  className={styles['image06']}
                />
              </Link>
            </div>
            <div className={styles['HealthTrack5669']}>
              <Link to="/health-track" className={styles['navlink04']}>
                <img
                  alt="Rectangle55670"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/9ccfcbe5-aaee-4200-8687-7fa3fb4e3c01?org_if_sml=1746"
                  className={styles['image07']}
                />
              </Link>
              <span className={styles['text08']}>
                <span className={styles['text09']}>Health Track</span>
              </span>
              <Link to="/health-track" className={styles['navlink05']}>
                <img
                  alt="healthlogoremovebgpreview15672"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/f8719bf1-58fa-4ec7-a3c1-e5f49c48c9f1?org_if_sml=15190"
                  className={styles['image08']}
                />
              </Link>
            </div>
            <div className={styles['MedConsult5673']}>
              <Link
                to="/med-consultchatwithdoctors"
                className={styles['navlink06']}
              >
                <img
                  alt="Rectangle55674"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/9cd25411-9a24-4bc8-85dd-51292f09021d?org_if_sml=1746"
                  className={styles['image09']}
                />
              </Link>
              <span className={styles['text10']}>
                <span className={styles['text11']}>Med Consult</span>
              </span>
              <Link
                to="/med-consultchatwithdoctors"
                className={styles['navlink07']}
              >
                <img
                  alt="medconsultremovebgpreview15676"
                  src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/dff6202b-f754-4a42-8f06-075f9f8dd2b7?org_if_sml=17823"
                  className={styles['image10']}
                />
              </Link>
            </div>
          </div>
          <div className={styles['Group35677']}>
            <div className={styles['Group15678']}>
              <img
                alt="Ellipse15679"
                src="/playground_assets/ellipse15679-i247.svg"
                className={styles['svg']}
              />
              <img
                alt="avtarremovebgpreview15680"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/3232880a-5fa7-4b90-a0cb-49f03b6acff4?org_if_sml=19390"
                className={styles['image11']}
              />
            </div>
          </div>
          <div className={styles['Arrowactiongoback5686']}>
            <Link to="/homepage" className={styles['navlink08']}>
              <img
                alt="arrowleft5688"
                src="/playground_assets/arrowleft5688-2kt9.svg"
                className={styles['image12']}
              />
            </Link>
          </div>
        </div>
        <Link to="/settings" className={styles['navlink09']}>
          <img
            alt="menu5693"
            src="/playground_assets/menu5693-1iif.svg"
            className={styles['image13']}
          />
        </Link>
        <div className={styles['taskbar8871']}>
          <img
            alt="Rectangle308872"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/f3b75193-6c53-4603-be7c-504897e4a92a?org_if_sml=1572"
            className={styles['image14']}
          />
          <img
            alt="Ellipse7641160"
            src="/playground_assets/ellipse7641160-ub1r.svg"
            className={styles['svg1']}
          />
          <Link to="/add-new-profile" className={styles['navlink10']}>
            <img
              alt="Ellipse17641167"
              src="/playground_assets/ellipse17641167-6zio.svg"
              className={styles['svg2']}
            />
          </Link>
          <Link to="/add-new-profile" className={styles['navlink11']}>
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
          <div className={styles['ngoprofile8873']}>
            <Link to="/profile22" className={styles['navlink12']}>
              <img
                alt="Group8874"
                src="/playground_assets/group8874-hi2h.svg"
                className={styles['image15']}
              />
            </Link>
          </div>
          <Link to="/notifications" className={styles['navlink13']}>
            <img
              alt="claritynotificationsolid8880"
              src="/playground_assets/claritynotificationsolid8880-mgj.svg"
              className={styles['image16']}
            />
          </Link>
          <Link to="/homepage" className={styles['navlink14']}>
            <div className={styles['heroiconssolidhome8883']}>
              <img
                alt="Group8884"
                src="/playground_assets/group8884-9nm.svg"
                className={styles['image17']}
              />
            </div>
          </Link>
          <Link to="/schedule" className={styles['navlink15']}>
            <img
              alt="uimcalender8886"
              src="/playground_assets/uimcalender8886-ech9.svg"
              className={styles['image18']}
            />
          </Link>
          <Link to="/add-new-profile" className={styles['navlink16']}>
            <div className={styles['Group10015219']}></div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Candidateprofile
