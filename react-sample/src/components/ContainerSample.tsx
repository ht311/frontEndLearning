
type ContainerProps = {
    title: string
    children: React.ReactNode
}

//Containerは赤背景のボックスの中にタイトルと子要素を表示します
const Container = (props: ContainerProps): JSX.Element => {
    const { title, children } = props
    return (
        <div style={{ backgroundColor: 'red' }}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Praret = (): JSX.Element => {
    return (
        <Container title="Hello">
            <p>ここ背景色で囲まれるよ</p>
        </Container>
    )
}

export default Praret