import SectionTitle from '@components/atoms/SectionTitle/SectionTitle'
import ServiceInformation from '@components/molecules/ServiceInformation/ServiceInfomation'
import { services } from '@utilities/services'
import styles from './ServiceTimes.module.css'

const ServiceTimes = () => {
    return (
        <section className="bg-dim-white">
            <div className={styles['diagonal-section']}>
                <SectionTitle
                    title="Service Times"
                    className="md:m-0 md:text-right"
                />
                <div className="mt-10 md:grid md:grid-cols-2">
                    {services.map(({ id, name, time }) => (
                        <ServiceInformation key={id} name={name} time={time} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceTimes
