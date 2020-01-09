import React, { useState } from 'react'
import {
  Block,
  Button,
  Content,
  Input,
  Loading,
  TextArea,
  Warning
} from 'gerami'
import Axios from 'axios'

import './home-contact.scss'
import { IMessage } from '../../../../../pages/api/message'
import LiteImage from '../../../../shared/components/lite-image/lite-image'
import LiteParallax from '../../../../shared/components/lite-parallax/lite-parallax'
import { homeContactBg } from '../../../../../data/home-contact-bg'

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
      .catch(e => {
        setStatus('INITIAL')
        setError(e)
      })
  }

  return (
    <LiteParallax src={homeContactBg} strength={250}>
      <div className="padding-vertical-very-big bg-blackish">
        <Content size="3XL" transparent className="padding-vertical-big">
          <Block first className="center">
            <LiteImage
              src={require('../../../../assets/images/brand/logo-red.png')}
              native
              height={120}
            />
          </Block>

          <Block last>
            <Block className="center" first last>
              <h1 className="fg-whitish">Contact Us</h1>
            </Block>

            <Content
              size="L"
              transparent
              className="home-contact-form-container"
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
                        onChange={e => setMsg({ ...msg, from: e.target.value })}
                        name="email"
                        placeholder={'Your Email'}
                        type={'email'}
                        className="home-contact-form-send-message-input"
                        disabled={status === 'SENDING'}
                        required
                      />
                    </div>

                    <div>
                      <Input
                        value={msg.subject}
                        onChange={e =>
                          setMsg({ ...msg, subject: e.target.value })
                        }
                        placeholder={'Subject'}
                        className="home-contact-form-send-message-input"
                        disabled={status === 'SENDING'}
                        required
                      />
                    </div>

                    <div>
                      <TextArea
                        value={msg.text}
                        onChange={e => setMsg({ ...msg, text: e.target.value })}
                        placeholder={'Your Message'}
                        className="home-contact-form-send-message-input"
                        rows={7}
                        disabled={status === 'SENDING'}
                        required
                      />
                    </div>

                    <div>
                      <Button
                        primary
                        type="submit"
                        className="home-contact-form-send-message-submit"
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
        </Content>
      </div>
    </LiteParallax>
  )
}

export default HomeContact
