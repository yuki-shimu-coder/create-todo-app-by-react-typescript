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

React, TypeScriptでプロジェクトを作成

```
docker compose run --rm frontend sh -c 'npx create-react-app frontend --template typescript'
```

プロジェクトを作成したら、下記コマンドでDockerコンテナを起動してください

```
docker compose up
```

コンテナを起動したら、下記コマンドを実行してアプリの依存関係をインストールしてください

http://localhost:3000 にアクセスし、reactアプリが起動していることを確認してください。※起動には時間がかかります。