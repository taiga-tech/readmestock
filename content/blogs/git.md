---
title: Gitコマンド早見表
tags: Git GitHub
author: kohga
slide: false
discription: コマンド早見表
---
[作業別Gitコマンド集](https://qiita.com/kohga/items/20819414da2972bc5e0d)の圧縮版

## 初期設定を行う
```shell
% git config --global user.name "XXXX"
% git config --global user.email "XXXX@hogehoge.com"
```
## ローカルにリポジトリを作成し、リモートにプッシュする
```shell
% git init
% git add . # カレントディレクトリの全てのファイルをインデックスに追加する
% git commit -m "Initial commit"
% git remote add origin https://github.com/XXXX/XXXXXX.git
% git push -u origin master
```
## リモートからクローンする
```shell
% git clone https://github.com/XXXX/XXXXXX.git
```
## リモートから変更を取得する
```shell
% git pull
or
% git fetch
% git merge origin/master
```
## ファイルの登録（コミットするため）
```shell
% git add <ファイル名>
```
## ファイルの変更や追加をコミット
```shell
% git commit -m "コミットメッセージ"
```
## ローカルの変更を確認する
```shell
% git status
```
## リモートとローカルのファイルの差分を抽出する
```shell
% git diff <ファイル名>
```
## commitの変更履歴をみる
```shell
% git log
```
## 指定したcommitの変更点を見る
```shell
% git show <コミットのハッシュ値>
```
## リモートにプッシュ
```shell
% git push origin <ブランチ名>
```
## addの取り消し
```shell
% git reset HEAD <ファイル名>
```
## commitの取り消し
```shell
% git reset --hard HEAD^
```
--hard：コミット取り消した上でワークディレクトリの内容も書き換えたい場合
--soft：ワークディレクトリの内容はそのままでコミットだけを取り消したい場合
HEAD^：直前のコミット
HEAD~{n} ：n個前のコミット

## commitの打ち消し
```shell
% git revert <コミットのハッシュ値>
```
## コミットメッセージの修正
```shell
% git commit --amend "新しいコミットメッセージ"
```
## pushの取り消し
```shell
% git reset --hard <戻したいコミットのハッシュ値>
% git push -f
```
## ローカルでブランチを作成
```shell
% git branch <ブランチ名>
```
## ローカルでブランチを切り替え
```shell
% git checkout <ブランチ名>
```
## ブランチ作成 & 切り替え
```shell
% git checkout -b <ブランチ名>
```
## ブランチ名の変更
```shell
% git branch -m <古いブランチ名> <新しいブランチ名>
```
## ブランチの削除
```shell
% git branch -d <ブランチ名>
```
## ローカルのブランチをリモートに反映
```shell
% git push -u origin <ローカルのブランチ名>
```
## リモートのブランチをローカル持ってくる
```shell
% git branch <ブランチ名> origin/<ブランチ名>
```
## リモートのブランチをローカル持ってくる & 切り替え
```shell
% git checkout -b <ブランチ名> origin/<ブランチ名>
```
## 全てのブランチを確認する
```shell
% git branch -a
```
## ブランチを比較する
```shell
% git diff <ブランチ名> <ブランチ名>
```
## ブランチをマージする
```shell
% git merge <ブランチ名>
```
## fast-forwardの関係であっても必ずマージコミットを作る

```shell
% git merge --no-ff <ブランチ名>
```

## ブランチをリベースする
```shell
% git rebase <ブランチ名>
```
※ mergeの場合は分岐元、rebaseの場合は分岐先のブランチで実行するという点に注意してください。
## 変更点を一旦退避させる
```shell
% git stash save
```
## 退避した作業の一覧を見る
```shell
% git stash list
```
## 退避した作業を戻す
```shell
% git stash apply <stash名>
```
## 退避した作業を消す
```shell
% git stash drop <stash名>
```
## 退避した作業をすべて消す

```shell
% git stash clear
```
## ファイル削除
```shell
% git rm -f  <ファイル名>
```
## ファイルリネーム
```shell
% git mv <元のファイル名> <変えたいファイル名>
```
## ファイルを最新のコミットの状態に戻す
```shell
% git checkout HEAD <ファイル名>
```
## ファイルを指定コミットまで戻す
```shell
% git checkout <コミットのハッシュ値> <ファイル名>
```
## .gitignore を無視して追加する
```shell
% git add -f <ファイル名>
```
## ディレクトリだけ登録(.gitkeepをディレクトリに作成する)
```shell
% touch <ディレクトリ名>/.gitkeep
```

＜参考＞

- [Pro Git 第2版](https://git-scm.com/book/en/v2)
- [サルでもわかるGit入門](https://www.backlog.jp/git-guide)


## gitのアカウントの切り替えをしてpushするときに前のアカウントから弾かれる場合
  > リモートurlを設定する際にユーザ名を追加する

```shell
  git remote set-url origin https://<ユーザ名>@github.com/<ユーザ名>/<リポジトリ名>.git
```
git credential fill
git credential reject



# ブランチ関係（仮）
---
title: Gitブランチ関連コマンド
tags: Git AdventCalendar
author: ayakix
slide: false
---
[Git Advent Calendar / Jun.](http://qiita.com/advent-calendar/git)  **３日目**です。

ここでは、Gitのブランチ操作関連のコマンドをまとめたいと思います。

**現在のブランチから派生ブランチを作成する**
`git branch BN`

**作業ブランチを変更する**
`git checkout BN`

**上記２つを一度に行う**
`git checkout -b BN`
***
**ローカルブランチを確認する**
`git branch`

**リモートブランチを確認する**
`git branch -r`

**上記２つを一度に行う**
`git branch -a`
***
**現在の作業ブランチに指定ブランチをマージする**
`git merge BN`

**マージ後でも、元に戻せるようにする**
`git merge --no-ff BN`
***
**ブランチの削除**
`git branch -d BN`

**ブランチの削除(強制的)**
`git branch -D BN`
***
**リモート・リポジトリにブランチをプッシュする**
`git push origin BN`

**リモートブランチからローカルブランチを作成する**
`git checkout -b BN origin/BN`

**リモートリポジトリのブランチを取得して、ローカルブランチとする**
`git fetch origin RemoteBN:LocalBN`

**リモートブランチを削除する**
`git push origin :BN`
***
**ブランチの派生元ブランチを変更する**
`git rebase BN`

**ブランチを比較する**
`git diff BN1 BN2`
