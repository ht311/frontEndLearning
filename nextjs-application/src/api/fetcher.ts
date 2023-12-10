import { notFound } from "next/navigation";

/**
 * fetcherのrequestクラスの基底
 */
export interface BaseRequest {
    url: string;
    method: method;
    headers?: HeadersInit;
    body?: BodyInit;
}

export type method = "GET" | "POST" | "PATCH";

/**
 * APIを発行するためのラッパー関数
 * @example <caption>\api\type\backlog\activities.tsを使用する場合の実装例</caption>
 * const req = new ActivityRequest(user)
 * const res = await fetcher<ActivityResponse>(req)
 * @param request BaseRequestを継承したクラス
 * @returns APIの戻り値をResponseにパースした結果
 */
export const fetcher = async <Response>(request: BaseRequest): Promise<Response> =>
    fetch(request.url, {
        method: request.method,
        headers: request.headers,
        body: request.body,
    })
        .then((response) => {
            if (!response.ok) {
                // return response.text();
                console.error("url:" + request.url);
                console.error("method:" + request.method);
                console.error("headers:" + request.headers);
                console.error("body:" + request.body);
                console.error("status:" + response.status);
                return Promise.reject(new Error("API失敗"));
            }

            return response.json();
        })
        .catch((error: Error) => {
            console.error(error);
            // 一旦全部404扱いにする
            throw notFound();
        });
