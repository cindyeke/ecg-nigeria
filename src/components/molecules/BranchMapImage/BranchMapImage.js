import Image from 'next/image'

const BranchMapImage = ({ selectedBranch }) => {
    const { locationImg } = selectedBranch
    return (
        <div className="h-1/2">
            <Image
                src={locationImg}
                alt="abuja-map"
                className="h-full object-cover"
            />
        </div>
    )
}

export default BranchMapImage
