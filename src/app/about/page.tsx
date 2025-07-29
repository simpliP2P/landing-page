import AboutPage from '@/components/templates/AboutPage'
import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Simplip2p | About',
  description: 'Learn more about Simplip2p, our mission, and the team behind the platform.',
}

const page = () => {
  return (
    <AboutPage/>
  )
}

export default page