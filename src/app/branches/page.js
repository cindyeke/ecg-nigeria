import Layout from '@components/template/Layout'
import { branchesInformation } from '@utilities/branches'
import SectionTitle from '@components/atoms/SectionTitle/SectionTitle'
import ImageLink from '@components/organisms/ImageLink/ImageLink'

export default function Branches() {
    return (
        <Layout>
            <div className="flex flex-col gap-y-10 my-10 px-5 md:px-10 xl:px-20">
                {branchesInformation.map(({ id, region, cities }) => (
                    <div key={id} className="mb-5">
                        <SectionTitle
                            title={region}
                            className="!text-blue-600 block text-center lg:text-left"
                        />
                        <div className="gap-y-10 gap-5 grid sm:grid-cols-2 lg:grid-cols-3 md:gap-x-10 my-6">
                            {cities.map(({ name, churchImg, id }) => (
                                <ImageLink
                                    key={name}
                                    src={churchImg}
                                    href={`/branches/${id}`}
                                    id={id}
                                >
                                    <span className="uppercase text-dim-white text-lg">
                                        {name}
                                    </span>
                                </ImageLink>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
