import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

type ReturnProps = {
    // このhooksを使う側の資産の可読性のために敢えて冗長な変数名にしている
    // 使う側の資産でasを使えばいいが、ここで解決できるならそうするべきと判断
    /**
     * queryStringの値を更新したい場合に呼ぶ
     * キーが重複した場合、上書きする
     * @param key 追加、更新するキー
     * @param value キーに紐づく値
     */
    updateQueryString: (key: string, value: string) => void;
    /**
     * queryStringの値を削除したい場合に呼ぶ
     * キーが該当しない場合は何もしない
     * @param key 削除するキー
     */
    removeQueryString: (key: string) => void;
    /**
     * queryStringを返す
     * @returns 作成したqueryString(k1=v1&k2=v2形式でパスなどは含まれない)
     */
    getQueryString: () => string;
};

/**
 * queryStringを扱うHooks
 */
const useQueryString = (): ReturnProps => {
    const [params, setParams] = useState(new URLSearchParams(useSearchParams()));
    const path = usePathname();
    const router = useRouter();

    /**
     * アドレスバーを更新する
     * paramを変更した場合は、原則呼ぶ
     * useEffectで実現できそうだが、第二配列にparamsを指定しても動いてくれなかったのであきらめた
     * おそらくstringを依存させれば良い
     */
    const updateAddressBar = () => {
        const queryString = params.toString();
        if (queryString) {
            // routerで制御しない場合、他の資産でrouter.back()等による制御ができなくなるが、
            // アドレスバーの更新だけのために、router.replaceやpushを使いたくない
            // 機能追加を待つか、拡張するかのどちらか？
            // ※主にmodalがIntercepting Routes、Parallel Routesを採用しているため、
            //   公式の推奨通りモーダルはrouter.backで閉じたい
            // https://nextjs.org/docs/app/api-reference/functions/use-router
            // https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes
            // https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
            router.replace(path + "?" + queryString);
            // history.state("", "", path + "?" + queryString);
        } else {
            router.replace(path);
            // history.state("", "", path);
        }
    };

    /**
     * paramsを更新する
     * キーが重複した場合、上書きする
     * @param key 追加、更新するキー
     * @param value キーに紐づく値
     */
    const updateQueryString = (key: string, value: string) => {
        params.set(key, value);
        setParams(params);

        updateAddressBar();
    };

    /**
     * queryStringの値を削除したい場合に呼ぶ
     * キーが該当しない場合は何もしない
     * @param key 削除するキー
     */
    const removeQueryString = (key: string) => {
        if (!params.has(key)) {
            return;
        }
        params.delete(key);
        setParams(params);

        updateAddressBar();
    };

    /**
     * queryStringを返す
     * @returns 作成したqueryString(k1=v1&k2=v2形式でパスなどは含まれない)
     */
    const getQueryString = () => {
        return params.toString();
    };

    return { updateQueryString, removeQueryString, getQueryString };
};

export default useQueryString;
