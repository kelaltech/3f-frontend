import React from 'react'
import { Block, Content, Yoga } from 'gerami'

import styles from './about.module.scss'
import Page from '../../shared/components/page/page'
import Img from '../../shared/components/img/img'

function About() {
  return (
    <Page>
      <Block first className={`margin-top-very-big ${styles['ab-card-box']}`}>
        <Content size={'XL'} className={styles['back-card']}>
          <Block className={styles['back-card-block']}>
            <h1>About</h1>
            <p className={'center'}>
              our mission is to organize the company with the latest technology
              to give you a better experience
            </p>
          </Block>
        </Content>
        <Content size={'S'} className={styles['front-card']}>
          <div>
            <h1>Finfine</h1>
            <h1>Furniture</h1>
            <h1>Factory</h1>
          </div>
        </Content>
      </Block>

      <Block>
        <div className={'center'}>
          <h1>Who we Are!</h1>
        </div>
        <Block>
          <Content size={'XL'} className={styles['ab-who-box']} transparent>
            <div className={'margin-right-very-big'}>
              <Img path={'brand/logo-red.png'} alt={'3f logo'} height={100} />
            </div>
            <p>
              Finfine Furniture factory (3F) is established in 1959 E.C. and is
              playing critical role in the development of the furniture industry
              by inventing new desing furnitures and applying modest
              technologies. The Company is fully owned by an Ethiopian investor
              and creates job opportunity for 469 permanent and 89 temporary
              workers.
            </p>
          </Content>
        </Block>
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
            <h1>Our Vision</h1>
            <p className={'center fg-whitish'}>
              The vision is to be excellent and second to none in manufacturing
              Furniture, Doors, Kitchen Cabinets etc using skilled manpower and
              state of the art technology to produce quality furniture, doors,
              kitchen cabinets etc for local and export markets.
            </p>
          </Block>
        </Content>
      </Block>

      {/*values*/}
      <Block
        first
        className={`margin-top-very-big ${styles['value-card-box']}`}
      >
        <Content
          size={'S'}
          className={`${styles['value-front-card']} ${styles['value-front-card']}`}
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
          <Block first last className={styles['value-back-card-block']}>
            <h1>Our Values</h1>
            <p className={'fg-whitish'}>
              <span>
                We devote ourselves to achieve better results by using limited
                resources.
              </span>
              <span>
                Creativity and effectiveness are our most desired targets.
              </span>
              <span>Our existence is base on our satisfied customers.</span>
              <span>
                Continual learning is the root cause of our effectiveness in
                quality.
              </span>
              <span>For change is absolute we stand for it.</span>
              <span>
                Supplying quality products at a reasonable price accompanied by
                excellent customer service and punctuality are our motto.
              </span>
            </p>
          </Block>
        </Content>
      </Block>

      {/*Team*/}
      <Block first last>
        <h1 className={'center'}>Meet the Team</h1>
        <Content size={'XXL'} transparent className={styles['back-card']}>
          <Block first last className={styles['back-card-block']}>
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
