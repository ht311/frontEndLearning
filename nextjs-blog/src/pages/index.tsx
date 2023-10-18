import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'


export default function Home() {
    const siteTitle = 'Next.js Sample Website'

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Selt Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <Link href="https://nextjs.org/learn">our Next.js tutorial</Link>.)
                </p>
            </section>
        </Layout>
    )
}
