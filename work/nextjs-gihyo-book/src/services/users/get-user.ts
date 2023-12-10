import { ApiContext, User } from '@/types/data'
import { fetcher } from '@/utils'

export type GetUserParams = {
  id: number

}

/**
 * ユーザ取得API
 * @param context APIコンテキスト
 * @param param パラメータ
 * @returns ユーザ
 */
const getUser = async (
  context: ApiContext,
  { id }: GetUserParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/${id}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
    },
  )
}

export default getUser
