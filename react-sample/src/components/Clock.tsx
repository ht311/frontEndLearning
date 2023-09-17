import { useEffect, useState } from "react"

// タイマーが呼び出される周期(ミリ秒)
const UPDATE_CYCLE: number = 1000

// localstrageで使用するキー
const KEY_LOCALE: string = 'KEY_LOCALE'

enum Locale {
    US = 'en-US',
    JP = 'ja-JP'
}

const judgeLocalFromString = (text: string): Locale => {
    switch (text) {
        case Locale.US:
            return Locale.US
        case Locale.JP:
            return Locale.JP
        default:
            return Locale.US
    }
}

const Clock = (): JSX.Element => {
    const [timestamp, setTimestamp] = useState(new Date())
    const [locale, setLocale] = useState(Locale.US)

    // タイマーセットの副作用
    useEffect(() => {
        // タイマーセット
        const timer = setInterval(() => {
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        // クリーンアップ関数でアンマウント字にタイマーを解除
        return () => {
            clearInterval(timer)
        }
        // 初期レンダリングのときのみ実行
    }, [])

    // localstorageから値を読み込む副作用
    useEffect(() => {
        const savedLocale: string | null = localStorage.getItem(KEY_LOCALE)
        if (!!savedLocale) {
            setLocale(judgeLocalFromString(savedLocale))
        }
    }, []
    )

    //localeが変化したとき、localstorageに値を設定する副作用
    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)
        // 依存配列にlocaleを渡して、localeが変化すれば動くようにする
    }, [locale])

    return (
        <div>
            <p>
                <span id='current-time-label'>現在時刻</span>
                <span>:{timestamp.toLocaleDateString(locale)}</span>
                <select value={locale} onChange={(e) => setLocale(judgeLocalFromString(e.target.value))}>
                    <option value='en-US'>en-US</option>
                    <option value='ja-JP'>ja-JP</option>
                </select>
            </p>
        </div>
    )
}

export default Clock
