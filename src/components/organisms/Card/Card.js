import styles from './Card.module.css'

export default function Card({ children }) {
    return (
        <div className={styles['card']}>
            <span className="bg-teal-300 block h-[8px]"></span>
            <>{children}</>
        </div>
    )
}
