import HorizontalLine from '@components/atoms/HorizontalLine/HorizontalLine'
import VerticalLine from '@components/atoms/VerticalLine/VerticalLine'

export default function SeparatorLine({ property = 'hl', color, className }) {
    return (
        <>
            {property === 'vl' ? (
                <VerticalLine color={color} className={className} />
            ) : (
                <HorizontalLine color={color} className={className} />
            )}
        </>
    )
}
