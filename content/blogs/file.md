---
title: Ruby on Railsファイル構成
tags: [Ruby, Ruby on Rails]
description: railsファイル構成
createdAt: 2021-02-12T15:00:00.000Z
---

# Ruby on Railsファイル構成

## アプリのフォルダ,ファイルの役割
  ※あんまり使ったっことのないフォルダ、ファイルは省いてます。
## `rails new`すると↓のフォルダやファイルが生成される
  <img src="/img/file/first_app.png" width="40%" alt="新規App">

  - first_app
    - app
      > アプリのMVC(モデル、ビュー、コントローラ)が格納されているフォルダ
        めちゃくちゃ使う
    - config
      > アプリの設定ファイルが格納されているフォルダ
        ルーティングファイルや、データベースの設定ファイルがある
    - db
      > データベースのマイグレーションファイルなどが格納されているフォルダ
    - public
      > 公開フォルダ
        あんまり理解はできていないですが、今後使うかも。
    - test
      > テストを行う際のフォルダ
        使うみたいなんですけど、まだ試したことないんで詳細はわかりません。
        でも知っておいた方がいいと思う。
    - .gitnore
      > Gitのためのファイル
    - gemfile
      > gem(拡張機能みたいな感じ)を追加するファイル
        結構使うかも
    - gemfile.look
      > gemが追加されると自動生成されるファイル
    - README.md
      > アプリの説明書的なファイル

## 各フォルダの詳細
  - first_app
    - app
      - assets

        <img src="/img/file/assetsforder.png" width="40%" alt="assets">

        > イメージファイルや、スタイルシート(CSSファイル)などを格納するフォルダ
          スタイルを編集したい場合は`assets/stylesheets/コントローラ名.scss`を開く

      - controllers

        <img src="/img/file/controllers.png" width="40%" alt="controllers">

        > コントローラーファイルが格納されている
          アクションなどを編集したい場合は`controllers/コントローラ名_controller.rb`を開く

      - models

        <img src="/img/file/models.png" width="40%" alt="models">

        > モデルファイルが格納されている
          バリテーションなどを編集したい場合は`models/モデル名.rb`を開く

      - views

        <img src="/img/file/views.png" width="40%" alt="views">

        > ビューファイルが格納されている
          各ページの見た目を編集したい場合は`views/コントローラ名/アクション名.html.erb`を開く

    - config

        <img src="/img/file/config.png" width="40%" alt="config">

      > ルーティングファイルが格納されている
        ルーティングを編集する場合は、`config/routes.rb`を開く
        データベースの設定のときは、`database.yml`ファイルを開く

    - db
      - migrate

        <img src="/img/file/db.png" width="40%" alt="migrate">

        > マイグレーションファイルが格納されている
          マイグレーションを編集する場合は`migrate/***********_create_モデル名.rb`を開く

## applicationファイルについて

  <img src="/img/file/applicationcss.png" width="40%" alt="applicationcss">

  いろんなフォルダに`application.css`のように`application.~`があると思いますが、これはアプリ全体のプログラムを記載できるファイルです。

  (例)
  ```css
  /* assets/stylesheets/application.css */

  h1 {
    color: red;
  }
  ```

  と編集すると全てのコントローラ、アクションページのh1の文字の色が赤になる。

### まとめ
  他にも大事なファイルがあると思うんですけど、とりあえずここまで分かってたら楽になるはずです！
  雑に作ったんで間違ってるとことか分かりにくい表現があるかもしれないんでいつでも文句言ってください笑
