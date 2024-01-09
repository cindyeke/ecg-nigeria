import Link from 'next/link'

const ButtonLink = ({ label, href, className }) => {
    return (
        <Link href={href} className={className}>
            {label}
        </Link>
    )
}

export default ButtonLink
