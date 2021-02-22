---
title: ターミナルでプロンプトを見やすくする方法
tags: [ Mac, ターミナル, プロンプト ]
description: ターミナルでプロンプトを見やすくする方法
createdAt: 2021-02-12T15:00:00.000Z
---

## 現在のプロンプトの確認
**＄マーク**から前のプロンプトを変更するには **PS1** という環境変数に別の値を入れるコマンドを入力する。
まずは、今入っている値を表示してみる。出力は `echo`コマンドで、変数を参照するには`echo $＋変数名`を実行する。

`cd`コマンドでホームディレクトリに移動し、`$ echo $PS1`を実行する。

**実行結果**
```shell
# [ホスト名]:[ディレクトリ名] [ユーザ名]$
  nakano-no-MacBook-Air-2:~ Taiga$ echo $PS1
  \h:\W \u$
```
バックスラッシュ入りの文字列が出てきた。
前から`\h（ホスト名） :（コロン） \W（ディレクトリ名） （スペース） \u（ユーザー名） $ （スペース）`となっている。

## プロンプトの変更
ここからホスト名＝コンピューター名・コロン・ユーザー名を削ってしまえばいい。JSのような変数への値代入を行う。

**実行結果**
```shell
  nakano-no-MacBook-Air-2:~ Taiga$ PS1='\W $ '
  ~ $
  #[現在のディレクトリ名] $
```
これで、プロンプトの **$** より前が**ディレクトリ名**だけになった。
ちなみに、**~** となっているのは**ホームディレクトリ**を表していて、場所はMacintosh HD > ユーザー > ※ココ（ユーザー名）。家のアイコンになっている。
簡単に変更できたが、この変更は一時的なものでターミナルを再起動したら元に戻ってしまう。常に変更した状態を保つには専用のファイルに記述する必要がある。

## プロンプトの保存
> 隠しファイル(.ファイル名)の表示方法 : finderを開いて`comand + shift + . (ドット)`ショートカットで表示される。

**shellが`/bin/bash`の場合**
  **Bash**はホームディレクトリに **.bash_profile** というファイルがあればターミナルログイン時（起動時）読み込む仕様。
  加えて、Bashの設定は .bashrc というファイルに書き込む。
  簡単に言えば、**.bash_profile** に **.bashrc** を使う設定を書き込んで、**.bashrc** には **PS1 変数の値代入** を書いておけばいいという話。
  ※ホームディレクトリに **.bash_profile** 、**bashrc** ファイルが無ければ、新規作成する。

**カスタマイズ項目**
|記号|意味|例|
|:--:|:--|:--|
| \h | ホスト名 | hamajunnoMacBook-Pro　|
| \u | ユーザ名 | hamajun |
| \w | ディレクトリ（フルパス） | ~/Documents/GitHub |
| \W | ディレクトリ | GitHub |
| \t | 時間 (24形式) | 23:29:38 |
| \T | 時間 (12形式) | 11:29:38 |
| \@ | AM / PM | PM |
| \d | 日付 | Wed Jun 20 |
| \D | 日時 | \D{%y/%m/%d %H:%M:%S}<br/>18/06/20 23:29:38 |
| \\# | コマンドの番号 (1, 2, 3...) | 1 |
| \n | 改行 | |
| \\\$ | 一般ユーザーの時 `$`、rootの時 `#` を表示| $ |

**文字色背景色コード**
  値 | 文字色 | 値 | 背景色 |
|:--:|:--:|:--:|:--:|
| 30m | <font color="#000000">黒</font> | 40m | <font color="#000000">■ </font>背景黒 |
| 31m | <font color="#AA0000">赤</font> | 41m | <font color="#AA0000">■ </font>背景赤 |
| 32m | <font color="#00AA00">緑</font> | 42m | <font color="#00AA00">■ </font>背景緑 |
| 33m | <font color="#AAAA00">黄</font> | 43m | <font color="#AAAA00">■ </font>背景黄 |
| 34m | <font color="#0000AA">青</font> | 44m | <font color="#0000AA">■ </font>背景青 |
| 35m | <font color="#AA00AA">紫</font> | 45m | <font color="#AA00AA">■ </font>背景紫 |
| 36m | <font color="#00AAAA">水</font> | 46m | <font color="#00AAAA">■ </font>背景水 |
| 37m | <font color="#AAAAAA">灰</font> | 47m | <font color="#AAAAAA">■ </font>背景灰 |


```shell
# /.bash_profile

  # bashにログインしたら.bashrcを読み込む設定
  if [ -f ~/.bashrc ]; then
    . ~/.bashrc
  fi
```

``` shell
# /.bashrc

  # 好きなプロンプトの形式を`$PS1`に代入
  PS1="\W $ "
```

---

**shellが`/bin/zsh`の場合(default)**

  **カスタマイズ項目**
|パラメータ|出力内容|例|
|:--:|:--|:--|
|%M|ホスト名|localhost.localdomain
|%m|ホスト名|localhost
|%n|ユーザ名|root
|%#|ユーザ種別| #(rootの場合)<br>%(root以外)
|%y|ログイン端末名|pts/0
|%l|ログイン端末名|pst/0<br>(tty*の場合はttyを省略)
|%?|直前のコマンドの戻り値|0
|%h|直前のコマンドの戻り値|0
|%!|コマンド実行数|（history数）	1
|%d|コマンド実行数|（history数）	1
|%/|カレントディレクトリ|/root/currentdir
|%~|カレントディレクトリ|~/currentdir
|%C<br>%c|カレントディレクトリ|currentdir
|%.|カレントディレクトリ|currentdir<br>(＄PWD=＄HOMEの場合は~)
|%D	|日付|12-07-31<br>書式）yy-mm-dd
|%W	|日付|07/31/12<br>書式）mm/dd/yy
|%w	|日付|Sun 31<br>書式）day dd
|%*	|時間|15:50:30<br>書式）hh:mm:ss
|%T<br>%t|時間|15:50<br>書式）hh:mm
|%@	|時間|03:50PM<br>書式）hh:mm(am/pm format)

**文字色コード**
|番号|色|
|:--|:--|
|0|<font color="black">■</font> black|
|1|<font color="red">■</font> red|
|2|<font color="green">■</font> green|
|3|<font color="yellow">■</font> yellow|
|4|<font color="blue">■</font> blue|
|5|<font color="magenta">■</font> magenta|
|6|<font color="cyan">■</font> cyan|
|7|<font color="white">■</font> white|


```shell
# .zshrc
  # 現在のディレクトリ表示
  export PS1="%c %"
```

---

**これでいつ起動しても`[現在のディレクトリ]`に変更された**

# MySetting
## /bin/zshの場合(default)

```shell
# .zshrc

  # export PS1="%c %"
  export PS1="%F{green}%c%f %# "
```

## /bin/bashの場合

```shell
# .bash_profile

if [ -f ~/.bashrc ]; then
  . ~/.bashrc
fi
```

``` shell
# .bashrc

  # PS1="\W $ "

  PS1="\[\e[32m\]\W\[\e[0m\] $ "

  # Warning取消
  export BASH_SILENCE_DEPRECATION_WARNING=1

  eval "$(rbenv init -)"
```
