'use client'
import { useEffect, useState } from 'react'
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

    return (
        <section className="mt-12 relative h-[500px] md:h-[700px] md:mt-32 xl:h-[800px]">
            <BranchMapImage selectedBranch={selectedBranch} />
            <ScrollContainer className={styles['branches-info-section']}>
                {branchesInformation.map(
                    ({ id, name, address, locationImg }) => (
                        <BranchAddress
                            key={id}
                            label={name}
                            address={address}
                            handleSelectedBranch={(branch) =>
                                setSelectedBranch({ branch, locationImg })
                            }
                        />
                    ),
                )}
            </ScrollContainer>
            <div className={styles.description}>
                <span>
                    <b>6 branches</b>
                    across most zones in Nigeria
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
