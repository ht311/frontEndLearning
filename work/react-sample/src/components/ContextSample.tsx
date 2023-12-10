import React from "react"

//Titleを渡すためのContext
const TitleContext = React.createContext('')

const Title = (): JSX.Element => {
    //consumerを通して、Contextを参照
    return (
        <TitleContext.Consumer>
            {/* consumer直下にFuntionを定義して、Contextの値を参照*/}
            {(title): JSX.Element => {
                return <h1>{title}</h1>
            }}
        </TitleContext.Consumer>
    )
}

const Header = (): JSX.Element => {
    return (
        <div>
            <Title />
        </div>
    )
}

//PageコンポーネントでContextに値を渡す
const Page = (): JSX.Element => {
    const title = 'React Book'

    //providerを通して、Contextに値を設定
    // この場合、provider配下のコンポーネントなら値を参照可
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page