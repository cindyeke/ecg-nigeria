import clsx from 'clsx'

export default function VerticalLine({ color }) {
    return <div className={clsx('inline-block w-[1px] h-full mx-3', color)}></div>
}
