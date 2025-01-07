import Layout from '@components/template/Layout'
import Link from 'next/link'

const AboutUs = () => {
    return (
        <Layout hasPageBanner>
            <div className="my-10 mx-5 grid gap-5 text-lg md:grid-cols-4 lg:text-xl">
                <p className="font-bold text-2xl md:col-span-4 md:w-[500px]">
                    Welcome to ECG TJNC Nigeria, the official online hub for the
                    growing presence of the Enlightened Christian Gathering, The
                    Jesus Nation Church (ECG TJNC) in Nigeria
                </p>
                <p className="md:col-span-2">
                    ECG Nigeria is part of the larger ECG family, headquartered
                    in Malawi, and founded by the visionary and anointed{' '}
                    <span className="text-teal-300">
                        Prophet Shepherd Bushiri
                    </span>
                    . Our church is one of the most vibrant and rapidly
                    expanding branches of ECG, bringing the powerful message of
                    faith, hope, and transformation to thousands of lives across
                    Nigeria.
                </p>
                <p className="md:col-span-2">
                    Our mission at ECG Nigeria is to spread the Gospel and serve
                    communities through a life-changing spiritual experience. We
                    are committed to promoting Christian values and building a
                    strong and united body of believers, empowering them to live
                    purposeful lives rooted in Christ.
                </p>
                <p className="md:col-span-2">
                    ECG Nigeria operates in multiple locations across the
                    country, with each branch dedicated to supporting
                    individuals and families through worship, fellowship, and
                    the life-changing Word of God. Our branches are spread all
                    across Nigeria, with the headquarters located in the heart
                    of the nation—Abuja, the capital city. Every branch is led
                    by dedicated pastors who carry out the mission of the church
                    with the guidance and support of the national leadership.
                </p>
                <p className="md:col-span-2">
                    Our National Pastor,{' '}
                    <span className="text-teal-300">
                        Apostle Wyson Bottoman
                    </span>
                    , oversees the entire work of ECG Nigeria. Apostle Wyson
                    Bottoman, a visionary leader and servant of God, works
                    closely with{' '}
                    <span className="text-teal-300">
                        Prophet Shepherd Bushiri
                    </span>
                    , who provides spiritual instructions and guidance to ensure
                    the church in Nigeria thrives and continues its mission of
                    reaching souls for Christ.
                </p>
                <p className="md:col-span-2">
                    At ECG Nigeria, we believe in building strong relationships
                    within our communities, and we are always ready to welcome
                    new members into our family of believers. On our website,
                    you can find detailed information about all of our active
                    branches, including their addresses, contact details, and
                    the current pastors who are committed to serving you.
                </p>
                <p className="md:col-span-2 text-teal-300">
                    Thank you for visiting{' '}
                    <Link href="/" className="underline font-bold">
                        ECG Nigeria
                    </Link>
                    . We invite you to explore the wonderful works happening at
                    our{' '}
                    <Link href="/branches" className="underline font-bold">
                        branches
                    </Link>{' '}
                    and to join us in experiencing God's power in your life.
                </p>
            </div>
        </Layout>
    )
}

export default AboutUs
