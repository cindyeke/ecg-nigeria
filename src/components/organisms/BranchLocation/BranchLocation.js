'use client'
import { useState } from 'react'
import { ScrollContainer } from 'react-indiana-drag-scroll'
import BranchMapImage from '@components/molecules/BranchMapImage/BranchMapImage'
import BranchAddress from '@components/molecules/BranchAddress/BranchAddress'
import { branchesInformation } from '@utilities/branches'
import AbjLocationMap from '@images/abj-location.png'
import 'react-indiana-drag-scroll/dist/style.css'
import styles from './BranchLocation.module.css'

const BranchLocation = () => {
    const [selectedBranch, setSelectedBranch] = useState({
        branch: 'Abuja',
        locationImg: AbjLocationMap,
    })

    const cities = branchesInformation.flatMap((branch) => branch.cities)

    return (
        <section className="pt-12 relative h-[500px] md:h-[700px] md:pt-32 xl:h-[800px] bg-dim-white">
            <BranchMapImage selectedBranch={selectedBranch} />
            <ScrollContainer className={styles['branches-info-section']}>
                {cities.map(({ name, address, locationImg }) => (
                    <BranchAddress
                        key={name.trim().toLowerCase()}
                        label={name}
                        address={address}
                        handleSelectedBranch={(branch) =>
                            setSelectedBranch({ branch, locationImg })
                        }
                    />
                ))}
            </ScrollContainer>
            <div className={styles.description}>
                <span>
                    <b>{cities.length} branches</b>
                    across all zones in Nigeria
                </span>
                <span>
                    <b>1 National branch and office</b>
                    in Abuja
                </span>
            </div>
        </section>
    )
}

export default BranchLocation
