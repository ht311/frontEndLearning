
## 使い方

本プロジェクトはデプロイ済でアクセス可能  
[デプロイ済のアプリを触る](https://nextjs-application-coral.vercel.app/home)


## 環境構築

本プロジェクトはVSCodeでの開発を推奨

1. [VSCode](https://code.visualstudio.com/)をインストール
2. [node.js(LTS)](https://nodejs.org/en)をインストール
3. VSCodeの拡張機能をインストール
   1. [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   2. [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
4. 本プロジェクトフォルダをVSCodeで開く
5. ターミナル(ctrl+@で開く)で`npm install`を実行して依存するパッケージをインストール


## プロジェクトの起動方法

コマンドの詳細は`package.json`の`scripts`を参照

- 開発者モードで起動
  - `npm run dev`
    - [turbopack](https://nextjs.org/docs/architecture/turbopack)で起動は[バグ](https://github.com/vercel/turbo/issues/4979)に遭遇するため不可
- ビルド
  - `npm run build`
    - 実行時に静的解析、フォーマットも実行  
- 起動
  - `npm run start`
- 静的解析、フォーマット
  - `npm run format`
- bundleサイズ解析
  - `npm run analyzer`
    - 動きはするが設定がイマイチで起動時に空のページが複数開く
- storybook起動
  - `npm run storybook`
- storybook静的出力
  - `npm run build-storybook`
    - storybook-staticフォルダに出力される


## 使用技術

- 言語
  - [TypeScript](https://www.typescriptlang.org/)
- フレームワーク
  - [Next.js v14](https://nextjs.org/blog/next-14)
- ライブラリ
  - 破壊的変更に備え依存は最低限にする  
      追加する場合は、ライブラリをラップする
  - [React v18](https://ja.react.dev/)
  - [Prettier](https://prettier.io/)
    - フォーマッター
  - [ESLint](https://eslint.org/)
    - 静的解析
  - [NextAuth](https://next-auth.js.org/)
    - 認証やセッション管理をしてくれるライブラリ、セッション管理はJWT(json web token)、DBの選択も可能で便利
      - 今回はJWTでセッション管理
  - その他
    - `package.json`の`dependencies`、`devDependencies`を参照
- CSS
  - [cssについて](https://nextjs.org/docs/app/building-your-application/styling)
    - [css in modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)
      - CSSを専門のコーダーに任せるのであれば、CSS、TSXは分かれていたほうが開発が楽になるはず ~~(学習コストが低い)~~
- ホスティング
  - [Vercel](https://vercel.com/)
- API
  - [backlog API](https://developer.nulab.com/ja/docs/backlog/#)
- ディレクトリ
  - ディレクトリ構成を参照
- デザインパターン
  - backlog API使用箇所は[コンテナ・プレゼンテーションパターン](https://zenn.dev/morinokami/books/learning-patterns-1/viewer/presentational-container-pattern)を適用


## ディレクトリ構成

参考にしたのは下記
- [ディレクトリ構成参考](https://zenn.dev/yutabeee/articles/5e32a99a3cab97)

### 詳細

- public
  - 画像などのpublicでstaticなファイルを格納
- src
  - api
    - Rest APIに接続するための資産を定義
      - type配下にそれぞれのAPIのRequest、Responseを定義
      - fetcher.tsを通してAPI発行
  - app
    - 本プロジェクトはApp Routerを適用。特殊な意味合いを持つフォルダを除き、フォルダ通りにルーティングされる。
      - 詳細はApp Routerを参照
  - components
    - 汎用のcomponentを定義
    - common
      - ヘッダーやフッターなどの、pageからのパラメータに大きく依存しないcomponentを定義
        - ここで定義する大きく依存とは、パラメータによりcomponentが全く異なる挙動をすることとする
          - 例：ボタンであれば異なるAPIを発火するため、全く異なる挙動をするといえる
    - elements
      - ボタンやラベルなどのHTML Elementをスタイリング、ラップしたcomponentを定義
  - hooks
    - カスタムHookを定義 ※ドメインオブジェクトに近いイメージ
      - クライアントサイドで処理するロジックの場合、カスタムHookになりがち
      - 処理Aの実現のために、[React Hooks](https://udemy.benesse.co.jp/development/react-hooks.html)を複数使用する場合、  
       1つの関数Component(カスタムHook)にまとめて再利用可能にしたり、可読性の向上、テスタブルにする目的がある
        - 文章だけだと伝わりづらいので、hooks配下の資産を確認することを推奨
  - util
    - カスタムHookではないビジネスロジックを定義
      - 主にサーバーサイドで処理させるロジック
  - types
    - ライブラリの型定義の拡張を定義
  - lib
    - ライブラリのラッパーを定義
    - デザインパターンのinterfaceを定義
- styles
  - globalなcssを定義
- その他設定ファイル、フォルダ
  - .storybook
    - storybookの設定
  - .vscode
    - vscodeの設定
  - .env
    - 環境変数を定義
  - .eslintrc.yml
    - 静的解析ツールESLintの設定
  - .prettierrc.yml
    - フォーマッターPrettierの設定
  - next-env.d.ts
    - Next.js の型を TypeScript コンパイラで認識できるようにするためのファイル
  - next.config.js
    - Next.jsのコンフィグ
  - package.json
    - 依存しているライブラリや、プロジェクト名、スクリプト等を定義。mavenのpom.xmlみたいなもの
  - tsconfig.json
    - TypeScriptの設定


#### App routerについて
- ルーティングはフォルダ階層に従う
  - 例：`app/home`はhttp://{domain}/home
- 特殊なフォルダ命名
  - グルーピング
    - `(hoge)`のようにフォルダ名を()で囲った場合は、グループピングのためのフォルダと扱われルーティング対象外となる
      - 例1：`app/(hoge)/home`はhttp://{domain}/home
      - 例2：http://{domain}/(hoge) や http://{domain}/hoge は404となる
  - プライベートフォルダ
    - `_presenter`のように先頭に_を付けた場合は、privateなフォルダ扱いとなり、ルーティング対象外となる
      - 例：`app/home`に専用のcomponentが必要な場合、`app/home/_components`配下に専用のcomponentを定義して依存関係をわかりやすくする
  - 動的ルーティング
    - `[id]`のように[]で囲った場合は、動的なパスと扱われる
      - 例：`app/hoge/[id]`で定義しているときは、http://{domain}/hoge/id01にアクセスできる
        - Rest APIのパスパラメータ的なイメージでアクセスできるようになる。
        - [id]のpageで渡ってきたパラメータは参照可能で、もし不正なidの場合は404扱いにもできる
- その他にも様々な機能や特殊なフォルダ命名があるため、[公式ドキュメント](https://nextjs.org/docs/app)、[zennの記事](https://zenn.dev/yamadadayo123/articles/6cb4f586de0183)などを参照することを推奨
 

## Container Presenter pattern

||Container|Presenter|
|:---|:---|:---|
|責務|ロジック|UI|
|状態|持つ|原則持たない|
|データの受け取り元|Hooks、API等|Props|
|UT|必要|最低限|
|IT|最低限|必要|


## 課題

- [ ] importのフォーマット(自動でimport文を並び変える)
- [ ] スマホ対応
  - [ ] cssに@mediaを適用でいけるはず
- [ ] エラー画面のカスタム
- [ ] APIのエラー応答考慮
- [ ] jest


## 機能について

homeから遷移できる機能は下記

1. Backlog
   1. 最近の更新を見る
      1. 所属しているプロジェクトのアクティビティを参照する
   2. 課題を追加する
      1. 課題を追加できる
   3. 課題の一覧を見る
      1. 課題を検索して一覧表示できる
      2. 検索したときのキーをURLにqueryStringで保持するため、ブックマーク等に保存すれば検索条件を保存できる
      3. 検索結果の課題から課題を更新するモーダルを開き、課題を更新できる
         1. 課題を更新するモーダルを開いたまま、f5などで画面をリロードすると、課題を更新する画面が表示される
2. その他
   1. TodoList
      1. シンプルなTodoアプリ、追加したTodoを保存していないため画面を遷移すると全て削除される
         1. 初学者学習機能1つ目
   2. 猫の画像表示
      1. 猫の画像を表示するRest APIを発行して、応答値を画面に表示する
         1. 初学者学習機能2つ目


## その他参考

- [formについて](https://qiita.com/nuko-suke/items/1393995fd53ecaeb1cbc)
- [request-memoization](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)
- モーダル関連
  - [Intercepting Routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)
  - [Parallel Routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)
- [デザインパターン](https://zenn.dev/ficilcom/articles/app_router_design_pattern)
