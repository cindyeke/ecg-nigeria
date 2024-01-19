import clsx from 'clsx'

export default function HorizontalLine({ color, className }) {
    return <hr className={clsx('border-t-0 h-[1px]', color, className)} />
}
