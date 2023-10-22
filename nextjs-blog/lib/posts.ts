import fs from "fs"
import path from "path"
import matter from "gray-matter"
import {remark} from "remark"
import html from "remark-html"

const postsDirectory: string = path.join(process.cwd(), "posts")

const getSortedPostsData = () => {
    // /posts配下のファイル名を取得
    const fileNames: string[] = fs.readdirSync(postsDirectory)
    const allPostsData: any[] = fileNames.map((fileName: string) => {
        // ファイル名から拡張子(md)を削除したものを、idにする
        const id = fileName.replace(/\.md$/, '')

        // mdをread
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf-8')

        // 投稿のメタデータ解析
        const matterResult = matter(fileContents)

        // typeにして返す
        return {
            id,
            ...matterResult.data
        }
    })

    // 投稿を日付で降順ソート
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export default getSortedPostsData



export const getAllPostIds = (): any => {
    const fileNames = fs.readdirSync(postsDirectory)
    // 以下のような配列を返します:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName: string) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}


export const getPostData = async(id: string) => {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // 投稿のメタデータ解析
    const matterResult = matter(fileContents)

    // マークダウンをhtml形式に変換
    const processdContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processdContent.toString()
    

    // typeにして返す
    return {
        id,
        contentHtml,
        ...matterResult.data
    }

}