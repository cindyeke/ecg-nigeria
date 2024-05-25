'use client'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import MobileFirstPage from '@components/pages/MobileFirstPage/MobileFirstPage'
import Navigation from '@components/organisms/Navigation/Navigation'
import HomeHeader from '@components/organisms/HomeHeader/HomeHeader'
import HomeAboutUs from '@components/organisms/HomeAboutUs/HomeAboutUs'
import ServiceTimes from '@components/organisms/ServiceTimes/ServiceTimes'
import UpcomingEvents from '@components/organisms/UpcomingEvents/UpcomingEvents'
import BranchLocation from '@components/organisms/BranchLocation/BranchLocation'
import SendMessage from '@components/organisms/SendMessage/SendMessage'
import Footer from '@components/organisms/Footer/Footer'
import Layout from '@components/template/Layout'

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
            <Layout>
                <Navigation isVisible={showNav} />
                <HomeHeader className="!hidden md:!flex" />
                <HomeAboutUs />
                <ServiceTimes />
                {/* <UpcomingEvents />
                <BranchLocation />
                <SendMessage />
                <Footer /> */}
            </Layout>
        </div>
    )
}
