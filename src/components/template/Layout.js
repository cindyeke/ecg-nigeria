'use client'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { usePathname } from 'next/navigation'
import Navigation from '@components/organisms/Navigation/Navigation'
import PageBanner from '@components/molecules/PageBanner/PageBanner'
import Footer from '@components/organisms/Footer/Footer'

const Layout = ({ children, hasPageBanner = false }) => {
    const currentPath = usePathname()
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
        <div className="relative h-full max-w-[1536px] mx-auto">
            <Navigation isVisible={showNav} path={currentPath} />
            <PageBanner path={currentPath} hasPageBanner={hasPageBanner} />
            {children}
            {currentPath !== '/' && <Footer />}
        </div>
    )
}

export default Layout
