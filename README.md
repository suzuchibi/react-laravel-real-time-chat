# Pusher + Laravel Echo でリアルタイムチャット

## 概要
Pusherサービスと Laravel Echo を使用した簡易的なリアルタイムチャット。フロント部分はReact。サーバーサイドは Laravel を使用。  
**（＊注 API認証は今回は割愛。）**

![demo](/doc/demo.png)

↓デモ動画（別々のブラウザを起動して動作確認しています。左側はChrome、右側はFirefox）  
![sample](/doc/demo2.gif)

## 開発環境
- Laravel 8.4
- node.js 14.17.4 (安定版)
- yarn 1.22+
- react 17.0.2
- laravel-echo 1.11.0
- pusher-js 7.0.3

## 対応ブラウザ
- Google Chrome 最新版
- Fire Fox 最新版
- Safari 最新版
- Microsoft Edge 最新版  

## 事前準備
- Dockerのインストール
- Pusherのアカウント登録

## Pusher について
Pusher とは WebSocket を使って両方向のインターネットやデバイスの送受信をリアルタイムで通信することができるサービスです。利用するにはアカウント登録が必要です。登録が完了したら、アプリ情報を利用するのでメモをしておいてください。

![Pusher1](/doc/pusher1.jpg)

## 実行方法

0 事前準備  
Docker でLEMP環境を構築しているので、事前に Docker をインストールしてください。

1 カレントディレクトリを docker に移動
```
$ cd docker
```
2 dockerディレクトリの env_example から[ .env ] ファイルを作成
```
$ cp env_example .env
```
COMPOSE_PROJECT_NAMEの値は自由に設定しても大丈夫です。
```
[.env]
COMPOSE_PROJECT_NAME=react_laravel_chat
```
3 mysqlの設定を確認。  
[ docker / mysql / Dockerfile ]  
mysqlの設定を確認しておいてください。お好きなように変更可能です。
```
FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=test \     <- デフォルトは test 自由に変更可。
  MYSQL_USER=test \  　　　　　　　　　　　　　　　　　　<- デフォルトは test 自由に変更可。
  MYSQL_PASSWORD=test \  　　　　　　　　　<- デフォルトは test 自由に変更可。
  MYSQL_ROOT_PASSWORD=test \  <- デフォルトは test 自由に変更可。
  TZ=Asia/Tokyo

COPY ./my.cnf /etc/my.cnf
RUN chmod 644 /etc/my.cnf
```
4 Docker起動（サーバーを起動させます。初回は時間かかります。）
```
$ docker-compose up -d
```
5 起動したらコンテナ内（workspace）にログイン
```
$ docker-compose exec workspace bash

あるいは

$ docker-compose exec workspace sh
```
6 workspace内に[ .env ] ファイルを作成
```
# cp .env.example .env
```
7 作成した[ .env ]を編集  
DB と Pusher を設定（DBのデータベース名、ユーザーネーム、パスワードは [3] で設定した内容です(^^)）
```
DB_CONNECTION=mysql
DB_HOST=chat_mysql
DB_PORT=3306
DB_DATABASE=test  <- [3] で設定した内容
DB_USERNAME=test  <- [3] で設定した内容
DB_PASSWORD=test  <- [3] で設定した内容

PUSHER_APP_ID=******  <- メモした APP_ID を入力
PUSHER_APP_KEY=******  <- メモした APP_KEY を入力
PUSHER_APP_SECRET=******  <- メモした APP_SECRET を入力
PUSHER_APP_CLUSTER=******  <- メモした APP_CLUSTER を入力
```
8 Laravelプロジェクトのキーを設定
```
# php artisan key:generate
```
9 マイグレーション実行（テーブル作成）  
※シーダー作成していますが、実行しなくても大丈夫です。
```
# php artisan migrate
```
10 コンテナからログアウト
```
ctr + p -> q もしくは # exit
```
http://localhost ブラウザで確認可能です。  
初回はユーザー登録がされていないので、「register」からユーザー登録を行なってログインしてください。

### 終了方法
docker終了（Dockerファイル全てを削除します。）
```
$ docker-compose down --rmi all --volumes --remove-orphans
```

## 参考URL
- https://blog.capilano-fw.com/?p=1418
- https://www.webprofessional.jp/add-real-time-notifications-laravel-pusher/

## Author
Author Toru Suzuki
