import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import Footer from '../components/footer'
import Copyright from '../components/copyright'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>AgeingGracefully</title>
        <meta property="og:title" content="AgeingGracefully" />
      </Helmet>
      <Navbar rootClassName="rootClassName"></Navbar>
      <main className={styles['Main']}>
        <div
          className={` ${styles['Hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['content-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                <span>
                  Management system to replace traditional
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text02']}>record</span>
              </h1>
              <div className={styles['input-container']}>
                <Link
                  to="/login"
                  className={` ${styles['navlink']} ${projectStyles['button-primary']} ${projectStyles['button']} `}
                >
                  Get started
                </Link>
              </div>
              <div className={styles['features-container']}>
                <div className={styles['feature']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text03']}>
                    Easiest way to access all records
                  </span>
                </div>
                <div className={styles['feature1']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon2']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text04']}>
                    Keep track of all record.
                  </span>
                </div>
                <div className={styles['feature2']}>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className={styles['icon4']}
                  >
                    <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                  <span className={styles['text05']}>
                    Clean Ui
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['container1']}>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1496938461470-aaa34930e2d7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG9sZCUyMGFnZSUyMGhvbWV8ZW58MHx8fHwxNjQ2NDgyNDgx&amp;ixlib=rb-1.2.1&amp;h=600"
                className={styles['image']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['SectionOne']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <h2
              className={` ${styles['text06']} ${projectStyles['heading2']} `}
            >
              <span>
                Access
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className={styles['text08']}>everything in one place</span>
              <span> and</span>
              <br></br>
              <span> update records at one touch</span>
            </h2>
            <div className={styles['cards-container']}>
              <FeatureCard image_src="/playground_assets/stars-200h.png"></FeatureCard>
              <div className={styles['Card']}>
                <img
                  alt="image"
                  src="71445514-a555-4016-932e-fe95d8c684ec"
                  className={styles['image1']}
                />
                <h4
                  className={` ${styles['text12']} ${projectStyles['heading4']} `}
                >
                  Easy Health Tracking
                </h4>
                <span
                  className={` ${styles['text13']} ${projectStyles['content-Light']} `}
                >
                  Health Tracking of every old person made simple
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className={styles['Card1']}>
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxkaWV0fGVufDB8fHx8MTY0NjQ4NjU4Ng&amp;ixlib=rb-1.2.1&amp;w=200"
                  className={styles['image2']}
                />
                <h4
                  className={` ${styles['text14']} ${projectStyles['heading4']} `}
                >
                  Diet Tracking
                </h4>
                <span
                  className={` ${styles['text15']} ${projectStyles['content-Light']} `}
                >
                  Now keep track of daily diet
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${projectStyles['section-container']} ${styles['SectionTwo']} `}
        >
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['image-container']}>
              <img
                alt="image"
                src="/playground_assets/section-image1-1200w.png"
                className={styles['image3']}
              />
            </div>
            <div className={styles['content-container1']}>
              <h1
                className={` ${styles['text16']} ${projectStyles['heading2']} `}
              >
                <span>
                  Every information at your fingertips.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text18']}>Always.</span>
              </h1>
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
      <Copyright></Copyright>
    </div>
  )
}

export default Home
