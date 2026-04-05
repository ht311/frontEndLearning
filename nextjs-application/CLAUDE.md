# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# 開発サーバー起動（Turbopackは既知のバグあり、標準バンドラーを使うこと）
npm run dev

# ビルド（ESLint修正 + Prettier整形 + Next.jsビルドを実行）
npm run build

# lint + フォーマットのみ
npm run lint

# Storybook起動（ポート6006）
npm run storybook

# バンドルサイズ分析
npm run analyzer
```

テストフレームワークは未導入（TODO）。

## アーキテクチャ概要

**Backlog API** と連携したIssue管理Webアプリ。Next.js 16 App Router + NextAuth v4 + React 19 を使用。

### ディレクトリ構成の考え方

- `src/app/` — App Routerのページ。`(isAuth)/(children)/` 配下がすべて認証必須ルート
- `src/app/@modal/` — Parallel Routes によるモーダル表示（Intercepting Routes 使用）
- `src/components/common/` — ヘッダー・フッター・サイドメニュー・モーダル等のレイアウト系
- `src/components/elements/` — ボタン・インプット等のUIプリミティブ（各自 `.stories.tsx` あり）
- `src/api/` — Backlog API通信層。リクエスト/レスポンスは型付きクラスで管理
- `src/hooks/` — ドメインロジックをカプセル化したカスタムフック
- `src/lib/` — 外来ライブラリのラッパー（NextAuth, Builderパターン等）
- `src/util/` — ユーティリティ関数

### Container / Presenter パターン

Backlog API連携機能では、ページごとに `_container/` と `_presenter/` に分割している。

- `_container/` — データフェッチとロジック（Server Component または `"use client"` + カスタムhooks）
- `_presenter/` — UIの描画のみ（propsを受け取って表示）

**Server/Client混在パターン（findIssues等）:**
サーバーサイドのデータフェッチ結果をクライアントコンポーネントに渡す場合、Server Component（`IssuesServer.tsx`）がフェッチしてクライアントコンポーネント（`IssuesClient.tsx`）へpropsで渡す構成をとる。

### API通信

`src/api/fetcher.ts` の `fetcher<T>(request)` を通じてすべてのAPIリクエストを行う。

```typescript
// 使用例
const req = new GetIssueRequest(user, id);
const res = await fetcher<GetIssueResponse>(req);
```

リクエストクラスは `BaseRequest` インターフェースを継承し、`GET` / `POST` / `PATCH` に対応。APIエラーは全て `notFound()` にフォールバック。セッションの `user` オブジェクト（Backlog URL + APIキー含む）をリクエストクラスに渡してヘッダーを構築するパターン。

### モーダル（Parallel Routes + Intercepting Routes）

`src/app/@modal/(.)updateIssue/[id]/page.tsx` がインターセプトルート。`/updateIssue/[id]` への遷移をキャッチしてモーダル表示し、ページリロード時は通常ページとして表示する。`src/app/layout.tsx` で `@modal` スロットを受け取る構成。

### 認証

NextAuth Credentials providerを使用。Backlog URL + APIキーで認証。JWTセッション戦略。`src/middleware.ts` で `/login` 以外の全ルートを保護。セッション取得は `src/lib/nextAuth/util/sessionUtil.ts` の `getServerSession()` を使う。

### スタイリング

CSSモジュール（`.module.css`）を主体とし、グローバルスタイルは `styles/global.css`。CSS-in-JSは使用しない（CSSスペシャリストが独立作業できるようにするため）。

### パスエイリアス

`tsconfig.json` と `next.config.js` で定義済み：

```
@app, @util, @types, @api, @components, @contexts, @lib, @styles, @hooks
```

## コーディング規約

- **Prettier**: 文字幅100、インデント4スペース（`.prettierrc.yml`）
- **TypeScript**: strict mode有効
- 外来ライブラリは直接使用せずラッパーを介する（破壊的変更への対策）
- `src/lib/designPattern/Builder.ts` の `Builder<T>` インターフェースをリクエストクラス構築に活用

## 環境変数

`.env.development` と `.env.production` を参照。本番はVercelにデプロイ。必要な変数：
- `NEXTAUTH_SECRET` / `NEXT_PUBLIC_SECRET`
- `NEXTAUTH_URL`（開発）/ `NEXT_PUBLIC_VERCEL_URL`（本番）

## 常に日本語で回答すること
