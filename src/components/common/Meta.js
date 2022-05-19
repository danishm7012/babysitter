import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'PRO Services in UAE - PRO Services Dubai - PRO GCC',
  description:
    'PRO Services in UAE where PRO GCC team of expert Consultants handhold you throughout the required PRO Service Dubai from the beginning to the end with legal documentation.',
  keywords: 'PRO Services',
}

export default Meta
