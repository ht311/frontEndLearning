import { ApiContext, User } from "@/types/data";
import { fetcher } from "@/utils";

export type SigninParams = {
    username: string
    password: string
}

/**
 * 認証API
 * @param context APIコンテキスト
 * @param signinParams パラメータ
 * @returns ログインユーザ
 */
const signin
    = async (context: ApiContext, signinParams: SigninParams): Promise<User> => {
        return await fetcher(
            `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'content-type': 'application/json'
                },
                body: JSON.stringify(signinParams)
            }
        )
    }

export default signin