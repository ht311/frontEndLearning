import { NextPage } from "next";
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const H1 = styled.h1`
    color:red;
`

const Badge = styled.span`
    padding:8px 16px;
    font-weight:bold;
    text-align:center;
    color:white;
    background:red;
    border-radius:16px
`
type ButtonProps = {
    color: string
    backgroundColor: string
}

// 文字色と背景色が変更可能なボタン
// 型引数にpropsを定義
const Button = styled.button<ButtonProps>`
    color:${(props) => props.color};
    backgroundColor:${(props) => props.backgroundColor};
    border:2px solid ${(p) => p.color};

    font-size:2em;
    margin:1em;
    border-radius:8px;
    cursor:pointer;
`

const Home: NextPage = () => {
    return (
        <div className={styles.container} >
            <main className={styles.main}>
                ...
                <H1>
                    Welcome to <a href="https://nextjs.org/">Next.js!</a>
                </H1>
                <Badge>Hello World!</Badge>
                {/*赤文字で透明背景のボタン */}
                <Button backgroundColor="transparent" color="#FF0000" />
                {/*白色で青背景のボタン*/}
                <Button backgroundColor="#1E90FF" color="white" />
            </main>
        </div>
    )
}

export default Home