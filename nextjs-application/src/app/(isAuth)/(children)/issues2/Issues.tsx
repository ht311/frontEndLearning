import SearchItemsContainer from "./SearchItemsContainer";
import IssuesPresenter from "./IssuesPresenter";

/**
 * - SearchItemsContainer
 *  - サーバーサイドで実行
 * - IssuesPresenter
 *  - クライアントサイドで実行
 *  - 内部でSearchItemsPresenterが依存しているため、SearchItemsContainerの応答値を引数に持つ
 * 依存関係が複雑になっているがservercomponent、clientcomponentの使用上、仕方ない気もする...
 * パフォーマンスを無視して、SearchItemsContainerに紐づくデータフェッチをクライアントサイドで実行する場合、
 * IssuesPresenter内部でSearchItemsContainerを実行するだけなので依存関係はすっきりする
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
