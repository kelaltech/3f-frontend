import React from 'react'
import { Block, Content, Yoga } from 'gerami'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Layout from '../../src/shared/components/layout/layout'
import Page from '../../src/shared/components/page/page'
import { newsMetas } from '../../data/news-metas'
import ErrorPage from '../_error'

function NewsDetailPage() {
  const router = useRouter()
  const newsId = router.query.id

  const news = newsMetas.find(m => m.id === newsId)
  if (!news) return <ErrorPage statusCode={404} />

  return (
    <Layout>
      <Page>
        <Content size="XL" className="margin-top-normal font-L">
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

          <Block>
            <h1>{news.title}</h1>
            <h5 className="fg-blackish light">
              Posted on {news.postedOn.toDateString()}
            </h5>
          </Block>

          <Block>
            <Block className="bg-accent fg-white padding-big">
              {news.description}
            </Block>
          </Block>

          <Block last>{news.content}</Block>
        </Content>
      </Page>
    </Layout>
  )
}

export default NewsDetailPage
