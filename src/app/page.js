import SeparatorLine from '@components/molecules/SeparatorLine/SeparatorLine'

export default function Home() {
    return (
        <>
            {/* <Image
                src={VercelImg}
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
            /> */}
            <div>Welcome</div>
            <div className="h-14">
                <SeparatorLine color="bg-red-700" />
            </div>
        </>
    )
}
