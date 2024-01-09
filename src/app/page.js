'use client'
import { useEffect, useState } from 'react'
import MobileFirstPage from '@components/pages/MobileFirstPage/MobileFirstPage'
import Navigation from '@components/organisms/Navigation/Navigation'

export default function Home() {
    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 900
            const shouldShowMobileNav = window.scrollY > scrollThreshold
            setShowMobileNav(shouldShowMobileNav)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <MobileFirstPage />
            <div className="relative h-full">
                <Navigation isVisible={showMobileNav} />
                <div id="content" className="h-full bg-blue-500"></div>
                <div id="content" className="h-full bg-gray-400"></div>
            </div>
        </>
    )
}
