import React from 'react'

import Page from '../../shared/components/page/page'
import { Block, Content } from 'gerami'
import './about.scss'
import LiteImage from '../../shared/components/lite-image/lite-image'
import fffLogo from '../../assets/images/brand/logo-red.png'
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

      <Block>
        <Content size={'S'} className={'vision-box center'}>
          <h1>Vision</h1>
          <Block className={'vision-sub-box'}>
            <p>
              The vision is to be excellent and second to none in manufacturing
              Furniture, Doors, Kitchen Cabinets etc using skilled manpower and
              state of the art technology to produce quality furniture, doors,
              kitchen cabinets etc for local and export markets.
            </p>

            <div>
              <LiteImage src={fffLogo} alt={'3f logo'} height={100} native />
            </div>
          </Block>
        </Content>
      </Block>
    </Page>
  )
}

export default About
