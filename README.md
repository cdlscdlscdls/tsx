# TypeScritp X Express.js で作るサーバサイド開発基盤

### 入っているもの
- Express.js
- TypeScript
- ESLint
- Prettier
- node-ts
- nodemon
- Docker
- routing-controller

### 使い方
cloneする
```
$ git clone https://github.com/cdlscdlscdls/tsx.git
```

cloneしたディレクトリに移動する
```
$ cd tsx
```

コンテナに入る
```
$ docker-compose run --rm web bash
```

モジュールをインストールする
```
# npm install
```

コンテナを抜ける
```
# exit
```

ビルドしてサーバを立ち上げる
```
$ docker-compose up --build web
```

下記リンクにて表示確認
=> http://localhost:3000

### 参考記事
[TypeScriptでExpress.js開発するときにやることまとめ (docker/lint/format/tsのまま実行/autoreload)](https://qiita.com/techneconn/items/012bdf1b9ff3881546b3)

[TypeScript チュートリアル](https://qiita.com/EBIHARA_kenji/items/31b7c1c62426bdabd263)

[TypeScriptでExpress.jsのコントローラー部分をクラスベースで書く](https://qiita.com/techneconn/items/331aa21654bb8b20a34d)

[github.com/typestack/routing-controllers/README.md](https://github.com/typestack/routing-controllers)
