
## 環境構築
本プロジェクトは[VSCode](https://code.visualstudio.com/)での開発を推奨

1. VSCodeの拡張機能をインストール
   1. [eslint(フォーマッター)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   2. [prettier(自動フォーマット)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
2. `npm install`で依存するパッケージをインストール

## プロジェクトの起動方法
- 開発者モードで起動
  - `npm run dev`
    - 実行時に静的解析、フォーマットも実行  
        静的解析が不要な場合は、引数に`--noFormat`を追加
- 起動
  - `npm run start`
- ビルド
  - `npm run build`
- 静的解析、フォーマット
  - `npm run format`

## 使用技術について
- [backlog API](https://developer.nulab.com/ja/docs/backlog/#)
- [ディレクトリ構成について](https://zenn.dev/yutabeee/articles/5e32a99a3cab97)
- [cssについて](https://nextjs.org/docs/app/building-your-application/styling)
- [css in modules](https://nextjs.org/docs/app/building-your-application/styling/css-modules)

components\parts
ボタンやラベルなどの簡単なパーツを定義

nextjs-application\components\template
ヘッダーフッターなどの共通的に使えるある程度の塊を定義


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
