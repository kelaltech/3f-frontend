import React from 'react'

import './footer.scss'
import { Block, Content } from 'gerami'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import LiteImage from '../lite-image/lite-image'

const DotSpace = () => (
  <span className="inline-block margin-horizontal-normal">•</span>
)

function Footer() {
  return (
    <footer className="footer">
      <Content size="3XL" transparent>
        <Block first>
          <LiteImage
            src={require('../../../assets/images/brand/logo-white.png')}
            height={42}
            native
          />
        </Block>

        <Block first>
          <Link href="/">
            <a>Home</a>
          </Link>
          <DotSpace />
          <Link href="/about">
            <a>About</a>
          </Link>
          <DotSpace />
          <Link href="/products">
            <a>Products</a>
          </Link>
          <DotSpace />
          <Link href="/locations">
            <a>Locations</a>
          </Link>
          <DotSpace />
          <Link href="/news">
            <a>News</a>
          </Link>
        </Block>

        <Block className="font-XXL" first last>
          <a
            href="https://www.facebook.com/ethio3f"
            className="margin-vertical-small margin-right-very-big"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://www.instagram.com/ethio3f"
            className="margin-vertical-small margin-right-very-big"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://www.linkedin.com/company/ethio3f"
            className="margin-vertical-small margin-right-very-big"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.twitter.com/ethio3f"
            className="margin-vertical-small margin-right-very-big"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="https://www.youtube.com/user/ethio3f"
            className="margin-vertical-small margin-right-very-big"
          >
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </Block>

        <Block>
          {/* todo: terms of service */}
          <Link href="#todo">
            <a>Terms of Service</a>
          </Link>
          <DotSpace />
          {/* todo: privacy policy */}
          <Link href="#todo">
            <a>Privacy Policy</a>
          </Link>
        </Block>

        <Block last>
          <span>2019 &copy; Finfine Furniture Factory plc.</span>
          <DotSpace />
          <span>
            Powered by{' '}
            <a
              href="https://www.kelaltech.com/"
              target="_blank"
              rel="noreferrer nofollow"
            >
              kelal tech.
            </a>
          </span>
        </Block>
      </Content>
    </footer>
  )
}

export default Footer
