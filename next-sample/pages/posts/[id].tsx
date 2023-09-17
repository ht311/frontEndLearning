import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { ParsedUrlQuery } from "querystring"

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const { id } = props
    const router = useRouter()

    if (router.isFallback) {
        // フォールバックページ向けの表示を返す
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel='icon' href="/favicon.ico" />
            </Head>
            <main>
                <p>このページは静的サイト生成によってビルド時に生成されています</p>
                <p>{`/post/${id}に対応するページです`}</p>
            </main>
        </div>
    )
}

// getStaticPathsは生成したいページのパスパラメータの組み合わせを示す
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [{
        params: {
            id: '1'
        }
    }, {
        params: {
            id: '2'
        }
    },
    {
        params: {
            id: '3'
        }
    }
    ]
    // fallbackをfalseにするとpathsで定義されたページ以外は404に飛ぶ
    //return { paths, fallback: false }
    return { paths, fallback: true }
}

// パラメータの型を定義
interface PostParams extends ParsedUrlQuery {
    id:string
}

// getStaticPaths実行後にそれぞれのパスに対して、getStaticPropsが実行される
export const getStaticProps:GetStaticProps<PostProps,PostParams> = async(context)=>{
    return {    
        props:{
            // paramsにgetStaticPathsで指定した値がそれぞれ入る
            id: context.params!['id']
        }
    }
}

export default Post