/* eslint-disable @next/next/no-img-element */
import Head from "next/head"
import styles from "./layout.module.css"
import utilStyles from '../../../styles/utils.module.css'
//import Image from 'next/image'
import Link from 'next/link'

const Layout = ({ children, home }: any): JSX.Element => {
    const name = 'takuya hirose'
    const siteTitle = 'Next.js Sample Website'

    //console.log('Layout読み込み！')

    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/images/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <img
                            src="/images/profileIcon.png"
                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                            alt={name}
                        />
                        <h1 className={`${utilStyles.heading2Xl}`}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                                <img
                                    src="/images/profileIcon.png"
                                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                                    alt={name}
                                />
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">←Back To Home</Link>
                </div>
            )}
        </div>
    )
}

export default Layout
