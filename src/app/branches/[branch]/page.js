import { getCityInformation } from '@utilities/branches'
import Layout from '@components/template/Layout'
import BranchPage from '@components/pages/BranchPage/BranchPage'

export default function Page({ params }) {
    const branch = getCityInformation(params.branch)

    return (
        <div className="md:mx-auto h-full md:overflow-x-hidden">
            <Layout>
                <BranchPage branch={branch} />
            </Layout>
        </div>
    )
}
