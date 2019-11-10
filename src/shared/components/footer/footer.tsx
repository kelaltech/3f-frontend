import React from 'react'

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

import './footer.scss'
import LiteImage from '../lite-image/lite-image'

const DotSpace = () => (
  <span className="inline-block margin-horizontal-normal">•</span>
)

function Footer() {
  return (
    <footer className="footer">
      <Content size="3XL" transparent>
        <div className="footer-flex">
          <div className="top footer-contact-info">
            <Block first last>
              <div className="margin-top-none">
                <div
                  className="italic left"
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.42)',
                    opacity: 0.95
                  }}
                >
                  Mail
                </div>
                <div>
                  Ethiopia
                  <br />
                  Addis Ababa
                  <br />
                  P.O. Box. 1498
                </div>
              </div>

              <div className="margin-top-big">
                <div
                  className="italic left"
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.42)',
                    opacity: 0.95
                  }}
                >
                  Email
                </div>
                <div>
                  <a href="mailto:3f@ethionet.et">3f@ethionet.et</a>
                </div>
              </div>

              <div className="margin-top-big">
                <div
                  className="italic left"
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.42)',
                    opacity: 0.95
                  }}
                >
                  Phone
                </div>
                <div>
                  <a href="tel:+251114420022">+251 11 442 0022</a>
                </div>
                <div>
                  <a href="tel:+251114425826">+251 11 442 5826</a>
                </div>
                <div>
                  <a href="tel:+251114420427">+251 11 442 0427</a>
                </div>
                <div>
                  <a href="tel:+251114402299">+251 11 440 2299</a>
                </div>
              </div>

              <div className="margin-top-big">
                <div
                  className="italic left"
                  style={{
                    borderBottom: '1px solid rgba(255,255,255,0.42)',
                    opacity: 0.95
                  }}
                >
                  Fax
                </div>
                <div>+251 11 443 1566</div>
              </div>
            </Block>
          </div>

          <div className="top" style={{ flex: 1 }}>
            <Block first>
              <LiteImage
                src={require('../../../assets/images/brand/logo-white.png')}
                height={70}
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
                className="margin-vertical-normal margin-right-very-big"
                target="_blank"
                rel="noreferrer nofollow"
                title="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/ethio3f"
                className="margin-vertical-normal margin-right-very-big"
                target="_blank"
                rel="noreferrer nofollow"
                title="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.linkedin.com/company/ethio3f"
                className="margin-vertical-normal margin-right-very-big"
                target="_blank"
                rel="noreferrer nofollow"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.twitter.com/ethio3f"
                className="margin-vertical-normal margin-right-very-big"
                target="_blank"
                rel="noreferrer nofollow"
                title="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.youtube.com/user/ethio3f"
                className="margin-vertical-normal margin-right-very-big"
                target="_blank"
                rel="noreferrer nofollow"
                title="YouTube"
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
          </div>
        </div>
      </Content>
    </footer>
  )
}

export default Footer
