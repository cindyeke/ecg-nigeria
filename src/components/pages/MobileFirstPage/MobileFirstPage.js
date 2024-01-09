import Image from 'next/image'
import MobileHomeHeader from '@components/organisms/MobileHomeHeader/MobileHomeHeader'
import MobileHomeNav from '@components/organisms/MobileFirstPageNav/MobileFirstPageNav'
import People from '@images/people.jpg'

export default function MobileFirstPage() {
    return (
        <main id="mobile-first-view" className="h-full md:h-0">
            <div className="h-full md:hidden">
                <Image
                    src={People}
                    alt="people"
                    className="h-full object-cover"
                />
                <div className="absolute top-0 bg-white opacity-70 w-full h-full flex flex-col">
                    <MobileHomeHeader />
                    <MobileHomeNav />
                </div>
            </div>
        </main>
    )
}
