'use client'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileFirstPage from '@components/pages/MobileFirstPage/MobileFirstPage'
import Navigation from '@components/organisms/Navigation/Navigation'
import HomeHeader from '@components/organisms/HomeHeader/HomeHeader'

export default function Home() {
    const [showNav, setShowNav] = useState(false)
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' })

    useEffect(() => {
        if (isMobile) {
            const handleScroll = () => {
                const scrollThreshold = 900
                const shouldShowMobileNav = window.scrollY > scrollThreshold
                setShowNav(shouldShowMobileNav)
            }
            window.addEventListener('scroll', handleScroll)
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        } else {
            setShowNav(true)
        }
    }, [])

    return (
        <div className="max-w-[1536px] md:mx-auto h-full">
            <MobileFirstPage />
            <div className="relative h-full">
                <Navigation isVisible={showNav} />
                <HomeHeader className="!hidden md:!flex" />
                <div id="content" className="h-full bg-gray-400"></div>
            </div>
        </div>
    )
}
