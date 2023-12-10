import { useRef, useState } from "react"

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))


export const ImageUploader = (): JSX.Element => {
    //heddenのinputにアクセスするためのref
    const inputImageRef = useRef<HTMLInputElement | null>(null)

    // 選択されたファイルデータを保持
    const fileRef = useRef<File | null>(null)
    const [message, setMessage] = useState<String>('')

    // 「画像をアップロード」押下時のコールバック関数
    const onClickText = (): void => {
        if (!inputImageRef.current) return
        // inputのDOMにアクセスしてクリックイベントを発火
        inputImageRef.current.click()
    }

    // ファイルが選択されたときに呼ばれるコールバック関数
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const files = e.target.files

        if (!files) return
        if (files.length === 0) return

        fileRef.current = files[0]
    }

    // アップロードボタン押下時のコールバック関数
    const onClickUpload = async () => {
        if (!fileRef.current) return

        //通常はここでAPIをcallしてファイルをサーバにあげる
        // 疑似的に一定時間待機
        const UPLOAD_DELEY: number = 5000
        await sleep(UPLOAD_DELEY)

        // アップロードを成功したことにする
        setMessage(`${fileRef.current.name} のアップロード成功！`)
    }

    return (
        <div>
            <p style={{ textDecoration: 'underline' }} onClick={onClickText}>
                画像をアップロード
            </p>
            <input
                ref={inputImageRef}
                type='file'
                accept="image/*"
                onChange={onChangeImage}
                style={{ visibility: 'hidden' }}
            />
            <br />
            <button onClick={onClickUpload}>アップロードする</button>
            {!!message && <p>{message}</p>}
        </div>
    )
}
