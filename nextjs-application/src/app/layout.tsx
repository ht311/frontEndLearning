import { ReactNode } from 'react'
import '../../styles/global.css'
import { UserAuth } from '@/contexts/userAuth/userAuth'


const App = ({ children }: { children: ReactNode }) => {
    // const [userAuthJson, setUserAuthJson] = useState("")
    // useEffect(() => {
    //     setUserAuthJson(window.localStorage.getItem("userAuth") || "")
        
    // },[])

    // // 未ログイン時は、login画面に飛ばす
    // if (userAuthJson.length === 0) {
    //     const router = useRouter()
    //     router.push("./login")
    //     return
    // }

    // // 認証失敗で到達不可のはずだが、念のため
    // const userAuth: UserAuth = JSON.parse(userAuthJson)
    // if (!userAuth.isAuth) {
    //     const router = useRouter()
    //     router.push("./login")
    //     return
    // }
    // const userAuth: UserAuth = {
    //     url:"im-hirose",
    //     apikey:"wlhRepduX2ccDFanKYV8H66X77oYNiEIPIw1eVtvc2awwIo4Vjh3NBpUgVjMCm8g",
    //     isAuth:true
    // }

    return (
        <html lang="ja">
            <body>
                <main>
                    {/* <Layout>
                        <UserAuthProvider userAuth={userAuth}> */}
                            {children}
                        {/* </UserAuthProvider>
                    </Layout> */}
                </main>
            </body>
        </html>
    )
}

export default App



// export const metadata = {
//     title: 'title',
//     // 以下のように template を使用すると、他のレイアウトで title を設定時に `title | AppName` という形になる
//     // title: {
//     //   template: '%s | AppName',
//     // },
//     description: 'description',
// }

