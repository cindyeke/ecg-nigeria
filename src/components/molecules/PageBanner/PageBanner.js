import styles from './PageBanner.module.css'
import { navigationLinks } from '@utilities/navigation'

const PageBanner = ({ path }) => {
    if (path === '/') return <></>

    const { label } = navigationLinks.find(
        (navigationLink) => navigationLink.url === path,
    )

    return <div className={styles['diagonal-section']}>{label}</div>
}

export default PageBanner
