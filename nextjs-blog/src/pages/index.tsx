import Link from 'next/link'
import Layout from '../../components/layout'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'
import getSortedPostsData from '../../lib/posts'
import { GetStaticProps, NextPage } from 'next'

type HomeProps = {
    allPostsData: any[]
}

export const Home: NextPage<HomeProps> = ({ allPostsData }: HomeProps) => {
    const siteTitle = 'Next.js Sample Website'

    return (
        <>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>[Your Selt Introduction]</p>
                <p>
                    (This is a sample website - you’ll be building a site like this on{' '}
                    <Link href="https://nextjs.org/learn" target="_blank" >our Next.js tutorial</Link>.)
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`posts/${id}`}>
                                {title}
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                {date}
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={utilStyles.headingMd}>
                <h2>Util</h2>
                <Link href='todo'>ToDoList</Link>
            </section>
        </>
    )
}

export default Home

//a
// API読み込みバージョン
// export const getStaticProps:GetStaticProps<HomeProps> = async()=>{
//     const res = await fetch('それっぽいurl')
//     return res.json()
// }

// ファイル読み込みバージョン
export const getStaticProps: GetStaticProps<any> = async () => {
    const allPostsData = getSortedPostsData()

    return {
        props: {
            allPostsData
        }
    }
}
