import ButtonLink from '@components/atoms/ButtonLink/ButtonLink'
import { navigationLinks } from '@utilities/navigation'
import styles from './MobileFirstPageNav.module.css'

const MobileFirstPageNav = () => {
    return (
        <div className="flex-grow px-5 flex items-end mb-12 sm:px-10">
            <div className="w-full flex flex-col gap-y-3 xs-sm:gap-y-4">
                {navigationLinks.map((navigationLink) => (
                    <ButtonLink
                        key={navigationLink.label}
                        label={navigationLink.label}
                        href={navigationLink.url}
                        className={styles['nav-link']}
                    />
                ))}
            </div>
        </div>
    )
}

export default MobileFirstPageNav
