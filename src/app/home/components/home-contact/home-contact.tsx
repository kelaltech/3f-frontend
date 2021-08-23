import Axios from 'axios'
import {
  Block,
  Button,
  Content,
  Input,
  Loading,
  TextArea,
  Warning,
  Yoga,
} from 'gerami'
import Link from 'next/link'
import { useState } from 'react'

import { IMessage } from '../../../../../pages/api/message'
import Image from 'next/image'
import LiteParallax from '../../../../shared/components/lite-parallax/lite-parallax'
import styles from './home-contact.module.scss'
import logoRed from '../../../../assets/images/brand/logo-red.png'

function HomeContact() {
  const [msg, setMsg] = useState<IMessage>({ from: '', subject: '', text: '' })
  const [status, setStatus] = useState<'INITIAL' | 'SENDING' | 'SENT'>(
    'INITIAL'
  )
  const [error, setError] = useState()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    setStatus('SENDING')
    setError(undefined)
    Axios.post<IMessage>(`/api/message`, msg)
      .then(() => setStatus('SENT'))
      .catch((e) => {
        setStatus('INITIAL')
        setError(e)
      })
  }

  return (
    <LiteParallax src={'/images/contact/sample-9.jpeg'} strength={250}>
      <div className="padding-vertical-very-big bg-blackish">
        <Content size="3XL" transparent className="padding-vertical-big">
          <Block first className="center">
            <Image src={logoRed} height={120} width={160} />
          </Block>
          <Yoga maxCol={2}>
            <Block last>
              <Block className={'center'} first last>
                <span
                  className="fg-whitish"
                  style={{ fontSize: '24px', fontWeight: 'bold' }}
                >
                  How can we help you?
                </span>
              </Block>
              <Content
                size="L"
                transparent
                className={styles['home-contact-form-container']}
              >
                <p
                  style={{ textAlign: 'center', fontSize: '17px' }}
                  className="fg-whitish padding-top-big padding-bottom-big"
                >
                  We are here to answer any questions you might have about our
                  company and our products. Reach out to us and we'll respond as
                  soon as possible.
                </p>
                <hr />
                <p
                  style={{ textAlign: 'center', fontSize: '17px' }}
                  className="fg-whitish padding-top-big"
                >
                  Please feel free to visit us. You can find the closest
                  showroom to you{' '}
                  <Link href="/locations">
                    <a>Here</a>
                  </Link>
                </p>
              </Content>
            </Block>

            <Block last>
              <Block className="center" first last>
                <h1 className="fg-whitish">Contact Us</h1>
              </Block>

              <Content
                size="L"
                transparent
                className={styles['home-contact-form-container']}
              >
                <form method="POST" onSubmit={handleSubmit}>
                  {error && (
                    <Warning
                      problem={error}
                      shy={setError}
                      className="margin-bottom-normal"
                    />
                  )}

                  {status === 'SENT' ? (
                    <>
                      Thank You!
                      <br />
                      We'll keep in touch with you very soon.
                    </>
                  ) : (
                    <>
                      <div>
                        <Input
                          value={msg.from}
                          onChange={(e) =>
                            setMsg({ ...msg, from: e.target.value })
                          }
                          name="email"
                          placeholder={'Your Email'}
                          type={'email'}
                          className={
                            styles['home-contact-form-send-message-input']
                          }
                          disabled={status === 'SENDING'}
                          required
                        />
                      </div>

                      <div>
                        <Input
                          value={msg.subject}
                          onChange={(e) =>
                            setMsg({ ...msg, subject: e.target.value })
                          }
                          placeholder={'Subject'}
                          className={
                            styles['home-contact-form-send-message-input']
                          }
                          disabled={status === 'SENDING'}
                          required
                        />
                      </div>

                      <div>
                        <TextArea
                          value={msg.text}
                          onChange={(e) =>
                            setMsg({ ...msg, text: e.target.value })
                          }
                          placeholder={'Your Message'}
                          className={
                            styles['home-contact-form-send-message-input']
                          }
                          rows={7}
                          disabled={status === 'SENDING'}
                          required
                        />
                      </div>

                      <div>
                        <Button
                          primary
                          type="submit"
                          className={
                            styles['home-contact-form-send-message-submit']
                          }
                          disabled={status === 'SENDING'}
                          aria-label="Send Message"
                        >
                          {status === 'SENDING' ? (
                            <Loading className="padding-none" />
                          ) : (
                            <>Send Message</>
                          )}
                        </Button>
                      </div>
                    </>
                  )}
                </form>
              </Content>
            </Block>
          </Yoga>
        </Content>
      </div>
    </LiteParallax>
  )
}

export default HomeContact
