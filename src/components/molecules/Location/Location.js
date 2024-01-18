import Image from 'next/image'
import clsx from 'clsx'
import LocationMarker from '@svgs/location-marker.svg'
import styles from './Location.module.css'

const Location = ({ name, className }) => {
    return (
        <span className={clsx(styles['location-wrapper'], className)}>
            <Image
                src={LocationMarker}
                alt="location marker"
                className="w-[10px] mr-1 xs:w-[15px] xs:mr-2 md:w-[10px] lg:w-[15px]"
                priority
            />
            {name}
        </span>
    )
}

export default Location
