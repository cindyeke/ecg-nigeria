import clsx from 'clsx'

const RoundedImage = ({ containerStyle, imgStyle, imgSrc, imgAlt }) => {
    return (
        <div
            className={clsx(
                containerStyle,
                'md:rounded-[50%] md:overflow-hidden md:absolute',
            )}
        >
            <img
                src={imgSrc}
                alt={imgAlt}
                className={clsx(imgStyle, 'w-full md:h-full md:object-cover')}
            />
        </div>
    )
}

export default RoundedImage
