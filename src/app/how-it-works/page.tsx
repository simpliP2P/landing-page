import HowItWorksPage from '@/components/templates/HowItWorks'
import React, { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Simplip2p | How',
}

const page = () => {
    return (
         <Suspense fallback={<div>Loading...</div>}>
            <HowItWorksPage/>
        </Suspense>
    )
}

export default page