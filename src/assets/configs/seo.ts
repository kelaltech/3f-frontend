import { NextSeoProps } from 'next-seo'

export default {
  title: 'Official Website – (3F) Finfine Furniture Factory PLC',
  description: 'Official Website for (3F) Finfine Furniture Factory PLC',
  additionalMetaTags: [
    { name: 'author', content: 'kelal tech plc' },
    { name: 'copyright', content: '2019 © (3F) Finfine Furniture Factory PLC' },
    {
      name: 'keywords',
      content: '3f,finfine furniture factory plc,furniture company in ethiopia',
    },
    { name: 'robots', content: 'index,follow' },
    { name: 'theme-color', content: '#bc2239' },
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ethio3f.com/',
    site_name: '(3F) Finfine Furniture Factory PLC',
    images: [{ url: 'https://www.ethio3f.com/promo.png' }],
  },

  twitter: {
    handle: '@ethio3f',
    site: '@ethio3f',
    cardType: 'summary_large_image',
  },
} as NextSeoProps
