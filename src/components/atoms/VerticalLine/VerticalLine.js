import clsx from 'clsx'

export default function VerticalLine({ color, className }) {
    return (
        <div
            className={clsx(
                'inline-block w-[1px] h-full mx-3',
                color,
                className,
            )}
        ></div>
    )
}
