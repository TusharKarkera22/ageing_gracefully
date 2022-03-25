import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './health-track.module.css'

const HealthTrack = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Health Track - AgeingGracefully</title>
        <meta property="og:title" content="Health Track - AgeingGracefully" />
      </Helmet>
      <div className={styles['HealthtrackpageHealthtrack822']}>
        <img
          alt="Rectangle508464"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/08c09754-0613-4c57-9d7e-7344181d09d4?org_if_sml=146137"
          className={styles['image']}
        />
        <div className={styles['Taskbar823']}>
          <img
            alt="Rectangle30824"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/98641d05-8c39-4e23-8368-8b007973cdaf?org_if_sml=1555"
            className={styles['image01']}
          />
          <div className={styles['healthiconsuiuserprofile825']}>
            <Link to="/profile22" className={styles['navlink']}>
              <img
                alt="Group826"
                src="/playground_assets/group826-ohcki.svg"
                className={styles['image02']}
              />
            </Link>
          </div>
          <Link to="/notifications" className={styles['navlink1']}>
            <img
              alt="claritynotificationsolid8212"
              src="/playground_assets/claritynotificationsolid8212-ye5l.svg"
              className={styles['image03']}
            />
          </Link>
          <div className={styles['heroiconssolidhome8215']}>
            <Link to="/homepage" className={styles['navlink2']}>
              <img
                alt="Group8216"
                src="/playground_assets/group8216-2z2.svg"
                className={styles['image04']}
              />
            </Link>
          </div>
          <Link to="/schedule" className={styles['navlink3']}>
            <img
              alt="uimcalender8218"
              src="/playground_assets/uimcalender8218-47f.svg"
              className={styles['image05']}
            />
          </Link>
        </div>
        <span className={styles['text']}>
          <span className={styles['text01']}>HEALTH RECORDS</span>
        </span>
        <div className={styles['Group488442']}>
          <img
            alt="Rectangle418440"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/d8077afe-01b7-4832-beaf-9962e4738525?org_if_sml=12226"
            className={styles['image06']}
          />
          <span className={styles['text02']}>
            <span className={styles['text03']}>WEEKLY</span>
          </span>
        </div>
        <div className={styles['Group498443']}>
          <img
            alt="Rectangle418444"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/3f2210df-dd74-40ff-b023-7899395cd702?org_if_sml=12053"
            className={styles['image07']}
          />
          <span className={styles['text04']}>
            <span className={styles['text05']}>MONTHLY</span>
          </span>
        </div>
        <img
          alt="Rectangle448458"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/0bd3a9fe-c8c1-4439-b264-2a5ca79a321b?org_if_sml=11699"
          className={styles['image08']}
        />
        <div className={styles['Group348446']}>
          <span className={styles['text06']}>
            <span className={styles['text07']}>
              MON TUE WED THUR FRI SAT SUN
            </span>
          </span>
          <span className={styles['text08']}>
            <span className={styles['text09']}>27</span>
          </span>
          <span className={styles['text10']}>
            <span className={styles['text11']}>25</span>
          </span>
          <span className={styles['text12']}>
            <span className={styles['text13']}>29</span>
          </span>
          <span className={styles['text14']}>
            <span className={styles['text15']}>30</span>
          </span>
          <span className={styles['text16']}>
            <span className={styles['text17']}>31</span>
          </span>
          <span className={styles['text18']}>
            <span className={styles['text19']}>26</span>
          </span>
          <span className={styles['text20']}>
            <span className={styles['text21']}>28</span>
          </span>
        </div>
        <img
          alt="Rectangle458459"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/0a49e0a2-0207-4095-93ca-ab61ef8323a0?org_if_sml=11054"
          className={styles['image09']}
        />
        <img
          alt="Rectangle52884"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/110444fb-2ce5-433a-8ae1-74a02deb506f?org_if_sml=11054"
          className={styles['image10']}
        />
        <img
          alt="Rectangle53885"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/ae3314c7-f7f7-4dd1-9d18-38a4e197267d?org_if_sml=11054"
          className={styles['image11']}
        />
        <div className={styles['Group618814']}>
          <span className={styles['text22']}>
            <span className={styles['text23']}>Pulse</span>
          </span>
          <span className={styles['text24']}>
            <span className={styles['text25']}>
              today cariation : 56-142bpm
            </span>
          </span>
          <span className={styles['text26']}>
            <span className={styles['text27']}>Normal</span>
          </span>
          <span className={styles['text28']}>
            <span className={styles['text29']}>90 bpm</span>
          </span>
          <div className={styles['Group608813']}>
            <img
              alt="Rectangle548812"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/ede000e3-3dc5-4f19-8afc-e2b7d7065b83?org_if_sml=1335"
              className={styles['image12']}
            />
            <img
              alt="Vector8811"
              src="/playground_assets/vector8811-bn3o.svg"
              className={styles['svg']}
            />
          </div>
        </div>
        <img
          alt="Rectangle51883"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/f3183ca6-ca8e-4a48-85cd-928542cf4b48?org_if_sml=11054"
          className={styles['image13']}
        />
        <div className={styles['Group628815']}>
          <span className={styles['text30']}>
            <span className={styles['text31']}>Currnt Hydration</span>
          </span>
          <span className={styles['text32']}>
            <span className={styles['text33']}>Normal</span>
          </span>
          <div className={styles['Group608819']}>
            <img
              alt="Rectangle548820"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/5141f5be-211e-4302-9b3f-99cfbbace7d9?org_if_sml=1335"
              className={styles['image14']}
            />
            <img
              alt="Vector8823"
              src="/playground_assets/vector8823-wqi.svg"
              className={styles['svg1']}
            />
          </div>
          <div className={styles['Group618840']}>
            <img
              alt="Rectangle548841"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/f02ed6c1-2819-4da0-900c-8a4a7c126282?org_if_sml=1335"
              className={styles['image15']}
            />
            <img
              alt="Vector8842"
              src="/playground_assets/vector8842-3plp.svg"
              className={styles['svg2']}
            />
          </div>
        </div>
        <div className={styles['Group638824']}>
          <span className={styles['text34']}>
            <span className={styles['text35']}>Sugar Level</span>
          </span>
          <span className={styles['text36']}>
            <span className={styles['text37']}>99 mg/dL</span>
          </span>
          <div className={styles['Group608827']}>
            <img
              alt="Rectangle548828"
              src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/39923342-5377-41e4-b3a6-819f451808fc?org_if_sml=1335"
              className={styles['image16']}
            />
            <img
              alt="Vector8833"
              src="/playground_assets/vector8833-xtxc.svg"
              className={styles['svg3']}
            />
          </div>
        </div>
        <div className={styles['Group648834']}>
          <span className={styles['text38']}>
            <span className={styles['text39']}>Blood Level</span>
          </span>
          <span className={styles['text40']}>
            <span className={styles['text41']}>120 msec</span>
          </span>
        </div>
        <Link to="/profile2" className={styles['navlink4']}>
          <img
            alt="Vectoractiongoback12122"
            src="/playground_assets/vectoractiongoback12122-3cif.svg"
            className={styles['svg4']}
          />
        </Link>
        <img
          alt="Ellipse7641160"
          src="/playground_assets/ellipse7641160-ub1r.svg"
          className={styles['svg5']}
        />
        <Link to="/add-new-profile" className={styles['navlink5']}>
          <img
            alt="Ellipse17641167"
            src="/playground_assets/ellipse17641167-6zio.svg"
            className={styles['svg6']}
          />
        </Link>
        <Link to="/add-new-profile" className={styles['navlink6']}>
          <svg viewBox="0 0 804.5714285714286 1024" className={styles['icon']}>
            <path
              d="M804.571 420.571v109.714c0 30.286-24.571 54.857-54.857 54.857h-237.714v237.714c0 30.286-24.571 54.857-54.857 54.857h-109.714c-30.286 0-54.857-24.571-54.857-54.857v-237.714h-237.714c-30.286 0-54.857-24.571-54.857-54.857v-109.714c0-30.286 24.571-54.857 54.857-54.857h237.714v-237.714c0-30.286 24.571-54.857 54.857-54.857h109.714c30.286 0 54.857 24.571 54.857 54.857v237.714h237.714c30.286 0 54.857 24.571 54.857 54.857z"
              className={styles['icon1']}
            ></path>
          </svg>
        </Link>
      </div>
      <Link to="/add-new-profile" className={styles['navlink7']}>
        <img
          alt="Ellipse17641167"
          src="/playground_assets/ellipse17641167-6zio.svg"
          className={styles['svg7']}
        />
      </Link>
      <Link to="/add-new-profile" className={styles['navlink8']}>
        <img
          alt="Ellipse17641167"
          src="/playground_assets/ellipse17641167-6zio.svg"
          className={styles['svg8']}
        />
      </Link>
    </div>
  )
}

export default HealthTrack
