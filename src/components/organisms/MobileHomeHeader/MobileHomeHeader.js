import Image from 'next/image'
import SeparatorLine from '@components/molecules/SeparatorLine/SeparatorLine'
import ECGLogo from '@images/ecg-logo.png'
import LocationMarker from '@svgs/location-marker.svg'
import styles from './MobileHomeHeader.module.css'

const MobileHomeHeader = () => {
    return (
        <div className={styles['header-wrapper']}>
            <div className={styles.header}>
                <Image src={ECGLogo} alt="logo" className={styles.logo} />
                <SeparatorLine property="vl" color="bg-gray-400" />
                <div className={styles['welcome-wrapper']}>
                    <span className="text-sm font-light xs:text-lg xs-sm:text-xl">
                        Welcome to
                    </span>
                    <span className="font-bold text-[13px] text-blue-500 xs:text-lg xs-sm:text-[22px]">
                        ENLIGHTENED CHRISTIAN GATHERING
                    </span>
                    <span className={styles['location-wrapper']}>
                        <Image
                            src={LocationMarker}
                            alt="location marker"
                            className="w-[10px] mr-1 xs-sm:w-[15px] xs-sm:mr-2"
                            priority
                        />
                        Nigeria
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MobileHomeHeader
