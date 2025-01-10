import ImageDescription from '@components/molecules/ImageDescription/ImageDescription'
import BranchServices from '@components/pages/BranchPage/BranchServices'
import { pastors as branchPastors } from '@utilities/pastors'
import Image from 'next/image'
import BranchPastors from './BranchPastors'

const BranchPage = ({ branch }) => {
    const {
        id,
        pageImg: coverImg,
        name,
        address,
        phoneNumbers,
        description,
    } = branch
    const pastors = branchPastors[id]
    return (
        <>
            <div className="h-full w-full">
                <div className="w-full h-full bg-blue-600/80 absolute pt-[80px] z-50">
                    <div className="absolute bottom-3 right-0 px-3 text-base text-off-white capitalize font-secondary">
                        ECG The Jesus Nation Church, {name} branch
                    </div>
                </div>
                <Image
                    src={coverImg}
                    alt={id}
                    className="h-full object-cover"
                    layout="fill"
                />
            </div>
            <div className="px-5 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <div className="text-2xl font-bold">
                        <p>
                            ECG The Jesus Nation Church, {name} branch is
                            located at {address}
                        </p>
                    </div>
                    <p className="max-w-lg mx-auto my-3">{description}</p>
                    {phoneNumbers?.length > 0 && (
                        <p>
                            Reach us on
                            <span className="ml-1 font-bold text-teal-300">
                                {phoneNumbers?.join(', ')}
                            </span>
                        </p>
                    )}
                </div>
                <BranchServices branchId={id} name={name} />
                {pastors?.length > 0 && <BranchPastors pastors={pastors} />}
            </div>
        </>
    )
}

export default BranchPage
