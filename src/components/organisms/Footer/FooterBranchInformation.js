const FooterBranchInformation = ({ phoneNumbers, name }) => {
    return (
        <div>
            <span className="text-dim-white">{name}</span>
            {phoneNumbers?.length > 0 && (
                <div className="flex gap-x-4 text-teal-300">
                    {phoneNumbers.map((phoneNumber, index) => (
                        <span key={phoneNumber + index}>{phoneNumber}</span>
                    ))}
                </div>
            )}
        </div>
    )
}

export default FooterBranchInformation
