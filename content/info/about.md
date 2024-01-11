---
title: このサイトについて
description: APIでREADMEを取得し、一覧表示&README確認が出来る半自動ポートフォリオです。
createdAt: 2021-02-12T15:00:00.000Z
updatedAt: 2021-06-21T15:00:00.000Z
---

# このサイトについて

<p>
  <a href="https://app.netlify.com/sites/taiga-tech/deploys">
    <img src="https://api.netlify.com/api/v1/badges/99c0bb10-8848-4e05-8ce9-4bff55729361/deploy-status" alt="Netlify Status">
  </a>
  <a href="https://app.circleci.com/pipelines/github/taiga-tech/readmestock/">
    <img src="https://circleci.com/gh/taiga-tech/readmestock.svg?style=shield&circle-token=1759010c2aa0bbaeb1daefb62359e9662eef2921" alt="CircleCI">
  </a>
  <a href="https://github.com/taiga-tech/readmestock/issues">
    <img src="https://img.shields.io/github/issues/taiga-tech/readmestock" alt="issues">
  </a>
  <a href="https://github.com/taiga-tech/readmestock/stargazers">
    <img src="https://img.shields.io/github/stars/taiga-tech/readmestock" alt="stars">
  </a>
  <a href="https://github.com/taiga-tech/readmestock/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/taiga-tech/readmestock" alt="MIT License">
  </a>
</p>

## 開発環境
|           | Version          |
| --------- | ---------------- |
| Mac OS    | Catalina 10.15.7 |
| Node      | v15.4.0          |
| npm       | 7.0.15           |
| Nuxt      | 2.14.12          |
| Vue       | 2.6.12           |
| Vuetify   | 2.4.2            |
| GitHubAPI | v4               |

## 概要

**楽に, 自動的に, 勉強出来る**

**GitHubAPIでREADMEを取得し、一覧表示&README確認が出来る半自動ポートフォリオ**

## 作成理由 & 技術選定

ポートフォリオ作成する際に、楽にフロントだけで作成する方法を探していると、GitHubのリポジトリ情報を取得することで、
簡単かつ楽に半自動的なポートフォリオを作成することが出来ると考えました。

そして、GitHubAPIを調べていると、APIの種類に`RestAPI`と`GraphQL`というものがあることを知り、
GitHubAPI v4が`GraphQL`を使用していて、`GraphQL`の勉強も出来るため、v4を採用しました。

フロントは、以前Vueを使用したこともあり、Nuxtに興味があったのでNuxtを採用、デザインは`Vuetify`を採用し、
完全に頼り切って`それなり`かつ`楽`に作成しました。

しかし、`SPA`ではなく表示速度を意識して作成したいと思い`SSG`を採用しているため、リポジトリを追加した場合に、
ホスティング先のNetlifyでbuildし直さないと更新されないので、完全自動化とは言えないので、半自動としています。

ホスティング先に関しては、`Netlify`と`Vercel`どちらにしようか迷ったのですが、VercelはNext.jsを開発している会社らしく、
今後Reactも勉強してNextで何か作成する予定なのでその際にVercelを採用しようと考え、消去法でNetlifyを採用しました。

## 各ページ解説

```shell
├── トップページ
│   ├── 自己紹介
│   ├── 使用言語割合チャート
│   │   # GitHubのプライベートリポジトリ含めて使用したことのある言語の割合
│   ├── アプリ一覧
│   │   # 本番環境に上がっている、アプリ一覧
│   └── 各種リンク
│
├── readmes
│   ├── README一覧
│   └── README
│    # GitHubにpushすると、ほぼリアルタイムで更新
│
├── blogs
│   ├── ブログ記事一覧
│   └── ブログ記事
│    # 現在コンテンツ作成中で、最近勉強したことなどを追加していく予定
│
└── info
    ├── このサイトについて ※現在のページ
    └── お問い合わせ
    # Netlify formを使ってみたくて追加したページ、新規メッセージはDiscordで通知される
```

## トップページのLighthouse測定結果

### Desktop

![Lighthouse_desktop](https://taiga-tech.netlify.app/img/about/lighthouse_desktop.png)

### Mobile

![Lighthouse_mobile](https://taiga-tech.netlify.app/img/about/lighthouse_mobile.png)

### 測定結果を見て

Mobile測定でのパフォーマンスがかなり悪いようなので、改善していきたいと考えています。

## 参考サイト

- https://docs.github.com/en/graphql/overview/explorer/
- https://vuetifyjs.com/ja/
