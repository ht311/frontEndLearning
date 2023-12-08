import SearchItemsContainer from "../_container/SearchItemsContainer";
import IssuesPresenter from "./IssuesPresenter";

/**
 * - SearchItemsContainer
 *  - サーバーサイドで実行
 * - IssuesPresenter
 *  - クライアントサイドで実行
 *  - 内部でSearchItemsPresenterが依存しているため、SearchItemsContainerの応答値を引数に持つ
 *  - 依存関係が複雑になっているがservercomponent、clientcomponentの使用上、仕方ない気もする...
 *  - パフォーマンスを無視して、SearchItemsContainerに紐づくデータフェッチをクライアントサイドで実行する場合、
 *  - IssuesPresenter内部でSearchItemsContainerを実行するだけなので依存関係はすっきりする
 *
 *  - nextjs v14ならclientcomponentにserveractionを書けるので、複雑な依存関係は改善できるかも(可読性がどうなるかは要検証)
 */
const Issues = async (): Promise<JSX.Element> => {
    const { projectOptions, issueTypeIdsOptions, prioritiesOptions } = await SearchItemsContainer();

    return (
        <IssuesPresenter
            projectOptions={projectOptions}
            issueTypeIdsOptions={issueTypeIdsOptions}
            prioritiesOptions={prioritiesOptions}
        />
    );
};
export default Issues;
