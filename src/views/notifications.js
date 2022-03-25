import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import styles from './notifications.module.css'

const Notifications = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Notifications - AgeingGracefully</title>
        <meta property="og:title" content="Notifications - AgeingGracefully" />
      </Helmet>
      <div className={styles['NotificationspageNotification1423']}>
        <span className={styles['text']}>
          <span className={styles['text01']}>Notification</span>
        </span>
        <span className={styles['text02']}>
          <span className={styles['text03']}>
            You have 5 unread notifications
          </span>
        </span>
        <Link to="/settings" className={styles['navlink']}>
          <img
            alt="menu14437"
            src="/playground_assets/menu14437-ldor.svg"
            className={styles['image']}
          />
        </Link>
        <Link to="/homepage" className={styles['navlink1']}>
          <img
            alt="Vectoractiongoback14445"
            src="/playground_assets/vectoractiongoback14445-nhn.svg"
            className={styles['svg']}
          />
        </Link>
        <div className={styles['Group4214447']}>
          <img
            alt="Rectangle3514448"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/005b5bfa-7819-4730-a0d3-c806c99f06d0?org_if_sml=1788"
            className={styles['image01']}
          />
          <div className={styles['Group3714449']}>
            <span className={styles['text04']}>
              <span className={styles['text05']}>
                Appointment Successfully Booked!
              </span>
            </span>
            <img
              alt="Group3614451"
              src="/playground_assets/group3614451-owrn.svg"
              className={styles['image02']}
            />
          </div>
          <span className={styles['text06']}>
            <span className={styles['text07']}>
              Dr. David / eye appointment
            </span>
          </span>
          <span className={styles['text08']}>
            <span className={styles['text09']}>Gemini Lab, Mumbai</span>
          </span>
          <span className={styles['text10']}>
            <span className={styles['text11']}>2 min ago</span>
          </span>
        </div>
        <div className={styles['Group66144146']}>
          <img
            alt="Rectangle35144147"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/4dc17b65-13ed-4267-aa08-3d00a98437df?org_if_sml=1788"
            className={styles['image03']}
          />
          <div className={styles['Group37144148']}>
            <span className={styles['text12']}>
              <span className={styles['text13']}>
                Your Next Appointment is in 12 hrs.
              </span>
            </span>
            <img
              alt="clock14461"
              src="/playground_assets/clock14461-byj7l.svg"
              className={styles['image04']}
            />
          </div>
          <span className={styles['text14']}>
            <span className={styles['text15']}>Dr. Emily / Regular</span>
          </span>
          <span className={styles['text16']}>
            <span className={styles['text17']}>ROC Hospital, Mumbai</span>
          </span>
          <span className={styles['text18']}>
            <span className={styles['text19']}>3 hrs ago</span>
          </span>
        </div>
        <div className={styles['Group67144156']}>
          <img
            alt="Rectangle35144157"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/3b581a8e-1531-4fac-a137-85ef73857650?org_if_sml=1788"
            className={styles['image05']}
          />
          <div className={styles['Group37144158']}>
            <span className={styles['text20']}>
              <span className={styles['text21']}>
                Dr. Monika sent you a message!
              </span>
            </span>
            <img
              alt="Vector14457"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className={styles['svg1']}
            />
          </div>
          <span className={styles['text22']}>
            <span className={styles['text23']}>Get well soon!</span>
          </span>
          <span className={styles['text24']}>
            <span className={styles['text25']}>4 hrs ago</span>
          </span>
        </div>
        <div className={styles['Group68144166']}>
          <img
            alt="Rectangle35144167"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/e661d671-f904-4876-8fa8-e91185236696?org_if_sml=1788"
            className={styles['image06']}
          />
          <div className={styles['Group37144168']}>
            <span className={styles['text26']}>
              <span className={styles['text27']}>
                Your Report is updated Successfully
              </span>
            </span>
            <img
              alt="Vector144223"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className={styles['svg2']}
            />
            <img
              alt="Vector144222"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className={styles['svg3']}
            />
          </div>
          <img
            alt="Vector144220"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className={styles['svg4']}
          />
          <span className={styles['text28']}>
            <span className={styles['text29']}>HEARTReaports.pdf</span>
          </span>
          <span className={styles['text30']}>
            <span className={styles['text31']}>Tulip lab, Mumbai</span>
          </span>
          <span className={styles['text32']}>
            <span className={styles['text33']}>5 hrs ago</span>
          </span>
        </div>
        <div className={styles['Group69144176']}>
          <img
            alt="Rectangle35144177"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/cc3440b9-2579-4b74-9971-08fab87df487?org_if_sml=1788"
            className={styles['image07']}
          />
          <div className={styles['Group37144178']}>
            <span className={styles['text34']}>
              <span className={styles['text35']}>
                Appointment Successfully Booked!
              </span>
            </span>
            <img
              alt="Group36144180"
              src="/playground_assets/group36144180-55b4.svg"
              className={styles['image08']}
            />
          </div>
          <span className={styles['text36']}>
            <span className={styles['text37']}>
              Dr. David / eye appointment
            </span>
          </span>
          <span className={styles['text38']}>
            <span className={styles['text39']}>Gemini Lab, Mumbai</span>
          </span>
          <span className={styles['text40']}>
            <span className={styles['text41']}>20 min ago</span>
          </span>
        </div>
        <div className={styles['Group70144186']}>
          <img
            alt="Rectangle35144187"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/3ba663b8-2689-468c-ad5e-adfa4dd362e9?org_if_sml=1788"
            className={styles['image09']}
          />
          <div className={styles['Group37144188']}>
            <span className={styles['text42']}>
              <span className={styles['text43']}>
                Appointment Successfully Booked!
              </span>
            </span>
            <img
              alt="Group36144190"
              src="/playground_assets/group36144190-zyzh.svg"
              className={styles['image10']}
            />
          </div>
          <span className={styles['text44']}>
            <span className={styles['text45']}>Dr. Robert / Regular</span>
          </span>
          <span className={styles['text46']}>
            <span className={styles['text47']}>JJS Hospital, Mumbai</span>
          </span>
          <span className={styles['text48']}>
            <span className={styles['text49']}>23 min ago</span>
          </span>
        </div>
        <div className={styles['Group71144196']}>
          <img
            alt="Rectangle35144197"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/dc422b19-537d-4b8a-abd2-5cc8e780529a?org_if_sml=1788"
            className={styles['image11']}
          />
          <div className={styles['Group37144198']}>
            <span className={styles['text50']}>
              <span className={styles['text51']}>
                Your Next Appointment is in 12 hrs.
              </span>
            </span>
            <img
              alt="clock144216"
              src="/playground_assets/clock144216-ar8.svg"
              className={styles['image12']}
            />
          </div>
          <span className={styles['text52']}>
            <span className={styles['text53']}>
              Dr. Monika / Heart appointment
            </span>
          </span>
          <span className={styles['text54']}>
            <span className={styles['text55']}>SAP Hospital, Mumbai</span>
          </span>
          <span className={styles['text56']}>
            <span className={styles['text57']}>1 day ago</span>
          </span>
        </div>
        <div className={styles['Group72144206']}>
          <img
            alt="Rectangle35144207"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/5dd0d237-012e-428b-a959-3d14b195bbf9?org_if_sml=1788"
            className={styles['image13']}
          />
          <div className={styles['Group37144208']}>
            <span className={styles['text58']}>
              <span className={styles['text59']}>
                Appointment Successfully Booked!
              </span>
            </span>
            <img
              alt="Group36144210"
              src="/playground_assets/group36144210-vuj.svg"
              className={styles['image14']}
            />
          </div>
          <span className={styles['text60']}>
            <span className={styles['text61']}>Dr. Emmily/ Reglar</span>
          </span>
          <span className={styles['text62']}>
            <span className={styles['text63']}>ROC Hospital, Mumbai</span>
          </span>
          <span className={styles['text64']}>
            <span className={styles['text65']}>2 days ago</span>
          </span>
        </div>
        <div className={styles['Taskbar14412']}>
          <img
            alt="Rectangle3014413"
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/b446973a-1495-46a9-ac33-f7c7417f9107/4e97d038-8b91-4c85-9889-1b56f24f24d2?org_if_sml=1336"
            className={styles['image15']}
          />
          <Link to="/profile22" className={styles['navlink2']}>
            <img
              alt="profile14415"
              src="/playground_assets/profile14415-iqfn.svg"
              className={styles['image16']}
            />
          </Link>
          <img
            alt="notification1482"
            src="/playground_assets/notification1482-whja.svg"
            className={styles['image17']}
          />
          <Link to="/homepage" className={styles['navlink3']}>
            <img
              alt="home14425"
              src="/playground_assets/home14425-a8c.svg"
              className={styles['image18']}
            />
          </Link>
          <Link to="/schedule" className={styles['navlink4']}>
            <img
              alt="Group731483"
              src="/playground_assets/group731483-u65.svg"
              className={styles['image19']}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Notifications
