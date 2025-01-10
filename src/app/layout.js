import { Poppins, Raleway } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--font-poppins',
})

const raleway = Raleway({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
    display: 'swap',
    variable: '--font-raleway',
})

export const metadata = {
    title: 'ECG Nigeria',
    description:
        'Enlightened Christian Gathering The Jesus Nation Church in Nigeria',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${raleway.variable}`}>
                {children}
            </body>
        </html>
    )
}
