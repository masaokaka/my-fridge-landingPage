## 冷蔵庫アプリの LP

## コンテナイメージのビルド

docker compose build

## コンテナ起動＋アタッチモード

docker compose run -it myfridge-landingpage sh

## docker コンテナ内に作成された/src 配下にて以下のコマンドを実行

npm ci

## コンテナをデタッチモードで起動

docker-compose up -d

ローカルはポート 3001 で確認
