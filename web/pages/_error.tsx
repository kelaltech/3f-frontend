import React from 'react'
import Error, { ErrorProps } from 'next/error'

import Layout from '../src/shared/components/layout/layout'

function ErrorPage(errorProps: ErrorProps) {
  return (
    <Layout>
      <div className="padding-big">
        <Error {...errorProps} />
      </div>
    </Layout>
  )
}

ErrorPage.getInitialProps = ({ res, err }): ErrorProps => {
  return {
    statusCode: res ? res.statusCode : err ? err.statusCode : 404,
    title: res ? res.title : err ? err.title : undefined
  }
}

export default ErrorPage
