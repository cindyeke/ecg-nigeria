import Button from '@components/atoms/Button/Button'
import SeparatorLine from '../SeparatorLine/SeparatorLine'
import styles from '@components/organisms/BranchLocation/BranchLocation.module.css'

const BranchAddress = ({ label, address, handleSelectedBranch }) => {
    return (
        <div className="flex items-center py-4 branch-address xs-sm:py-5">
            <div className={styles['address-wrapper']}>
                <Button
                    label={label}
                    className="font-light text-lg text-teal-300 xs-sm:text-xl md:text-2xl"
                    onClick={() => handleSelectedBranch(label)}
                />
                <span className="font-light text-sm text-center mt-3 xs-sm:text-base">
                    {address}
                </span>
            </div>
            <SeparatorLine property="vl" color="bg-gray-200" />
        </div>
    )
}

export default BranchAddress
