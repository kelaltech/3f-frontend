import React from 'react'
import { Block, Content, Yoga } from 'gerami'
import { useRouter } from 'next/router'
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
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import {
  faFacebook,
  faLinkedin,
  faTelegram,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

import Page from '../../shared/components/page/page'
import { newsMetas } from '../../../data/news-metas'
import ErrorPage from '../../../pages/_error'
import useLazy from '../../shared/hooks/use-lazy/use-lazy'

type NewsDetailProps = {
  idParamName: string
}
type NewsType = {
  id: string
  title: string
}

function NewsDetail({ idParamName }: NewsDetailProps) {
  const router = useRouter()
  const newsId = router.query[idParamName]
  // console.log('_________________________')
  // console.log(newsId)

  // const news = newsMetas.find((m) => m.id === newsId)

  const [news] = useLazy<any>(
    null,
    (setNews, setError) => {
      fetch(`http://localhost:1337/publications/${newsId}`)
      .then((res)=> res.json())
      .then((data) => setNews(data))
      .catch(setError)
    }
  )
  if (!news) return <ErrorPage statusCode={404} />

  console.log(news)

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
                  url={location.href}
                  subject={`${news.title} | News – (3F) Finfine Furniture Factory`}
                  body={news.description}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </EmailShareButton>

                <FacebookShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                  quote={`${news.title} | News – (3F) Finfine Furniture Factory\n\n${news.description}`}
                  hashtag="#3F"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </FacebookShareButton>

                <LinkedinShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </LinkedinShareButton>

                <TelegramShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                  title={`${news.title} | News – (3F) Finfine Furniture Factory: ${news.description}`}
                >
                  <FontAwesomeIcon icon={faTelegram} />
                </TelegramShareButton>

                <TwitterShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                  title={`${news.title} | News – (3F) Finfine Furniture Factory`}
                  hashtags={['3F']}
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </TwitterShareButton>

                <WhatsappShareButton
                  className="margin-horizontal-normal font-L middle"
                  url={location.href}
                  title={`${news.title} | News – (3F) Finfine Furniture Factory: ${news.description}`}
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
                Posted on {new Date(news.postedOn).toDateString()}
              </h5>
            </Block>

            <Block first last>
              <Block className="bg-accent fg-white padding-big">
                {news.subject}
              </Block>
            </Block>

            <Block last style={{ lineHeight: 2 }}>
              {news.content}
            </Block>
          </Content>
        </Content>
      </Page>
    </>
  )
}

export default NewsDetail
