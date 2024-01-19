import SectionTitle from '@components/atoms/SectionTitle/SectionTitle'
import UpcomingEvent from '@components/molecules/UpcomingEvent/UpcomingEvent'
import styles from './UpcomingEvents.module.css'

const UpcomingEvents = () => {
    return (
        <section className={styles['upcoming-events-section']}>
            <SectionTitle title="Upcoming Events" className="text-teal-300" />
            <div className={styles['upcoming-events-wrapper']}>
                <UpcomingEvent />
                <UpcomingEvent />
                <UpcomingEvent />
                <UpcomingEvent />
            </div>
        </section>
    )
}

export default UpcomingEvents
