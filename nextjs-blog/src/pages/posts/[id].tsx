import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../../components/layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import utilStyles from '../../../styles/utils.module.css'
import { ParsedUrlQuery } from "querystring";
import Head from "next/head";


type PostProps = {
    id: string
}

export const Post = ({ postData }: any): JSX.Element => {
    return (
        <>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>{postData.id}:{postData.date}</div>
                <div dangerouslySetInnerHTML={{__html:postData.contentHtml}}/>
            </article>
        </>
    )
}

export default Post

export const getStaticPaths: GetStaticPaths = async () => {
    // id としてとりうる値のリストを取得
    const paths = getAllPostIds()

    // fallbackをfalseにするとpathsで定義されたページ以外は404に飛ぶ
    return {
        paths,
        fallback: false
    }
}

interface PostParam extends ParsedUrlQuery {
    id: string
}

export const getStaticProps = async ({ params }: any) => {
    const postData =await getPostData(params.id)

    return {
        props: {
            postData
        }
    }
}
