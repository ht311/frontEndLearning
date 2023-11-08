import { NextApiRequest, NextApiResponse } from 'next'
import path from "path"
import fs from "fs";
import { Console } from 'console';

type Task = {
    name: string
    isComplete: boolean
}

const handler = (req: NextApiRequest, res: NextApiResponse<Task>) => {
    //API投げずにjsonを直接読み込む形式にmock
    const postsDirectory: string = path.join(process.cwd(), "src/pages/api/mock/todo.json")
    const json:string = fs.readFileSync(postsDirectory,"utf-8")
    console.log(json)
    res.end()
    //return JSON.parse(json)

    // // ユーザー情報の偽装
    // const user: User = {
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    // }

    // res.status(200).json(user)

}

export default handler