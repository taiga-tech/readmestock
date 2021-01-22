---
title: readmestock
discription: ポートフォリオサイト
tags: [readmestock, readme]
---

## なぜ作ろうと思ったのか

就活をしていて、個人アプリをいくつか作成していると、
ある人に作ったものを一覧で確認できるようなポートフォリオサイトを作った方がいいと言われ、
普通にホームページのようなサイトを作成しても良かったのですが、ちょっと物足りなかったのと、
デザインが得意じゃない&何回も説明を書くのがめんどくさい、普通にめんどくさい。

まーいろいろ理由はありますが、<b>結論は、GitHub API v4でGraphQLが使ってみたかったからです。</b>

APIでREADMEを取得して、一覧表示&README確認が出来るようなシンプルなサイトを作成だけで
勉強も出来るしGitHubにpushするだけでコンテンツが勝手に追加されるような半自動ポートフォリオが出来るんじゃないかと考えました。
現在同じようなサービスがありそうな気もしましたが、先入観に囚われそうだったので、敢えて調べませんでした。
あと、もしそういうサービスが無いとしたら"GitHub見ればいいやん"ということかなーと思いながら作成しています。


## 開発環境

||version|
|---|---|
|Mac OS|Catalina 10.15.7|
|Node|v15.4.0|
|npm|7.0.15|
|Nuxt|2.14.12|
|Vue|2.6.12|
|Vuetify|2.4.2|


## Tree

```shell:shell
.
├── .circleci
│   └── config.yml
├── .gitignore
├── Dockerfile # node docker image
├── README.md
├── docker-compose.yml
└── src
    └── # nuxt 本体
```


## Dockerfile

```Dockerfile:Dockerfile
FROM node:current-alpine

RUN apk update && \
    apk add git && \
    npm install -g @vue/cli nuxt create-nuxt-app

WORKDIR /home/node/src

COPY ./src /home/node/src

RUN npm install

EXPOSE 3000
```


## docker-compose.yml

```yml:docker-compose.yml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: ./Dockerfile
    volumes:
      - ./src:/home/node/src
    ports:
      - 3000:3000
    environment:
      - HOST=0.0.0.0
    tty: true
```


## 起動

```shell:shell
# local
% docker compose up -d
% docker-compose exec app sh

# nodeコンテナ
/home/node/src # npx create-nuxt-app .
create-nuxt-app v3.4.0
✨  Generating Nuxt.js project in .
? Project name: app-name
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Vuetify.js
? Nuxt.js modules: (Press <space> to select, <a> to toggle all, <i> to invert selection)Axios, Progressive Web App (PWA), Content
? Linting tools: ESLint, Prettier, StyleLint
? Testing framework: None
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Static (Static/JAMStack hosting)
? Development tools: jsconfig.json (Recommended for VS Code if you're not using typescript)
? Continuous integration: None
? Version control system: Git
```


## グローバルscssの設定

`src/assets/scss`に`main.scss`を追加して`nuxt.config.js`を編集する

```js:src/nuxt.config.js
// Global CSS (https://go.nuxtjs.dev/config-css)
sass: ['@/assets/scss/main.scss'],
```


## 参考リンク

- https://ja.nuxtjs.org/faq/netlify-deployment/
- https://docs.github.com/ja/free-pro-team@latest/graphql/overview/explorer
