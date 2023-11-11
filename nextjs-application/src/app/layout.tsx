import { ReactNode } from 'react'
//import { Providers } from './providers'

import { AppProps } from 'next/app'
import '../../styles/global.css'
import Layout from '../../components/layout'


//<Providers>{children}</Providers>
//export default function RootLayout({ children }: { children: ReactNode }) {
const App = ({ children }: { children: ReactNode }) => {
    return (
        <html lang="ja">
            <body>
                <main>
                    <Layout>
                        {children}
                    </Layout>
                </main>
            </body>
        </html>
        //            <Component {...pageProps} />
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

