import Link from 'next/link'

const ButtonLink = ({ label, href, className, handleButtonClick }) => {
    return (
        <Link href={href} className={className} onClick={handleButtonClick}>
            {label}
        </Link>
    )
}

export default ButtonLink
