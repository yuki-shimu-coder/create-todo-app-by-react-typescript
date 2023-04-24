# react-typescript-project
react,typescriptの環境構築

# はじめに

以下のツールを事前にインストールしてください

- Docker

## 開発の手順

ルートディレクトリで、下記コマンドを実行してイメージを構築してください

```
docker compose build
```

<!-- すでに作成済み -->
<!-- React, TypeScriptでプロジェクトを作成

```
docker compose run --rm frontend sh -c 'npx create-react-app frontend --template typescript'
``` -->

下記コマンドでDockerコンテナを起動してください

```
docker compose up -d
```

コンテナを起動したら、下記コマンドを実行してアプリの依存関係をインストールしてください

yarn installでインストールが完了したら、yarn startでアプリを起動してください。

yarn install実行済みの場合は、yarn startしてください。

```
docker compose exec frontend /bin/sh
cd frontend/
yarn install
yarn start
```


http://localhost:3000 にアクセスし、reactアプリが起動していることを確認してください。※起動には時間がかかります。