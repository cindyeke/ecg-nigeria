import HorizontalLine from '@components/atoms/HorizontalLine/HorizontalLine'
import VerticalLine from '@components/atoms/VerticalLine/VerticalLine'

export default function SeparatorLine({ property = 'hl', color }) {
    return (
        <>
            {property === 'vl' ? (
                <VerticalLine color={color} />
            ) : (
                <HorizontalLine color={color} />
            )}
        </>
    )
}
