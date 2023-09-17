import { GetStaticProps, NextPage } from "next"
import Head from "next/head"

// ページコンポーネントのprops定義
type SSGProps={
    message:string
}

// SSG向けのページ実装
// NextPageはNext/jsのPages向けの型らしい
const SSG:NextPage<SSGProps>=(props:SSGProps)=>{
    const {message} = props


    return (
        <div>
        {/* headで書こうと、<head>タグに配置される */ }
            <Head>
                <title>Static Site Generation</title>
                <link rel="icon" href="/favicon.ico"></link>
            </Head>
            <main>
                <p>このページは静的サイト生成によってビルド時に生成されています</p>
                <p>{message}</p>
            </main>
        </div>
    )
}

// getStaticPropsはビルド時に走る
export const getStaticProps:GetStaticProps<SSGProps> = async(context)=>{
    const timeStamp = new Date().toLocaleString()
    const message=`${timeStamp}にgetStaticPropsが実行されました`
    // 画面を表示したときには出力されない。ビルド時にコンソールに吐かれる
    console.log(message)

    // 返したpropsを元にページコンポーネントを作成する
    return {
        props:{
            message,
        }
    }

}

export default SSG