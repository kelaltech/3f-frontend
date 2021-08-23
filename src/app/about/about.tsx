import { Block, Content, Yoga } from 'gerami'

import { aboutBg } from '../../../data/about-bg'
import DotSpace from '../../shared/components/dot-space/dot-space'
import Image from 'next/image'
import Page from '../../shared/components/page/page'
import styles from './about.module.scss'
import logoRed from '../../assets/images/brand/logo-red.png'
import valuePointer from '../../assets/images/about/value-pointer.png'
import eye from '../../assets/images/about/eye.png'
import LiteParallax from '../../shared/components/lite-parallax/lite-parallax'

function About() {
  return (
    <Page>
      <LiteParallax
        src={'/images/about/aboutBG.jpg'}
        className={`${styles['about-hero-container']}`}
        style={{ backgroundImage: `url(${aboutBg.src})` }}
      >
        <Block className={`center ${styles['about-hero-tag']}`}>
          <h1> Vission </h1>
          <span>
            {' '}
            <h2>To be the Leader of Quality! </h2>
            Furniture Manufacturing <DotSpace /> Local & Export Market{' '}
          </span>
        </Block>
      </LiteParallax>

      {/* about */}

      <Block first last />

      <Content
        size={'XXL'}
        transparent
        className={`margin-top-very-big ${styles['ab-card-box']}`}
      >
        <Content size={'XXL'} className={styles['back-card']}>
          <Block className={`${styles['back-card-block']}`}>
            <h1>About</h1>
            <p style={{paddingBottom: 32}}>
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
              <Image src={logoRed} alt={'3f logo'} height={150} width={199} />
            </div>
          </div>
        </Content>
      </Content>
      <Block first last />
      <Block first last />
      {/* values */}
      <Content
        size={'XXL'}
        transparent
        className={`margin-top-very-big ${styles['value-card-box']}`}
      >
        <Content
          size={'S'}
          className={`${styles['front-card']} ${styles['value-front-card']}`}
        >
          <div>
            <Image
              src={valuePointer}
              alt={'3f logo'}
              height={150}
              width={88}
            />
          </div>
        </Content>

        <Content size={'XL'} className={styles['value-back-card']}>
          <Block first className={styles['value-back-card-block']}>
            <h1>Our Values</h1>
            <p>
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
      </Content>
      <Block first last />
      <Block first last />

      {/* mission */}

      <Content
        size={'XXL'}
        transparent
        className={`margin-top-very-big ${styles['ab-card-box']}`}
      >
        <Content size={'XXL'} className={styles['back-card']}>
          <Block className={`${styles['back-card-block']}`}>
            <h1>Our Mission</h1>
            <p style={{paddingBottom: 32}}>
              <span>
                - To create value for our customer through reliablity,
                flexiblity, integrity & speed.
              </span>
              <span>
                - To create a culture that values & supports employee
                engamgment, encourages pesonal development and faster team
                collaboration.
              </span>
              <span>
                - To be committed to our global responsibility of enviromental
                care by manufacturing product that meet our standard of
                sustainablity.
              </span>
            </p>
          </Block>
        </Content>
        <Content size={'S'} className={styles['front-card']}>
          <div>
            <div className={'margin-right-very-big'}>
              <Image src={eye} alt={'3f logo'} height={100} width={176} />
            </div>
          </div>
        </Content>
      </Content>

      <Block first last className={styles['about-block-remove']} />
      <Block first last className={styles['about-block-remove']} />
      <Block first last />

      {/*Team*/}
      <Content style={{ backgroundColor: '#bc2239' }}>
        <Block first />
        <h1 style={{ color: 'white', fontSize: '30px' }} className={'center'}>
          Managment Team
        </h1>
        <Block first />
      </Content>
      <Block last>
        <Content
          size={'XXL'}
          transparent
          className={`center ${styles['back-card']}`}
        >
          <Block last className={styles['back-card-block']}>
            <Yoga maxCol={2}>
              <div>
                <h1 className={'margin-top-big'}>Genet Sahilu (Mrs.)</h1>
                <span>General manager</span>
              </div>
              <div>
                <h1 className={'margin-top-big'}>Sirak Tesfaye (Mr.)</h1>
                <span>Dep. General manager</span>
              </div>
              <div>
                <h1 className={'margin-top-big'}>Demelash Shimelis (Mr.)</h1>
                <span>Marketing manager</span>
              </div>

              <div>
                <h1 className={'margin-top-big'}>Abel Getachew (Mr.)</h1>
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
