import Location from '@components/molecules/Location/Location'
import SeparatorLine from '../SeparatorLine/SeparatorLine'
import styles from '@components/organisms/UpcomingEvents/UpcomingEvents.module.css'

const UpcomingEvent = () => {
    return (
        <div className={styles['upcoming-event']}>
            <span className="bg-teal-300 block h-[8px]"></span>
            <div className={styles['content-wrapper']}>
                <div className="flex items-start justify-between">
                    <div className={styles['date-wrapper']}>
                        <span>02</span>
                        <span>Oct</span>
                    </div>
                    <span className={styles['event-description']}>
                        Pastors Conference
                    </span>
                </div>
                <SeparatorLine color="bg-gray-200" />
            </div>
            <Location
                name="Abuja"
                className="px-5 xs:px-8 xs-sm:px-10 md:!capitalize md:px-6 lg:px-10"
            />
        </div>
    )
}

export default UpcomingEvent
