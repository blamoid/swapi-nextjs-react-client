import React from 'react'
import Head from 'next/head'

type SeoHeadTagsProps = {
  pageTitle: string
  description: string
}

const SeoHeadTags = ({ pageTitle, description }: SeoHeadTagsProps) => {
  const title = `${pageTitle}${
    process.env.NODE_ENV === 'development' ? ` [${process.env.NODE_ENV}]` : ''
  }`

  return (
    <Head>
      <title key='title'>{title}</title>
      <meta name='description' content={description} key='description'></meta>
    </Head>
  )
}

export default SeoHeadTags
