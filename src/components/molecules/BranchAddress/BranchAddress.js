import Button from '@components/atoms/Button/Button'
import SeparatorLine from '../SeparatorLine/SeparatorLine'
import styles from '@components/organisms/BranchLocation/BranchLocation.module.css'
import clsx from 'clsx'

const BranchAddress = ({
    label,
    address,
    handleSelectedBranch,
    selected = false,
}) => {
    return (
        <div className="flex items-center py-4 branch-address xs-sm:py-5">
            <div className={styles['address-wrapper']}>
                <Button
                    label={label}
                    className={clsx(
                        'font-light text-lg text-teal-100 xs-sm:text-xl md:text-2xl px-2',
                        { 'border-b-2 border-b-teal-300': selected },
                    )}
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
