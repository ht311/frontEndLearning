
/**
 * fetcherのrequestクラスの基底
 */
export interface BaseRequest {
    url:string
}

/**
 * APIを発行するためのラッパー関数
 * @example <caption>\api\type\backlog\activities.tsを使用する場合の実装例</caption>
 * const req = new ActivityRequest(userAuth)
 * const res = await fetcher<ActivityResponse>(req)
 * @param request BaseRequestを継承したクラス
 * @returns APIの戻り値をResponseにパースした結果
 */
export const fetcher = async<Response>(request: BaseRequest): Promise<Response> =>
    fetch(request.url)
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(new Error("API失敗"))
            }

            return response.json()
        })
        .catch((error: Error) => {
            console.error(error)
            throw error
        })