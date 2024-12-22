import clsx from 'clsx'
import Image from 'next/image'
import FooterBranchInformation from '@components/organisms/Footer/FooterBranchInformation'
import { branchesInformation } from '@utilities/branches'
import FacebookIcon from '@svgs/facebook-icon.svg'
import InstagramIcon from '@svgs/instagram-icon.svg'
import styles from './Footer.module.css'

const Footer = () => {
    const cities = branchesInformation.flatMap((branch) => branch.cities)

    return (
        <footer className={styles.footer}>
            <div className={styles['footer-first-section']}>
                <span className={styles.title}>Contact</span>
                <div className={styles['footer-branch-info']}>
                    {cities.map(({ name, phoneNumbers }) => (
                        <FooterBranchInformation
                            key={name.trim().toLowerCase()}
                            name={name}
                            phoneNumbers={phoneNumbers}
                        />
                    ))}
                </div>
            </div>
            <div className="my-10 md:m-0">
                <span className={clsx(styles.title, '!text-dim-white')}>
                    Connect
                </span>
                <div className="flex gap-x-4 md:gap-x-7">
                    <a href="#">
                        <Image
                            src={FacebookIcon}
                            alt="facebook"
                            className={styles['footer-social-icon']}
                        />
                    </a>
                    <a href="#">
                        <Image
                            src={InstagramIcon}
                            alt="instagram"
                            className={styles['footer-social-icon']}
                        />
                    </a>
                </div>
            </div>
            <div className={styles['copyright-text']}>
                &#169; Copyright {new Date().getFullYear()} ECG Nigeria
            </div>
        </footer>
    )
}

export default Footer
