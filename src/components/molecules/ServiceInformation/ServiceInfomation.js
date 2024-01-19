import styles from '@components/organisms/ServiceTimes/ServiceTimes.module.css'

const ServiceInformation = ({ time, name }) => {
    return (
        <div className={styles['service-info']}>
            <span className="text-gray-900 font-light w-3/5 md:w-[230px] lg:w-[310px]">
                {name}
            </span>
            <span className="text-blue-600 font-bold">{time}</span>
        </div>
    )
}

export default ServiceInformation
