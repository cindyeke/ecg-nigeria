import Link from 'next/link'
import Image from 'next/image'
import DefaultGroupPhoto from '@images/smiling-people.jpeg'
import styles from './ImageLink.module.css'

const ImageLink = ({ children, src, href }) => {
    return (
        <Link href={href} className={styles.root}>
            <div className={styles.imageWrapper}>
                <Image
                    src={src || DefaultGroupPhoto}
                    className={styles.roundedImage}
                    alt={href}
                />
            </div>
            <div className={styles.description}>{children}</div>
        </Link>
    )
}

export default ImageLink
