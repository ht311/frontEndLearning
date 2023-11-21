"use client";
import { fetcher } from "@api/fetcher";
import { ActivityRequest, ActivityResponse } from "@api/type/backlog/activities";
import Button from "@components/elements/button/button";
import { UserAuth } from "@contexts/userAuth/userAuth";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export const Detail: React.FC = (): JSX.Element => {
    const [activityResponse, setActivityResponse] = useState<ActivityResponse>();
    const { data: session } = useSession();

    const userAuth: UserAuth = {
        url: session?.user.url || "",
        apikey: session?.user.apiKey || "",
        isAuth: true,
    };
    const onClick = async () => {
        const req = new ActivityRequest(userAuth);
        const res = await fetcher<ActivityResponse>(req);
        setActivityResponse(res);
    };

    useEffect(() => {
        onClick();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const typeJudge = (type: number): JSX.Element => {
        switch (type) {
            case 1:
                return <div>課題の追加</div>;
            case 2:
                return <div>課題の更新</div>;
            case 3:
                return <div>課題にコメント</div>;
            case 4:
                return <div>課題の削除</div>;
            case 5:
                return <div>Wikiを追加</div>;
            case 6:
                return <div>Wikiを更新</div>;
            case 7:
                return <div>Wikiを削除</div>;
            case 8:
                return <div>共有ファイルを追加</div>;
            case 9:
                return <div>共有ファイルを更新</div>;
            case 10:
                return <div>共有ファイルを削除</div>;
            case 11:
                return <div>Subversionコミット</div>;
            case 12:
                return <div>GITプッシュ</div>;
            case 13:
                return <div>GITリポジトリ作成</div>;
            case 14:
                return <div>課題をまとめて更新</div>;
            case 15:
                return <div>ユーザーがプロジェクトに参加</div>;
            case 16:
                return <div>ユーザーがプロジェクトから脱退</div>;
            case 17:
                return <div>コメントにお知らせを追加</div>;
            case 18:
                return <div>プルリクエストの追加</div>;
            case 19:
                return <div>プルリクエストの更新</div>;
            case 20:
                return <div>プルリクエストにコメント</div>;
            case 21:
                return <div>プルリクエストの削除</div>;
            case 22:
                return <div>マイルストーンの追加</div>;
            case 23:
                return <div>マイルストーンの更新</div>;
            case 24:
                return <div>マイルストーンの削除</div>;
            case 25:
                return <div>グループがプロジェクトに参加</div>;
            case 26:
                return <div>グループがプロジェクトから脱退</div>;
            default:
                return <div>判定不能</div>;
        }
    };

    return (
        <>
            <Button onClick={onClick}>activityを更新する</Button>
            <ul>
                {activityResponse?.map((res) => (
                    <li key={res.id}>
                        {typeJudge(res.type)}
                        {res.content.name && <div>Name:{res.content.name}</div>}
                        {res.content.summary && <div>Summary:{res.content.summary}</div>}
                    </li>
                ))}
            </ul>

            <div>url:{userAuth.url}</div>
        </>
    );
};
export default Detail;
