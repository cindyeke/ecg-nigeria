import clsx from 'clsx'
import Image from 'next/image'

const RoundedImage = ({ containerStyle, imgStyle, imgSrc, imgAlt }) => {
    return (
        <div
            className={clsx(
                containerStyle,
                'md:rounded-[50%] md:overflow-hidden md:absolute',
            )}
        >
            <Image
                src={imgSrc}
                alt={imgAlt}
                className={clsx(imgStyle, 'w-full md:h-full md:object-cover')}
            />
        </div>
    )
}

export default RoundedImage
