import clsx from 'clsx'

const SectionTitle = ({ title, className }) => {
    return (
        <span
            className={clsx(
                'text-off-white text-lg xs:text-2xl mx-auto uppercase font-bold tracking-[5px] lg:text-3xl',
                className,
            )}
        >
            {title}
        </span>
    )
}

export default SectionTitle
