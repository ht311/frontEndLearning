"use client";
import { fetcher } from "@api/fetcher";
import { ActivityRequest, ActivityResponse } from "@api/type/backlog/getActivities";
import Button from "@components/elements/button/button";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const Detail: React.FC = (): JSX.Element => {
    const { data: session } = useSession();
    const [activityResponse, setActivityResponse] = useState<ActivityResponse>();

    const onClick = async (session: Session) => {
        setActivityResponse(undefined);

        const req = new ActivityRequest(session.user);
        const res = await fetcher<ActivityResponse>(req);

        setActivityResponse(res);
    };

    useEffect(() => {
        const abortController = new AbortController();

        if (!session) return;
        onClick(session);

        return () => {
            abortController.abort();
        };
    }, [session]);

    return (
        <>
            <Button onClick={() => session && onClick(session)}>activityを更新する</Button>
            {/* loading...を毎回実装するのは面倒なので、本来はcomponent化するべきかも
                componentイメージ
                type props<T> = { children: React.ReactNode; loadingJudge: T | undefined };
                const component = <T,>(props: Props<T>): JSX.Element => {
                    return <>{props.loadingJudge ? props.children : <div>loading...</div>}</>;
                };
            */}
            {activityResponse ? (
                <ul>
                    {activityResponse.map((res) => (
                        <li key={res.id}>
                            <div>{typeConvertName(res.type)}</div>
                            {res.content.name && <div>Name:{res.content.name}</div>}
                            {res.content.summary && <div>Summary:{res.content.summary}</div>}
                        </li>
                    ))}
                </ul>
            ) : (
                <div>loading...</div>
            )}
        </>
    );
};
export default Detail;

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
