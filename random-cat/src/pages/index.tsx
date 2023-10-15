import { GetServerSideProps, NextPage } from "next";
import { useEffect, useState } from "react"
import {Button} from "@material-ui/core"

// getSertverSidePropsから渡される
type Props = {
    initialImageUrl: string
}

const IndexPage: NextPage<Props> = ({ initialImageUrl }) => {
    const [imageUrl, setImageUrl] = useState(initialImageUrl)
    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     feathImage().then((newImage) => {
    //         setImageUrl(newImage.url)
    //         setLoading(false)
    //     })
    // }, [])

    const handleClick = async () => {
        setLoading(true)
        const newImage = await feathImage()
        setImageUrl(newImage.url)
        setLoading(false)
    }

    return (
        <>
            <Button variant="contained" onClick={handleClick}>他のにゃんこも見る</Button>
            <div>{loading ? "読み込み中..." : <img src={imageUrl} />}</div>
        </>
    )
}

export default IndexPage

// サーバーサイドで実行！
export const getSertverSideProps:GetServerSideProps<Props> =async()=>{
    const image = await feathImage();
    return {
        props:{
            initialImageUrl:image.url
        }
    }
}

type Image = {
    url: string
}
const isImage = (image: Image): image is Image => {
    if (!image || typeof image !== "object") return false

    return "url" in image && typeof image.url === "string"
}

const feathImage = async (): Promise<Image> => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search")
    const images = await response.json();

    if (!Array.isArray(images)) {
        throw new Error("API失敗")
    }
    const image = images[0]
    if (!isImage(image)) {
        throw new Error("画像取得失敗")
    }

    return image
}

