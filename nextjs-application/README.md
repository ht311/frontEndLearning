
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

- 開発者モードで起動
  - `npm run dev`
    - 実行時に静的解析、フォーマットも実行  
        静的解析が不要な場合は、`npm run dev-nolint`を実行
- 起動
  - `npm run start`
- ビルド
  - `npm run build`
- 静的解析、フォーマット
  - `npm run format`


## 使用技術

- 言語
  - [TypeScript](https://www.typescriptlang.org/)
- フレームワーク
  - [Next.js v13](https://nextjs.org/blog/next-13)
    - v14にするかは考慮するべき
- ライブラリ
  - 破壊的変更に備え依存は最低限にする  
      追加する場合は、ライブラリをラップして使いたい
  - [React v18](https://ja.react.dev/)
  - [Prettier](https://prettier.io/)
    - フォーマッター
  - [ESLint](https://eslint.org/)
    - 静的解析
  - [NextAuth](https://next-auth.js.org/)
    - 認証やセッション管理をしてくれるライブラリ、セッション管理はJWT、DBの選択も可能で便利
      - 今回はJWTでセッション管理
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


## ディレクトリ構成

参考にしたのは下記

- [ディレクトリ構成参考](https://zenn.dev/yutabeee/articles/5e32a99a3cab97)
  
components\parts
ボタンやラベルなどの簡単なパーツを定義

nextjs-application\components\template
ヘッダーフッターなどの共通的に使えるある程度の塊を定義


### 詳細

- public
  - 画像などのstaticでpublicなファイルを格納
- src
  - api
    - Rest APIに接続するための資産を定義
      - パスに紐づくページは`page.tsx`で定義する
        - 例：`app/home`のページは`app/home/page.tsx`
  - app
    - 本プロジェクトはApp Routerを適用
    - page専用のcomponentを定義する場合、`_components`フォルダに定義する
  - components
    - 汎用のcomponentを定義
    - elements
      - ボタンやラベルなどの、pageからのパラメータに大きく依存するcomponentを定義
      - モーダルあたりまではここに定義
    - layouts
      - ヘッダーやフッターなどの、pageからのパラメータに大きく依存しないcomponentを定義
        - ここで定義する大きく依存とは、パラメータによりcomponentが全く異なる挙動をすることとする
          - 例：ボタンであれば異なるAPIを発火するため、全く異なる挙動をするといえる
  - contexts
    - コンテキストを定義

  - app
    - app routerを使用
    - page専用のcomponentを定義する場合、`_components`フォルダに定義する
      - 例：`app/home`に専用のcomponentが必要な場合、`app/home/_components`に定義
      - フォルダ階層がURLのパスとなる
        - 例：`app/home`はhttp://{domain}/home
        - ただし、`(hoge)`のようにフォルダ名を()で囲った場合は、グループピングのためのフォルダと扱われルーティング対象外となる
          - 例1：`app/(hoge)/home`はhttp://{domain}/home
          - 例2：http://{domain}/(hoge) や http://{domain}/hoge は404となる
          - グループピングしたフォルダ配下に`layout.tsx` layout.tsxについては後述


## 課題

- [ ] importのフォーマット(自動でimport文を並び変える)
- [ ] スマホ対応
  - [ ] cssに@mediaを適用でいけるはず(詳しい人教えて...)


## その他参考

- [formについて](https://qiita.com/nuko-suke/items/1393995fd53ecaeb1cbc)
- [Next.js 13](https://reffect.co.jp/react/next-js-13)
- [request-memoization](https://nextjs.org/docs/app/building-your-application/caching#request-memoization)
-[デザインパターン](https://zenn.dev/ficilcom/articles/app_router_design_pattern)
https://zenn.dev/morinokami/books/learning-patterns-1/viewer/presentational-container-pattern

||Container|Presentational|
|:---|:---|:---|
|責務|ロジック|UI|
|状態|持つ|原則持たない|
|データの受け取り元|状態管理ライブラリ、API等|Props|
|UT|必要|最低限|
|IT|最低限|必要|

