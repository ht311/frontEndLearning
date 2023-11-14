import Link from 'next/link'
import Head from 'next/head'
import utilStyles from '../../../../styles/utils.module.css'
import { NextPage } from 'next'


const Home: NextPage<any> = () => {
    const siteTitle = 'Next.js Sample Website'

    // const userAuth:UserAuth = useContext(UserAuthContext)

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
                <h2 className={utilStyles.headingLg}>Login</h2>
                <div>
                    <Link href='../../login'>Login</Link>
                </div>
            </section>
            <section className={utilStyles.headingMd}>
                <h2>Util</h2>
                <div>
                    <Link href='../todo'>ToDoList</Link>
                </div>
                <div>
                    <Link href='../cat'>猫ちゃんの画像を見る</Link>
                </div>
                <div>
                    <Link href='../activities'>アクティビティ参照</Link>
                </div>
            </section>
        </>
    )
}

export default Home

//afoo
// API読み込みバージョン
// export const getStaticProps:GetStaticProps<HomeProps> = async()=>{
//     const res = await fetch('それっぽいurl')
//     return res.json()
// }

// ファイル読み込みバージョン
// export const getStaticProps: GetStaticProps<any> = async () => {
//     const allPostsData = getSortedPostsData()

//     return {
//         props: {
//             allPostsData
//         }
//     }
// }
