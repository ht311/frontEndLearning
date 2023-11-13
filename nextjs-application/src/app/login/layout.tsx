import { ReactNode } from 'react'


const App = ({ children }: { children: ReactNode }) => {

    return (
        <div>
            {children}
        </div>
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

