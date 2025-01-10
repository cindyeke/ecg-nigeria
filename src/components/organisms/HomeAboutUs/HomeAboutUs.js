import RoundedImage from '@components/molecules/RoundedImage/RoundedImage'
import styles from './HomeAboutUs.module.css'

const firstImageStyle =
    'md:w-[350px] md:h-[350px] md:-left-7 md:bottom-0 lg:w-[500px] lg:h-[500px] lg:-left-20 xl:left-0'

const secondImageStyle =
    'md:w-[350px] md:h-[350px] md:-right-[45px] md:-bottom-[85px] lg:w-[500px] lg:h-[500px] lg:-right-[60px] xl:right-0 2xl:right-[40px] z-10'

const HomeAboutUs = () => {
    return (
        <section className="relative bg-dim-white">
            <div className={styles['first-section']}>
                <div className="order-1 mx-5 md:w-3/5 md:mx-0">
                    <span className={styles['ecg-text']}>ECG TJNC Nigeria</span>
                    is the Nigeria branch for Enlightened Christian Gathering
                    Church headquartered in Malawi.
                </div>
                <div className={styles['first-description']}>
                    A platform for spiritual fellowship through the ministry and
                    grace upon Prophet Shepherd Bushiri, the president and
                    founder of the ministry and his wife Prophetess Mary
                    Bushiri. We believe in the words of Prophet Major 1 that God
                    is still speaking today.
                </div>
                <RoundedImage
                    imgSrc="https://res.cloudinary.com/dzkevoeey/image/upload/v1736537848/ecgfounders_kvxqau.webp"
                    imgAlt="ecgfounders"
                    containerStyle={firstImageStyle}
                />
            </div>
            <div className={styles['second-section']}>
                <RoundedImage
                    imgSrc="https://res.cloudinary.com/dzkevoeey/image/upload/v1736539384/apostlewyson_gyyo9m.webp"
                    imgAlt="apostlewyson"
                    containerStyle={secondImageStyle}
                />
                <div className={styles['second-description']}>
                    <span className="text-teal-300 mr-2 md:text-blue-600 md:font-medium">
                        Apostle Wyson Bottoman
                    </span>
                    is the National Pastor of ECG THE JESUS NATION CHURCH
                    NIGERIA under the Leadership of his spiritual father Major 1
                    Prophet Shepherd Bushiri.
                </div>
            </div>
        </section>
    )
}

export default HomeAboutUs
