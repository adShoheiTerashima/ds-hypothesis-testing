# AC Component Catalog

このリポジトリは、AC で使う UI コンポーネントカタログ用です。

## 環境構築

1. git clone する
1. node-version に合わせて node 周りを install
1. yarn をインストール

## 採用技術

- React & Typescript
- storybook
- rollup(package 作成用)
-

## ディレクトリ構造

```shell
packages
└── atoms
    ├── CHANGELOG.md
    ├── components
    │   ├── [コンポーネント名]
    │   │   ├── コンポーネント名.stories.tsx
    │   │   └── コンポーネント名.tsx
    │   └── index.ts
    ├── dist # buildされたファイルがここにきます
    ├── index.ts
    ├── package.json
    ├── rollup.config.js
    ├── tsconfig.json
    └── types
        ├── components
        │   ├── Button
        │   │   ├── Button.d.ts
        │   │   ├── Button.stories.d.ts
        │   │   └── index.d.ts
        │   └── index.d.ts
        ├── index.d.ts
        └── rollup.config.d.ts
```

## 禁止事項

- npm ではなく yarn を利用してください。
- yarn3 等バージョンアップする際、pnp は使わないようにしてください。
- 各コンポーネント共通化を意識してください。ビジネスロジックを持たせるのは NG で

## 資料

- [Figma: デザインシステム関連](https://www.figma.com/file/cmd10a6316x1QM5Htb2CEi/Components?node-id=0%3A1)
- [Redmine: 案件管理](http://pjm.ambassador-cloud.biz/projects/ac-designsystem)
- [S3: storybook デプロイ先](https://s3.console.aws.amazon.com/s3/buckets/dev-ambassador-cloud-crm-storybook?region=ap-northeast-1&tab=objects)

## 開発

## コミットルール

https://www.conventionalcommits.org/en/v1.0.0/

↓ みたいに書きたいです

```shell
# feat(スコープ): Redmineチケット番号 やったこと
feat(atoms): #1 ユーザーパスワード変更機能追加
```
