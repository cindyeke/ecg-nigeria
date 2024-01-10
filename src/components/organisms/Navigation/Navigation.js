import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Hamburger from '@components/molecules/Hamburger/Hamburger'
import ButtonLink from '@components/atoms/ButtonLink/ButtonLink'
import ECGLogo from '@images/ecg-logo.png'
import { navigationLinks } from '@utilities/navigation'
import styles from './Navigation.module.css'

const Navigation = ({ isVisible }) => {
    const [openHamburger, setOpenHamburger] = useState(false)
    const navContainer = clsx(styles['nav'], {
        [styles['visible']]: isVisible,
        '!h-full !items-start': openHamburger,
    })

    const navListStyles = clsx(
        { '!ml-0': openHamburger },
        styles['nav-list-wrapper'],
    )

    return (
        <div className={navContainer}>
            <div className="w-full md:h-full md:items-center md:flex md:justify-between">
                <Image
                    src={ECGLogo}
                    alt="logo"
                    className="mt-[6px] ml-3 w-16 h-16 md:w-20 md:h-20 md:mt-0"
                />
                <Hamburger
                    isOpen={openHamburger}
                    setIsOpen={setOpenHamburger}
                />
                <div className={navListStyles}>
                    {navigationLinks.map((navigationLink) => (
                        <ButtonLink
                            key={navigationLink.label}
                            label={navigationLink.label}
                            href={navigationLink.url}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navigation
