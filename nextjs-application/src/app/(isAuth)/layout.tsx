import { ReactNode, useEffect, useState } from 'react'
import '../../../styles/global.css'
import Layout from '@/components/layouts/layout'
import UserAuthProvider from '@/contexts/userAuth/userAuthProvider'
import { UserAuth } from '@/contexts/userAuth/userAuth'
import { useRouter } from 'next/navigation'


const App = ({ children }: { children: ReactNode }) => {
    // const [userAuth, setUserAuth] = useState<UserAuth>({ apikey: "", url: "", isAuth: false })
    // const router = useRouter()
    // useEffect(() => {

    //     //console.log(window.localStorage.getItem("userAuth"))
    //     const userAuthJson = window.localStorage.getItem("userAuth") || "{}"
    //     //window.localStorage.removeItem("userAuth")
    //     // 未ログイン時は、login画面に飛ばす
    //     // if (userAuthJson === "{}") {
    //     //     router.push("./login")
    //     //     return
    //     // }

    //     // 認証失敗で到達不可のはずだが、念のため
    //     setUserAuth(JSON.parse(userAuthJson))
    //     // なぜか空になる...
    //     console.log("ここ")
    //     console.log(userAuth)
    //     // if (!(userAuth && userAuth.isAuth)) {
    //     //     router.push("./login")
    //     //     return
    //     // }
    // }, [])

    const userAuth: UserAuth = {
        url: "im-hirose",
        apikey: "wlhRepduX2ccDFanKYV8H66X77oYNiEIPIw1eVtvc2awwIo4Vjh3NBpUgVjMCm8g",
        isAuth: true
    }

    return (
        <Layout>
            <UserAuthProvider userAuth={userAuth}>
                {children}
            </UserAuthProvider>
        </Layout>
    )
}

export default App



export const metadata = {
    title: 'title',
    // 以下のように template を使用すると、他のレイアウトで title を設定時に `title | AppName` という形になる
    // title: {
    //   template: '%s | AppName',
    // },
    description: 'description',
}

