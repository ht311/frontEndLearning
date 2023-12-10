import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"

type SSRProps ={
    message:string
}

const SSR:NextPage<SSRProps>=(props)=>{
    const {message} = props

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>このページはサーバサイドレンダリングによってアクセス時にレンダリングされたページです</p>
                <p>{message}</p>
            </main>
        </div>
    )
}

            
export const getServerSideProps : GetServerSideProps<SSRProps>=async(context)=>{
    const timeStamp = new Date().toLocaleString()
    
    const message = `${timeStamp}にこのページのgetServerSidePropsが実行された`
    console.log(message)
    console.log(context.resolvedUrl)

    return {
        props:{
            message
        }
    }
}
export default SSR