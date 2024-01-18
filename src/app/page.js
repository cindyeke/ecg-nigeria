'use client'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileFirstPage from '@components/pages/MobileFirstPage/MobileFirstPage'
import Navigation from '@components/organisms/Navigation/Navigation'
import HomeHeader from '@components/organisms/HomeHeader/HomeHeader'
import HomeAboutUs from '@components/organisms/HomeAboutUs/HomeAboutUs'
import ServiceTimes from '@components/organisms/ServiceTimes/ServiceTimes'

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
        <div className="md:mx-auto h-full md:overflow-x-hidden">
            <MobileFirstPage />
            <div className="relative h-full max-w-[1536px] mx-auto">
                <Navigation isVisible={showNav} />
                <HomeHeader className="!hidden md:!flex" />
                <HomeAboutUs />
                <ServiceTimes />
            </div>
        </div>
    )
}
