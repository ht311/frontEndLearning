// Presenterに依存してはいけない
import { fetcher } from "@api/fetcher";
import { Activity, ActivityRequest } from "@api/type/backlog/getActivities";
import { User } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type ReturnProps = {
    /**
     * 再fetchしたい場合に呼ぶ
     */
    fetchActivity: () => void;
    /**
     * fetch中はfalse
     */
    isLoading: boolean;
    /**
     * isLoadingがtrueの場合、応答値
     * falseの場合、undefined
     */
    activityResponse: CustomActivityResponse[] | undefined;
};

type CustomActivityResponse = { name: string } & Activity;

const useFetchActivities = (): ReturnProps => {
    const { data: session } = useSession();
    const [activityResponse, setActivityResponse] = useState<CustomActivityResponse[]>();
    const [isLoading, setLoading] = useState(true);

    const fetchActivity = async () => {
        if (!session) return;
        setLoading(true);

        const res = await fetch(session.user);

        setActivityResponse(res);
        setLoading(false);
    };

    useEffect(
        () => {
            const abortController = new AbortController();

            if (!session) return;
            fetchActivity();

            return () => {
                abortController.abort();
            };
        },
        // fetchActivityがsessionに依存するため警告がでるが問題無し
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [session],
    );

    return { fetchActivity, isLoading, activityResponse };
};
export default useFetchActivities;

const fetch = async (user: User): Promise<CustomActivityResponse[]> => {
    const req = new ActivityRequest(user);

    const res = await fetcher<CustomActivityResponse[]>(req);
    res.forEach((r) => {
        r.name = typeConvertName(r.type);
    });
    return res;
};

// utilとかに移すべき
// hooksでビジネスロジックを解決するのは正しいはず
const typeConvertName = (type: number): string => {
    switch (type) {
        case 1:
            return "課題の追加";
        case 2:
            return "課題の更新";
        case 3:
            return "課題にコメント";
        case 4:
            return "課題の削除";
        case 5:
            return "Wikiを追加";
        case 6:
            return "Wikiを更新";
        case 7:
            return "Wikiを削除";
        case 8:
            return "共有ファイルを追加";
        case 9:
            return "共有ファイルを更新";
        case 10:
            return "共有ファイルを削除";
        case 11:
            return "Subversionコミット";
        case 12:
            return "GITプッシュ";
        case 13:
            return "GITリポジトリ作成";
        case 14:
            return "課題をまとめて更新";
        case 15:
            return "ユーザーがプロジェクトに参加";
        case 16:
            return "ユーザーがプロジェクトから脱退";
        case 17:
            return "コメントにお知らせを追加";
        case 18:
            return "プルリクエストの追加";
        case 19:
            return "プルリクエストの更新";
        case 20:
            return "プルリクエストにコメント";
        case 21:
            return "プルリクエストの削除";
        case 22:
            return "マイルストーンの追加";
        case 23:
            return "マイルストーンの更新";
        case 24:
            return "マイルストーンの削除";
        case 25:
            return "グループがプロジェクトに参加";
        case 26:
            return "グループがプロジェクトから脱退";
        default:
            return "判定不能";
    }
};
