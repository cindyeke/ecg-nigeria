import clsx from 'clsx'
import Image from 'next/image'
import SeparatorLine from '@components/molecules/SeparatorLine/SeparatorLine'
import Location from '@components/molecules/Location/Location'
import People from '@images/people-landscape.jpg'
import ECGLogo from '@images/ecg-logo.png'
import styles from './HomeHeader.module.css'

const HomeHeader = ({ className, displaySeparatorLine = false }) => {
    const mobileHeaderWrapperStyle = clsx(styles['header-wrapper'], className)

    return (
        <header className={mobileHeaderWrapperStyle}>
            <div className={styles.header}>
                <Image src={ECGLogo} alt="logo" className={styles.logo} />
                {displaySeparatorLine && (
                    <SeparatorLine property="vl" color="bg-gray-400" />
                )}
                <Image
                    src={People}
                    alt="people"
                    className="hidden md:h-full md:block md:object-cover"
                />
                <div className={styles['welcome-wrapper']}>
                    <span className={styles['text-one']}>Welcome to</span>
                    <span className={styles['text-two']}>
                        Enlightened Christian Gathering
                    </span>
                    <Location name="Nigeria" />
                </div>
            </div>
        </header>
    )
}

export default HomeHeader
