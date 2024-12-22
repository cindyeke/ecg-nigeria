import { getCityInformation } from '@utilities/branches'
import Layout from '@components/template/Layout'
import BranchPage from '@components/pages/BranchPage/BranchPage'

export default function Page({ params }) {
    const { id, pageImg, name } = getCityInformation(params.branch)

    return (
        <div className="md:mx-auto h-full md:overflow-x-hidden">
            <Layout hasPageBanner={false}>
                <BranchPage id={id} coverImg={pageImg} name={name} />
            </Layout>
        </div>
    )
}
