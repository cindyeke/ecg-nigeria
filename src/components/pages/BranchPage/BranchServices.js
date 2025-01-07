import Image from 'next/image'
import { branchServices } from '@utilities/branchServices'
import { icons } from '@utilities/icons'

const BranchServices = ({ branchId, name }) => {
    const services = branchServices[branchId]

    return (
        <div className="my-16 max-w-5xl mx-auto">
            <div className="text-center mb-8">
                <div className="text-3xl font-bold mb-3">Our Services</div>
                <div className="max-w-3xl mx-auto">
                    We warmly invite you to join us for our services at ECG TJNC
                    <span className="ml-1">{name}</span>. It’s our pleasure to
                    welcome you and share in this uplifting experience together.
                </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                {services.length > 0 &&
                    services.map((service) => (
                        <Service key={service.id} service={service} />
                    ))}
            </div>
        </div>
    )
}

export default BranchServices

const Service = ({ service }) => {
    const { iconId, name, description, dateTime } = service
    return (
        <div className="h-full py-5 rounded-md bg-teal-100 flex flex-col gap-y-6 items-center">
            <div className="bg-off-white h-20 w-20 flex justify-center items-center rounded-[50%]">
                <Image
                    src={icons[iconId]}
                    alt="gathering"
                    className="w-12 h-12 fill-teal-300"
                />
            </div>
            <span className="text-xl font-bold">{name}</span>
            <span className="px-10 text-center">{description}</span>
            <span className="font-bold text-xl text-teal-300 mt-auto">
                {dateTime}
            </span>
        </div>
    )
}
