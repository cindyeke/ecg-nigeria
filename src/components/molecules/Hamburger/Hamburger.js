import clsx from 'clsx'
import styles from './Hamburger.module.css'

const Hamburger = ({ isOpen, setIsOpen }) => {
    const toggleHamburger = () => {
        setIsOpen(!isOpen)
        isOpen
            ? (document.body.style.overflow = 'visible')
            : (document.body.style.overflow = 'hidden')
    }

    const transition1 = clsx(
        {
            'rotate-45 translate-y-[0.6rem]': isOpen,
            '-translate-y-0.5': !isOpen,
        },
        styles.lines,
    )

    const transition2 = clsx(
        {
            'opacity-0': isOpen,
            'opacity-100': !isOpen,
        },
        styles.lines,
        'my-1',
    )

    const transition3 = clsx(
        {
            '-rotate-45 -translate-y-[0.3rem]': isOpen,
            'translate-y-0.5': !isOpen,
        },
        styles.lines,
    )

    const wrapper = clsx(
        { '!transform-none !top-[32px]': isOpen },
        styles['hamburger-wrapper'],
    )

    return (
        <button onClick={toggleHamburger} className={wrapper}>
            <span className={transition1}></span>
            <span className={transition2}></span>
            <span className={transition3}></span>
        </button>
    )
}

export default Hamburger
