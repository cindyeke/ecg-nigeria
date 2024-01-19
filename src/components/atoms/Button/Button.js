const Button = ({ label, className, onClick, type = 'button' }) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button
