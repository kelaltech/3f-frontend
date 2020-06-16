import React, { useState, useEffect } from 'react'
import { Block, Content, Yoga } from 'gerami'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { NextSeo } from 'next-seo/lib'
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faTelegram } from '@fortawesome/free-brands-svg-icons/faTelegram'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { strapiApiBase } from '../../../constants'

import Page from '../../shared/components/page/page'
import { NewsMetaType } from '../../types/news-meta-type'

type NewsDetailProps = {
  news: NewsMetaType
}

function NewsDetail({ news }: NewsDetailProps) {
  const [url, setUrl] = useState<string>()
  useEffect(() => {
    if (typeof window === 'undefined') return
    setUrl(window?.location?.href)
  }, [])

  return (
    <>
      <NextSeo
        title={`${news.title} | News – (3F) Finfine Furniture Factory`}
        description={news.subject}
      />

      <Page>
        <Content size="3XL" transparent>
          <Block first className="font-S">
            <Yoga maxCol={2}>
              <span>
                <Link href="/news">
                  <a>
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <span className="inline-block margin-left-normal">
                      All News
                    </span>
                  </a>
                </Link>
              </span>

              <span className="fg-blackish right">
                <small className="inline-block middle margin-small margin-right-normal">
                  Share:
                </small>

                <EmailShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  subject={`${news.title} | News – (3F) Finfine Furniture Factory`}
                  body={news.subject}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </EmailShareButton>

                <FacebookShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  quote={`${news.title} | News – (3F) Finfine Furniture Factory\n\n${news.subject}`}
                  hashtag="#3F"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </FacebookShareButton>

                <LinkedinShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </LinkedinShareButton>

                <TelegramShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  title={`${news.title} | News – (3F) Finfine Furniture Factory: ${news.subject}`}
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </TelegramShareButton>

                <TwitterShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  title={`${news.title} | News – (3F) Finfine Furniture Factory`}
                  hashtags={['3F']}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </TwitterShareButton>

                <WhatsappShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={url}
                  title={`${news.title} | News – (3F) Finfine Furniture Factory: ${news.subject}`}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </WhatsappShareButton>
              </span>
            </Yoga>
          </Block>

          <Content size="L" transparent className="font-L">
            <Block first>
              <h1>{news.title}</h1>
              <h5 className="fg-blackish light padding-top-normal">
                Posted on {new Date(news.created_at).toDateString()}
              </h5>
            </Block>
            <Block first last>
              <Yoga maxCol={2}>
                {news.img?.img.map((src, key) => (
                  <div key={key}>
                    <img
                      src={`${src.url}`}
                      style={{ maxWidth: 250, maxHeight: 250 }}
                    />
                  </div>
                ))}
              </Yoga>
              <h5> {news.img.title} </h5>
            </Block>
            <Block first last>
              <Block className="bg-accent fg-white padding-big">
                {news.subject}
              </Block>
            </Block>
            <Block last style={{ lineHeight: 2 }}>
              {news.content}
              {/* {<NewsContent />} */}
            </Block>
          </Content>
        </Content>
      </Page>
    </>
  )
}

export default NewsDetail
