import ImageDescription from '@components/molecules/ImageDescription/ImageDescription'

const BranchPastors = ({ pastors }) => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="text-3xl font-bold mb-3 text-center">
                Our Pastors
            </div>
            <div className="mt-10 mx-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                {pastors?.map(({ id, name, position, img }) => (
                    <ImageDescription src={img} key={id} alt={name}>
                        <div className="h-full w-full flex flex-col items-center justify-center text-base px-2 text-center">
                            <span className="font-light">{name}</span>
                            <span className="font-bold">{position}</span>
                        </div>
                    </ImageDescription>
                ))}
            </div>
        </div>
    )
}

export default BranchPastors
