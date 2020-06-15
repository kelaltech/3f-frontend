import React from 'react'
import fetch from 'isomorphic-unfetch'

import { GetStaticProps } from 'next'
import { Product } from '../src/types/product-type'
import HomeProducts from '../src/app/home/components/home-products/home-products'

function HomeProduct({ products }: { products: Product[] }) {
  return (
    <>
      <HomeProducts productData={products} />
    </>
  )
}

export default HomeProduct

export const getStaticProps: GetStaticProps = async () => {
  // newsMetas.find((n) => n.id === params.newsId)
  const products = await fetch(`http://localhost:1337/products`).then((res) =>
    res.json()
  )

  return { props: { products } }
}
