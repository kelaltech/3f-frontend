import React from 'react'

import Page from '../../shared/components/page/page'
import { Block, Content, Yoga } from 'gerami'
import './about.scss'
import LiteImage from '../../shared/components/lite-image/lite-image'
import fffLogo from '../../assets/images/brand/logo-red.png'
// import fffWhite from '../../assets/images/brand/logo-white.png'
import vision from '../../assets/images/about/eye.png'
import value from '../../assets/images/about/value-pointer.png'
function About() {
  return (
    <Page>
      <Block first className={'margin-top-very-big ab-card-box'}>
        <Content size={'XL'} className={'back-card'}>
          <Block className={'back-card-block'}>
            <h1>About</h1>
            <p className={'center'}>
              our mission is to organize the company with the latest technology
              to give you a better experiance
            </p>
          </Block>
        </Content>
        <Content size={'S'} className={'front-card'}>
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
          <Content size={'XL'} className={'ab-who-box'} transparent>
            <div className={'margin-right-very-big'}>
              <LiteImage src={fffLogo} alt={'3f logo'} height={100} native />
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
      <Block first className={'margin-top-very-big ab-card-box ab-vision-box'}>
        <Content size={'S'} className={'front-card '}>
          <div>
            <LiteImage src={vision} alt={'3f logo'} height={100} native />
          </div>
        </Content>
        <Content size={'XL'} className={'back-card vision-front-card'}>
          <Block className={'back-card-block back-vision-card'}>
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
      <Block first className={'margin-top-very-big value-card-box'}>
        <Content size={'S'} className={'value-front-card value-front-card'}>
          <div>
            <LiteImage src={value} alt={'3f logo'} height={100} native />
          </div>
        </Content>

        <Content size={'XL'} className={'value-back-card '}>
          <Block first last className={'value-back-card-block '}>
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
              <span>For change is absolute we satnd for it.</span>
              <span>
                Supplying quality products at a reasonable price accompaied by
                excellent customer servie and punctuality are our mottoe.
              </span>
            </p>
          </Block>
        </Content>
      </Block>

      {/*Team*/}
      <Block first last className={' '}>
        <h1 className={'center'}>Meet the Team</h1>
        <Content size={'XXL'} transparent className={'back-card'}>
          <Block first last className={'back-card-block'}>
            <Yoga maxCol={3}>
              <div>
                <Content size={'XS'} className={'padding-normal'}>
                  <LiteImage src={value} alt={'3f logo'} height={300} native />
                </Content>
                <h4 className={'margin-top-big'}>Genet Sahilu (Mrs.)</h4>
                <span>Dep.general manager</span>
              </div>

              <div>
                <Content size={'XS'} className={'padding-normal'}>
                  <LiteImage src={value} alt={'3f logo'} height={300} native />
                </Content>
                <h4 className={'margin-top-big'}>Demelash Shimelis (Mr.)</h4>
                <span>Marketing manager</span>
              </div>

              <div>
                <Content size={'XS'} className={'padding-normal'}>
                  <LiteImage src={value} alt={'3f logo'} height={300} native />
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
