import Button from '@components/atoms/Button/Button'
import SectionTitle from '@components/atoms/SectionTitle/SectionTitle'
import styles from './SendMessage.module.css'

const SendMessage = () => {
    return (
        <section className={styles['send-message-section']}>
            <SectionTitle
                title="Send Us A Message"
                className={styles['send-message-section-title']}
            />
            <form className={styles.form}>
                <input
                    type="text"
                    placeholder="First Name"
                    className=""
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className=""
                    autoComplete="off"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="lg:col-span-2"
                    autoComplete="off"
                />
                <textarea
                    placeholder="Message"
                    className="h-[100px] lg:col-span-2 xl:h-[200px]"
                    autoComplete="off"
                />
                <Button label="Send" className={styles['submit-btn']} />
            </form>
        </section>
    )
}

export default SendMessage
