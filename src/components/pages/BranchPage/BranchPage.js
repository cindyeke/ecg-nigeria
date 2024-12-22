import ImageDescription from '@components/molecules/ImageDescription/ImageDescription'
import { speakers } from '@utilities/speakers'
import Image from 'next/image'

const BranchPage = ({ id, name, coverImg }) => {
    const speaker = speakers[id]
    return (
        <>
            <div className="h-full w-full">
                <div className="w-full h-full bg-blue-600/80 absolute pt-[80px]">
                    <div className="absolute bottom-0 right-2 text-sm text-gray-900 capitalize font-secondary">
                        ECG The Jesus Nation, {name} branch
                    </div>
                </div>
                <Image
                    src={coverImg}
                    alt={id}
                    className="h-full object-cover"
                />
            </div>
            <div className=" bg-blue-500 grid grid-cols-2">
                <div className=" bg-gray-200">
                    <ImageDescription src={speaker.img} />
                </div>
                <div className=" bg-gray-400">hi</div>
            </div>
        </>
    )
}

export default BranchPage
