# Pusher + Laravel Echo でリアルタイムチャット

## 概要
Pusherサービスと Laravel Echo を使用した簡易的なリアルタイムチャット。フロント部分はReact。サーバーサイドは Laravel を使用。  
**（＊注 API認証は今回は割愛。）**

![demo](/doc/demo.png)

↓デモ動画（別々のブラウザを起動して動作確認しています。左側はChrome、右側はFirefox）  
![sample](/doc/demo2.gif)

## 開発環境
- Laravel 8.4
- node.js 14.17.4 (安定板)
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
2 Docker起動（サーバーを起動させます。初回は時間かかります。）
```
$ docker-compose up -d
```
3 起動したらコンテナ内にログイン
```
$ docker-compose exec chat_workspace bash
```
4 [ .env ] ファイルを作成
```
# cp .env.example .env
```
5 .env を編集  
DB と Pusher を設定（DBのデータベース名、ユーザーネーム、パスワードはお好きなように(^^)）
```
DB_CONNECTION=mysql
DB_HOST=chat_mysql
DB_PORT=3306
DB_DATABASE=test  <- 自由
DB_USERNAME=test  <- 自由
DB_PASSWORD=test  <- 自由

PUSHER_APP_ID=******  <- メモした APP_ID を入力
PUSHER_APP_KEY=******  <- メモした APP_KEY を入力
PUSHER_APP_SECRET=******  <- メモした APP_SECRET を入力
PUSHER_APP_CLUSTER=******  <- メモした APP_CLUSTER を入力
```
6 Laravelプロジェクトのキーを設定
```
# php artisan key:generate
```
7 マイグレーション実行（テーブル作成）  
※シーダー作成していますが、実行しなくても大丈夫です。
```
# php artisan migrate
```
http://localhost ブラウザで確認可能です。  
初回はユーザー登録がされていないので、「register」からユーザー登録を行なってログインしてください。

### 終了方法
コンテナからログアウト
```
ctr + p -> q もしくは # exit
```
docker終了
```
$ docker-compose down --rmi all --volumes --remove-orphans
```

## 参考URL
- https://blog.capilano-fw.com/?p=1418
- https://www.webprofessional.jp/add-real-time-notifications-laravel-pusher/

## Author
Author Toru Suzuki
