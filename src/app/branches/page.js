import Link from 'next/link'
import Layout from '@components/template/Layout'
import { branchesInformation } from '@utilities/branches'
import SectionTitle from '@components/atoms/SectionTitle/SectionTitle'
import ImageDescription from '@components/molecules/ImageDescription/ImageDescription'

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
                                <Link key={name} href={`/branches/${id}`}>
                                    <ImageDescription
                                        src={churchImg}
                                        id={id}
                                        alt={id}
                                    >
                                        <span className="uppercase text-dim-white text-lg">
                                            {name}
                                        </span>
                                    </ImageDescription>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    )
}
