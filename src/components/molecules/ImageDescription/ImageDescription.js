import Image from 'next/image'
import DefaultGroupPhoto from '@images/smiling-people.jpeg'
import styles from './ImageDescription.module.css'

const ImageDescription = ({ children, src, alt = '' }) => {
    return (
        <div className={styles.root}>
            <div className={styles.imageWrapper}>
                <Image
                    src={src || DefaultGroupPhoto}
                    className={styles.roundedImage}
                    alt={alt}
                />
            </div>
            <div className={styles.description}>{children}</div>
        </div>
    )
}

export default ImageDescription
