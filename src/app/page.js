'use client'
import MobileFirstPage from '@components/pages/MobileFirstPage/MobileFirstPage'
import HomeHeader from '@components/organisms/HomeHeader/HomeHeader'
import HomeAboutUs from '@components/organisms/HomeAboutUs/HomeAboutUs'
import ServiceTimes from '@components/organisms/ServiceTimes/ServiceTimes'
import UpcomingEvents from '@components/organisms/UpcomingEvents/UpcomingEvents'
import BranchLocation from '@components/organisms/BranchLocation/BranchLocation'
import SendMessage from '@components/organisms/SendMessage/SendMessage'
import Footer from '@components/organisms/Footer/Footer'
import Layout from '@components/template/Layout'
import { homepageFeatureFlags } from '@utilities/features'

export default function Home() {
    return (
        <div className="md:mx-auto h-full md:overflow-x-hidden">
            <MobileFirstPage />
            <Layout>
                <HomeHeader className="!hidden md:!flex" />
                <HomeAboutUs />
                {homepageFeatureFlags.serviceTimes && <ServiceTimes />}
                {homepageFeatureFlags.upcomingEvents && <UpcomingEvents />}
                {homepageFeatureFlags.branchesLocation && <BranchLocation />}
                {homepageFeatureFlags.sendMessage && <SendMessage />}
                <Footer />
            </Layout>
        </div>
    )
}
