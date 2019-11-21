import React from 'react'
import { Block, Content, Yoga } from 'gerami'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from '../../shared/components/layout/layout'
import Page from '../../shared/components/page/page'
import { newsMetas } from '../../../data/news-metas'
import ErrorPage from '../../../pages/_error'

type NewsDetailProps = {
  idParamName: string
}

function NewsDetail({ idParamName }: NewsDetailProps) {
  const router = useRouter()
  const newsId = router.query[idParamName]

  const news = newsMetas.find(m => m.id === newsId)
  if (!news) return <ErrorPage statusCode={404} />

  return (
    <Layout>
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

              <small className="fg-blackish right">
                {/* todo: share options */}
              </small>
            </Yoga>
          </Block>

          <Content size="L" transparent className="font-L">
            <Block first>
              <h1>{news.title}</h1>
              <h5 className="fg-blackish light padding-top-normal">
                Posted on {news.postedOn.toDateString()}
              </h5>
            </Block>

            <Block first last>
              <Block className="bg-accent fg-white padding-big">
                {news.description}
              </Block>
            </Block>

            <Block last style={{ lineHeight: 2 }}>
              {news.content}
            </Block>
          </Content>
        </Content>
      </Page>
    </Layout>
  )
}

export default NewsDetail
