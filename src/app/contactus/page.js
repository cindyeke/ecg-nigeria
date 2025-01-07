import SendMessage from '@components/organisms/SendMessage/SendMessage'
import Layout from '@components/template/Layout'

export default function ContactUs() {
    return (
        <Layout hasPageBanner>
            <p className="mt-10 px-5 text-lg">
                Feel free to contact us using the phone numbers provided on each
                branch page or send us a message.
            </p>
            <SendMessage />
        </Layout>
    )
}
