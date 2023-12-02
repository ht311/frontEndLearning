import { usePathname } from "next/navigation";
import { useState } from "react";

type ReturnProps = {
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
    const [params, setParams] = useState(new URLSearchParams());
    const path = usePathname();

    /**
     * アドレスバーを更新する
     * paramを変更した場合は、原則呼ぶ
     * useEffectで実現できそうだが、第二配列にparamsを指定しても動いてくれなかったのであきらめた
     * おそらくstringを依存させれば良い
     */
    const updateAddressBar = () => {
        const queryString = params.toString();
        if (queryString) {
            history.pushState("", "", path + "?" + queryString);
        } else {
            history.pushState("", "", path);
        }
    };

    /**
     * paramsを更新する
     * キーが重複した場合、上書きする
     * @param key 追加、更新するキー
     * @param value キーに紐づく値
     */
    const updateQueryString = (key: string, value: string) => {
        console.log(key.toString() + value.toString());
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
        if (params.has(key)) {
            params.delete(key);
            setParams(params);
            updateAddressBar();
        }
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
