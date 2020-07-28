import React from 'react'
import { Block, Content, Yoga } from 'gerami'

import styles from './about.module.scss'
import Page from '../../shared/components/page/page'
import Img from '../../shared/components/img/img'
import { aboutBg } from '../../../data/about-bg'
import DotSpace from '../../shared/components/dot-space/dot-space'

function About() {
  return (
    <Page>
      <div
        className={`${styles['about-hero-container']}`}
        style={{ backgroundImage: `url(${aboutBg.src})` }}
      >
        <Block className={`center ${styles['about-hero-tag']}`}>
          <h1>To be the Leader of Quality!</h1>
          <span>
            Furniture Manufacturing <DotSpace /> Local & Export Market{' '}
          </span>
        </Block>
      </div>
      <Block className={`margin-top-very-big ${styles['ab-card-box']}`}>
        <Content size={'XXL'} className={styles['back-card']}>
          <Block className={`${styles['back-card-block']}`}>
            <h1>About</h1>
            <p className={'center'}>
              Finfine Furniture factory (3F) is established in 1959 E.C. and the
              company has historic existence. It's been almost five decades
              since its establishment. The company is playing a critical role in
              the development of the furniture industry by manufacturing and
              inventing new design furniture and spring mattress. The company is
              owned by an Ethiopian investor and creates job opportunity for
              more than 400 permanent and temporary workers. 3F furniture is one
              of the best destinations to purchase quality product of the most
              reasonable price, with the range of variety of furnitures
              available in our catalogs and others. we are the best furniture
              manufacturer of custom-made product to our clients across the
              country.
            </p>
          </Block>
        </Content>
        <Content size={'S'} className={styles['front-card']}>
          <div>
            <div className={'margin-right-very-big'}>
              <Img path={'brand/logo-red.png'} alt={'3f logo'} height={150} />
            </div>
          </div>
        </Content>
      </Block>

      {/*values*/}
      <Block
        first
        className={`margin-top-very-big ${styles['value-card-box']}`}
      >
        <Content
          size={'S'}
          className={`${styles['front-card']} ${styles['value-front-card']}`}
        >
          <div>
            <Img
              path={'about/value-pointer.png'}
              alt={'3f logo'}
              height={100}
            />
          </div>
        </Content>

        <Content size={'XL'} className={styles['value-back-card']}>
          <Block first className={styles['value-back-card-block']}>
            <h1>Our Values</h1>
            <p className={'fg-whitish'}>
              <span>
                - We devote ourselves to achieve better results by using limited
                resources.
              </span>
              <span>
                - Creativity and effectiveness are our most desired targets.
              </span>
              <span>- Our existence is base on our satisfied customers.</span>
              <span>
                - Continual learning is the root cause of our effectiveness in
                quality.
              </span>
              <span>- For change is absolute we stand for it.</span>
              <span>
                - Supplying quality products at a reasonable price accompanied
                by excellent customer service and punctuality are our motto.
              </span>
            </p>
          </Block>
        </Content>
      </Block>

      {/*vision*/}
      <Block
        first
        className={`margin-top-very-big ${styles['ab-card-box']} ${styles['ab-vision-box']}`}
      >
        <Content size={'S'} className={styles['front-card']}>
          <div>
            <Img path={'about/eye.png'} alt={'3f logo'} height={100} />
          </div>
        </Content>
        <Content
          size={'XL'}
          className={`${styles['back-card']} ${styles['vision-front-card']}`}
        >
          <Block
            className={`${styles['back-card-block']} ${styles['back-vision-card']}`}
          >
            <h1>Our Mission</h1>
            <span>
              - To create value for our customer through reliablity, flexiblity,
              integrity & speed.
            </span>
            <span>
              - To create a culture that values & supports employee engamgment,
              encourages pesonal development and faster team collaboration.
            </span>
            <span>
              - To be committed to our global responsibility of enviromental
              care by manufacturing product that meet our standard of
              sustainablity.
            </span>
          </Block>
        </Content>
      </Block>

      {/*Team*/}
      <Block last>
        <h1 className={'center'}>Meet the Team</h1>
        <Content size={'XXL'} transparent className={styles['back-card']}>
          <Block last className={styles['back-card-block']}>
            <Yoga maxCol={3}>
              <div>
                <Content size={'XS'} className={'padding-normal'}>
                  <Img
                    path={'about/value-pointer.png'}
                    alt={'3F logo'}
                    height={300}
                  />
                </Content>
                <h4 className={'margin-top-big'}>Genet Sahilu (Mrs.)</h4>
                <span>Dep.general manager</span>
              </div>

              <div>
                <Content size={'XS'} className={'padding-normal'}>
                  <Img
                    path={'about/value-pointer.png'}
                    alt={'3f logo'}
                    height={300}
                  />
                </Content>
                <h4 className={'margin-top-big'}>Demelash Shimelis (Mr.)</h4>
                <span>Marketing manager</span>
              </div>

              <div>
                <Content size={'XS'} className={'padding-normal'}>
                  <Img
                    path={'about/value-pointer.png'}
                    alt={'3f logo'}
                    height={300}
                  />
                </Content>
                <h4 className={'margin-top-big'}>Adane Tasena (Mr.)</h4>
                <span>Procurement Division Manager</span>
              </div>
            </Yoga>
          </Block>
        </Content>
      </Block>
    </Page>
  )
}

export default About
