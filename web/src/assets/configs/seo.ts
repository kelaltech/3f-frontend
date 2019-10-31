import { NextSeoProps } from 'next-seo/lib'

export default {
  title: 'Official Website -- 3F | Finfine Furniture Factory plc',
  description: 'Official Website for 3F (Finfine Furniture Factory plc).',
  additionalMetaTags: [
    { name: 'author', content: 'kelal tech plc' },
    { name: 'copyright', content: '2019 © Finfine Furniture Factory plc' },
    {
      name: 'keywords',
      content: '3f,finfine furniture factory plc,furniture company in ethiopia'
    },
    { name: 'robots', content: 'index,follow' },
    { name: 'theme-color', content: '#bc2239' }
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ethio3f.com/',
    site_name: '3F | Finfine Furniture Factory plc',
    images: [{ url: 'https://ethio3f.com/promo.png' }]
  },

  twitter: {
    handle: '@ethio3f',
    site: '@ethio3f',
    cardType: 'summary_large_image'
  }
} as NextSeoProps
